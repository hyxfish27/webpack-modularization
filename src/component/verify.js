import { isNil, isEmpty } from 'ramda'

export function isValid (num) {
  return !(isNil(num) || isEmpty(num))
}
