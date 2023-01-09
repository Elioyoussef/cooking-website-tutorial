import React, { useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './Create.css'

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setcookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef(null)
  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
  }
  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    } 
    setNewIngredient('')
    ingredientsInput.current.focus()
  }
  return (
    <div className='create'>
        <h2 className='page-title'>Add a new recipe</h2>
        <form onSubmit={handleSubmit}>
          <label>
           <span>Enter the title</span>
           <input
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
            required
            />
          </label>
          <label>
            <span>Recipe Ingredients</span>
            <div className="ingredients">
              <input
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value = {newIngredient}
              ref = {ingredientsInput}
              />
              <button className='btn' onClick={handleAdd}>Add</button>
            </div>
          </label>
          <p> Current Ingredients: 
          {ingredients && ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
          </p>
          <label>
          <span>Enter the method</span>
           <textarea
           onChange={(e) => setMethod(e.target.value)}
           value = {method}
           required
           />
          </label>
          <label>
           <span>Enter the cooking time</span>
           <input 
           type="number" 
           onChange={(e) => setcookingTime(e.target.value)}
           value = {cookingTime}
           />
          </label>
          <button className='btn'>
            Submit
          </button>
        </form>
    </div>
  )
}

export default Create
