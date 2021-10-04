import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(Array.isArray(members) === false){
    return false;
  }
  let result = members.filter(e => typeof(e) === 'string');
  if(result.length === 0){
    return false;
  } else {
    result = result.map(e => e.trim().substring(0,1).toUpperCase());
    result = result.sort();
    result = result.join('');
    return result;
  }
}
