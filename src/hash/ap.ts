/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 01:01:39
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 01:07:01
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const apHash: HashFn = string_ => {
  let hash = 0xAA_AA_AA_AA;
  const length = string_.length;
  for (let i = 0; i < length; i++) {
    hash ^= (i & 1) === 0 ? ((hash << 7) ^ Number(string_.codePointAt(i)) * (hash >> 3)) : (~((hash << 11) + Number(string_.codePointAt(i)) ^ (hash >> 5)));
  }

  return hash;
};

export default apHash;
