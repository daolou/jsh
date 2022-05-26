/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 01:04:39
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 01:06:47
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const bkdrHash: HashFn = string_ => {
  let hash = 0;
  const seed = 131; // 31 131 1313 13131 131313 etc..
  const length = string_.length;
  for (let i = 0; i < length; i++) {
    hash = (hash * seed) + Number(string_.codePointAt(i));
  }

  return hash;
};

export default bkdrHash;
