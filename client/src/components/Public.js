import React from 'react'
import { UserContext } from '../context/UserProvider'
import '../styles/public.css'
import RecipeInst from './RecipeInst'
function Public() {
    const { getUserRecipes, meals, setMeals, search, setSearch, getRecipes , message,allRecipes } = React.useContext(UserContext)
    function handleChange(event) {
        setSearch(event.target.value)
    }
    const handleSearch =React.useCallback(()=> {
        getRecipes (search)
    },[search, getRecipes])
    return (
        <>
             <div className="home">
      <div className="head203">
        <h1 className="h1">About The LGBT Community</h1>
      </div>
      <p className="whyp">
        LGBTLGBTQIA+ is an abbreviation for lesbian, gay, bisexual, transgender, queer or questioning, intersex, asexual, and more. These terms are used to describe a person’s sexual orientation or gender identity. Social movements, organizing around the acceptance and rights of persons who might today identify as LGBT or queer, began as responses to centuries of persecution by church, state, and medical authorities. Where homosexual activity or deviance from established gender roles/dress was banned by law or traditional custom, such condemnation might be communicated through sensational public trials, exile, medical warnings, and language from the pulpit. These paths of persecution entrenched homophobia for centuries—but also alerted entire populations to the existence of difference.
      </p>
      <div className="whyp">
        <h1 className="h2"> Our Project</h1>
        <p className="whyp"> Our project is a blog/ informational to bring awareness to the LBGT+ community and movements. Our goal is to bring awareness to the issues that the LGBt community faces causes for the South shore. The LGBT comunity majorly impacts the youth in all communities, and Lbgt people often feel as if they have to live in fear or have to hode their identities. </p>
      </div>
    
      <div className="lh">
        
        <h1 className="h2"> About Different movements</h1>
        <p className="whyp">
        June is Pride Month in many countries around the world, a time to reflect on the feelings of joy and liberation that run concurrently with the feelings of unstoppable determination within the LGBTQ community.

Pride parades are a staple of the celebratory month in cities across the globe ever since the first gathering in New York in 1970. Attendees and participants revel in the joy of being unapologetically queer in a public space while also remembering the fight to do in decades past.

The 21st century, however, hasn’t ushered away the feelings of inequality still commonly felt by the LGBTQ community. The “Don’t Ask, Don’t Tell Repeal Act” wasn’t passed until 2010. The United Nations Human Rights Council only recognized rights for the LGBTQ community in 2011, and same-sex marriage wasn’t legal until 2015. Only  in 2020 were LGBTQ employees granted rights of protection against discrimination in the workplace. Society is just starting to catch up.
        </p>
      </div>
      <h1 className="h2"> Why is Bringing Awareness Important to the LGBT community</h1>
      <div className="mentals">
        <div className="mental">
          <p className="p1">
          
           
            <h2 className="h2">Mental Health </h2>
            Among LGBT youth, mental health issues stemming from rejection are at alarming levels.  According to a research study done by the Family Acceptance Project (San Francisco State University), compared to teens who have not faced rejection LGBT teens who have faced rejection from their families/ caregivers/ peers are six times more likely to report high levels of depression, six times more likely to experiment with drugs, and eight times more likely to commit suicide. Approximately 30-40% of all LGBT youth who have faced rejection on account of being LGBT have attempted suicide. 
          </p>
        </div>
        <div className="mental">
          <p className="p1">
            
           
            <h2 className="h2">Risk of Homelessness Teens Face</h2>
            Homelessness among LGBT youth is extremely high compared to the rest of the population. According to a study by the UCLA School of Law LGBT youth make up approximately 35-40% of homeless youth, despite constituting only  about 5% of the overall youth.
          </p>
        </div>
        <div className="mental">
          <p className="p1">
            
           <h2 className="h2">Safety</h2> 
           LGBT awareness has led school districts to adopt policies that protect LGBT students. This includes inclusive anti-bullying policies. According to one study (Kosciw, Greytak, Diaz, & Bartkiewicz, 2010) 84% of LGBT students report being bullied in school.  In addition, 82% reported being verbally harassed at school because of their sexual orientation, and over 18% reported being physically assaulted (O'Malley Olson, Kann, Vivolo-Kantor, Kinchen, and McManus, 2014).  
          </p>
        </div>
      </div>
    </div>
        </>
    )
}
export default Public
