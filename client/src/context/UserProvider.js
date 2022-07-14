import React from 'react'
import axios from 'axios'

const userAxios = axios.create()
export const UserContext = React.createContext()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        recipe: [],
        ingredients: [],
        errMsg: '',
        comments: []
    }

    const [allIngredients, setAllIngredients] = React.useState([])
    const [allRecipes, setAllRecipes] = React.useState([])

    const [userState, setUserState] = React.useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.message))
    }
    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => {
                console.log(err.response)
                handleAuthErr(err.response.data.message)
            })
    }
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            comments: [],
            recipe: [],
            ingredients: []
        })
    }
    function handleAuthErr(errMsg) {
       
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }
    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ''
        }))
    }
    function getAllComments() {
        userAxios.get(`/api/comment/${userState.comments}`)
            .then(res => {
                console.log(res.data)
                setUserState(prevUserState => ({
                    ...prevUserState,
                    comments: [res.data]
                }))
            })
            .catch(err => console.log(err))
    }
    function getUserIngredients() {
        userAxios.get(`/api/ingredients/${userState.user._id}`)
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                ingredients: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }
    function addIngredients(newIngredients) {
        userAxios.post(`/api/ingredients`, newIngredients)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    ingredients: [...prevUserState.ingredients,
                    res.data
                    ]
                }))
            })
            .catch(err => console.log(err))
    }
    function getUserRecipes() {
        userAxios.get(`/api/recipe/${userState.user._id}`)
            .then(res =>  setUserState(prevUserState => ({
                ...prevUserState,
                recipe: res.data
            })))
            .catch(err => console.log(err))
    }
    function getAllRecipes() {
        userAxios.get('/api/recipe')
            .then(res => setAllRecipes(res.data))
            .catch(err => console.log(err))
    }
    function addRecipes(newRecipe) {
        userAxios.post(`/api/recipe`, newRecipe)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    recipe: [...prevUserState.recipe,
                    res.data
                    ]
                }))
            })
    }

    const [meals, setMeals] = React.useState([])
    const [search, setSearch] =React.useState('')
    const [message, setMessage] = React.useState('')

    const getRecipes = React.useCallback((search) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>{
            if(res.data.meals === null){
                setMeals([])
                setMessage('No Meals found! Try another word!')
            }
            else{ 
                setMeals(res.data.meals)
            }
            
        })
        .catch(err=>console.log(err))
    },[])
    React.useEffect(() => {
        getUserIngredients()
        getUserRecipes()
    }, [])
    

    return (
        <UserContext.Provider
            value={{
                ...userState,
                userState,
                signup,
                login,
                logout,
                addIngredients,
                addRecipes,
                getAllComments,
                getAllRecipes,
                getUserIngredients,
                getUserRecipes,
                setAllIngredients,
                setAllRecipes,
                resetAuthErr,
                allIngredients,
                allRecipes,
                meals,
                setMeals,
                search,
                setSearch,
                getRecipes,
                message,
                userAxios,
                setUserState
            }}>
                {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider