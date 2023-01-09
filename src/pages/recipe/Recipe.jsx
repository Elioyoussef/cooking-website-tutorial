import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'


const Recipe = () => {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id;

  const { data: recipe, isPending, error } = useFetch(url)
  return (
    <div className='recipe'>
      {isPending && <div className='loading'>loading.. </div>}
      {error && <p className='error'>{error}</p>}
      {recipe && (
        <>
        <h2 className='page-titles'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook.</p>
        <ul>
            {
              recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))
            }
        </ul>
        <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe
