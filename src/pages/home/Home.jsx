import React from 'react'
import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'


const Home = () => {
  const url = 'http://localhost:3000/recipes'
  const {data:recipes, isPending, error} = useFetch(url)

  return (
    <div className='home'>
      {isPending && <div className='loading'>loading...</div>}
      {error && <div className='error'>{error}</div>}
      {recipes && <RecipeList recipes={recipes}/>}
    </div>
  )
}

export default Home
