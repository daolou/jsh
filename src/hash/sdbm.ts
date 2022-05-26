/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 01:16:46
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 01:18:21
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const sdbmHash: HashFn = string_ => {
  let hash = 0;
  const length = string_.length;

  for (let i = 0; i < length; i++) {
    hash = Number(string_.codePointAt(i)) + (hash << 6) + (hash << 16) - hash;
  }

  return hash;
};

export default sdbmHash;
