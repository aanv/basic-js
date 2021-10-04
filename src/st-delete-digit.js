import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) { 
  let arr = n.toString().split('');
  const len = arr.length;
  if(len===1){
    return 0;
  }
  else {
    for(let i = 0; i < len - 1; i++){
      if(+arr[i] < +arr[i+1]){
        arr.splice(i, 1);
        break;
      }
    }
  }
  if(arr.length === len){
    arr.pop();
  }
  return +arr.join('') ;
}
