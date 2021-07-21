import { scaleIngredient } from '../utils/scaleIngredient'
import {UNIT_DATA} from '../config/constants'

test('returns the same values when the constant is 1', ()=> {
    const INPUT = {amount: {value: 1}, unit: UNIT_DATA.CUP}
    expect(scaleIngredient(INPUT)).toStrictEqual(INPUT)
})


test('scales amount for ingredients with no unit', ()=> {
    expect(scaleIngredient({amount: {value: 1}, unit: {}}, 2)).toStrictEqual({amount:2, unit: {}})
})