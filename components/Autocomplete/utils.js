import { createFilterOptions } from '@material-ui/lab/Autocomplete'
import { prop, map, innerJoin, find, propEq, all, includes, is, isEmpty, isNil, props, omit } from 'ramda'
import { emptyArray } from '../../utils/constants'

export const findFirstNotNil = (propNames, option) => find(x => !isNil(x), props(propNames, option))
export const isStringOrNumber = option => is(String, option) || is(Number, option)

const hasStringOptions = options => all(is(String), options) && !isEmpty(options)

const filter = createFilterOptions()
export const filterOptions = (labelKey, valueKey, creatable) => (options, params) => {
  const filtered = filter(options, params)
  const { inputValue } = params

  // Suggest the creation of a new value if it's not empty and it doesn't already exist
  if (creatable && inputValue !== '' && !find(propEq(labelKey, inputValue), options)) {
    filtered.push(
      hasStringOptions(options)
        ? {
            _primitiveValue: inputValue,
            _createdOption: true
          }
        : {
            [valueKey]: inputValue,
            [labelKey]: inputValue,
            _createdOption: true
          }
    )
  }

  return filtered
}

export const getSimpleValue = (options, value, valueKey, isMultiSelection) => {
  if (isMultiSelection && (!is(Array, value) || isEmpty(options))) return emptyArray
  if (!all(is(Object), options)) return value

  // Add new options if the Autocomplete is multiSelection and creatable
  if (is(Array, value)) {
    const optionsSimpleValues = map(prop(valueKey), options)
    value?.map(v => {
      if (!includes(v, optionsSimpleValues)) options.push({ [valueKey]: v })
    })
  }

  const result = isMultiSelection ? innerJoin((o, v) => o[valueKey] === v, options, value) : find(propEq(valueKey, value), options)
  return result || null
}

export const computeChangedMultiValue = (input, simpleValue, valueKey, labelKey) =>
  simpleValue
    ? input.map(a => (is(String, a) ? a : findFirstNotNil([valueKey, labelKey, '_primitiveValue'], a)))
    : input.map(a => (is(String, a) ? a : prop('_primitiveValue', a) || omit(['_createdOption'], a)))

export const computeChangedSingleValue = (input, simpleValue, valueKey, labelKey) =>
  simpleValue ? findFirstNotNil([valueKey, labelKey], input) : prop('_primitiveValue', input) ?? omit(['_createdOption'], input)
