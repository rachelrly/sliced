import { parse } from '../slicer'
import { scaleRecipe } from './scaleIngredient'

export function recipeReducer(state, action) {
  switch (action.type) {
    case 'setConstant':
      // When constant is set, it scales and sets ingredients
      return {
        input: state.input,
        ingredients: scaleRecipe(action.payload.constant, state.ingredients),
        constant: action.payload.constant
      }
    case 'setInput':
      // When input is set, it parses and sets ingredients

      return {
        input: action.payload.input,
        ingredients: parse(action.payload.input + ' '),
        constant: 1
      }
    case 'setIngredient':
      const ingredients = state.ingredients.map((ingredient) =>
        ingredient?.id === action.payload.id
          ? {
              ...ingredient,
              active: 'none',
              [action.payload.prop]: action.payload.value
            }
          : ingredient
      )
      return { input: state.input, constant: state.constant, ingredients }
    case 'setIngredientActive':
      // Active can be 'none' | 'amount' | 'ingredient'
      const temp = state.ingredients.map((ingredient) =>
        ingredient.id === action.payload.id
          ? ingredient.setActive(action.payload.active)
          : ingredient
      )
      return { input: state.input, constant: state.constant, ingredients: temp }

    case 'deleteIngredient':
      const newIngredients = state.ingredients.filter(
        (ingredient) => ingredient?.id !== action.payload.id
      )
      return {
        input: state.input,
        constant: state.constant,
        ingredients: newIngredients
      }
    default:
      console.log('I AM RUNNING THE DEFAULT CASE IN REDUCER')
  }
}
