/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 01:07:19
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 01:08:46
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const dekHash: HashFn = string_ => {
  const length = string_.length;
  let hash = length;
  for (let i = 0; i < length; i++) {
    hash = ((hash << 5) ^ (hash >> 27)) ^ Number(string_.codePointAt(i));
  }

  return hash;
};

export default dekHash;
