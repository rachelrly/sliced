import React, { useEffect, useReducer } from 'react'

import { sample } from '../utils'
import { Ingredients } from './Ingredients'
import { Textarea } from './elements'
import { recipeReducer } from '../utils'

import styles from '../styles/modules/Recipe.module.css'

export function Recipe() {
  const [state, dispatch] = useReducer(recipeReducer, {
    input: '',
    constant: 1,
    ingredients: []
  })

  const handleActiveIngredient = ({ id, prop }) =>
    dispatch({ type: 'setIngredientActive', payload: { id, prop } })

  const handleChangeIngredient = ({ id, prop, value }) =>
    dispatch({
      type: 'setIngredient',
      payload: { id, prop, value }
    })

  const handleDeleteIngredient = ({ id }) =>
    dispatch({ type: 'deleteIngredient', payload: { id } })

  useEffect(() => {
    if (state.input === '')
      dispatch({ type: 'setInput', payload: { input: sample } })
  }, [])

  return (
    <div className={styles.recipe} id="slicer">
      <span className={styles.caption}>
        Copy and paste your favorite recipe below.
      </span>
      <Textarea input={state.input} />
      <Ingredients
        ingredients={state.ingredients}
        handleActiveIngredient={handleActiveIngredient}
        handleChangeIngredient={handleChangeIngredient}
        handleDeleteIngredient={handleDeleteIngredient}
      />
    </div>
  )
}
