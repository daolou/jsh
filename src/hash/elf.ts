/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 00:17:49
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 00:49:35
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const elfHash: HashFn = string_ => {
  let hash = 0;
  let x = 0;
  const length = string_.length;
  for (let i = 0; i < length; i++) {
    hash = (hash << 4) + Number(string_.codePointAt(i));
    if ((x = hash & 0xF0_00_00_00) !== 0) {
      hash ^= (x >> 24);
      hash &= ~x;
    }
  }

  return (hash & 0x7F_FF_FF_FF);
};

export default elfHash;
