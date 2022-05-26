/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 01:09:19
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 01:10:41
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const djbHash: HashFn = string_ => {
  const length = string_.length;
  let hash = 5381;
  for (let i = 0; i < length; i++) {
    hash = ((hash << 5) + hash) + Number(string_.codePointAt(i));
  }

  return hash;
};

export default djbHash;
