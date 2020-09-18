/**
 * Remove duplicated items in array
 *
 * @export
 * @param {Array<any>} array
 * @return {*}  {Array<any>}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function removeDuplicatedItems(array: Array<any>): Array<any> {
  return array.filter((a, b) => array.indexOf(a) === b);
}
