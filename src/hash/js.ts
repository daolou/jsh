/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 01:12:23
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 01:13:40
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const jsHash: HashFn = string_ => {
  let hash = 1_315_423_911;
  const length = string_.length;

  for (let i = 0; i < length; i++) {
    hash ^= ((hash << 5) + Number(string_.codePointAt(i)) + (hash >> 2));
  }

  return hash;
};

export default jsHash;
