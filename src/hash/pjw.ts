/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 01:14:08
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 01:15:34
 * @LastEditors: zhiguo.jzg
 */
import {HashFn} from '../const';

const pjwHash: HashFn = string_ => {
  const bitsInUnsignedInt = 4 * 8;
  const threeQuarters = (bitsInUnsignedInt * 3) / 4;
  const oneEighth = (bitsInUnsignedInt / 8);
  const highBits = (0xFF_FF_FF_FF) << (bitsInUnsignedInt - oneEighth);
  let hash = 0;
  let test = 0;
  for (let i = 0; i < string_.length; i++) {
    hash = (hash << oneEighth) + Number(string_.codePointAt(i));
    if ((test = hash & highBits) !== 0) {
      hash = ((hash ^ (test >> threeQuarters)) & (~highBits));
    }
  }

  return hash;
};

export default pjwHash;
