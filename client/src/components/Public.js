import React from 'react'
import { UserContext } from '../context/UserProvider'
import '../styles/public.css'
import RecipeInst from './RecipeInst'

function Public() {
    const { getUserRecipes, meals, setMeals, search, setSearch, getRecipes , message,allRecipes } = React.useContext(UserContext)
    function handleChange(event) {
        setSearch(event.target.value)
    }
    console.log(search)
    const handleSearch =React.useCallback(()=> {
        getRecipes (search)
    },[search, getRecipes])
  
    
    return (
        <>
            <div className='head'>
                <div className="header">
                    <h1 className='h1'>
                        Welcome search for recipes here!
                    </h1>
                </div>
            <div className="search">
                <input type="text" placeholder="Search our meals" value={search} onChange ={handleChange} className ='input'/>
                <button onClick={handleSearch} className ='searchbtn'>Seach Meal</button>
            </div>
            </div>
            <div className="result">
                {meals.length >0 ? meals.map(meal =>(
                    <div className="meal" key={meal.idMeal}>
                       
                        <img  src={meal.strMealThumb} alt="#" className="img"/>
                        <h4>{meal.strMeal}</h4>
                        
                        <div className="model">
                            <RecipeInst meal ={meal}/>
                        </div>
                        {/* <h5>{meal.strCategory}</h5> */}
                        {/* <p className="in">{meal.strInstructions}</p> */}\
                       
                    </div>
                )): <h2>{message}</h2>}</div>
        </>
    )
}

export default Public
