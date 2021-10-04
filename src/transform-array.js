import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error('\'arr\' parameter must be an instance of the Array!');
  }

  let transformed = [];
  for (let i = 0; i < arr.length; i++) {
    if( arr[i]==='--discard-next' ||
        arr[i]==='--discard-prev' ||
        arr[i]==='--double-next' ||
        arr[i]==='--double-prev') continue;

    transformed.push(arr[i]);
    
    if(arr[i-1] === '--discard-next'){
      transformed.pop();
      continue;
    }
    if(arr[i-1] === '--double-next'){
      transformed.push(arr[i]);
    }
    if(arr[i+1] === '--discard-prev'){
      transformed.pop();
      continue;
    }
    if(arr[i+1] === '--double-prev'){
      transformed.push(arr[i]);
    }
  }
  return transformed;
}
