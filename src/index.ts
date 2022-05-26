/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-27 00:16:24
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 03:51:15
 * @LastEditors: zhiguo.jzg
 */
import * as hashMap from './hash';

type HashType = keyof typeof hashMap;
const allHash = Object.keys(hashMap);

const stringHash = (hashType: HashType, string_: string): number => {
  if (!allHash.includes(hashType)) {
    throw new Error(`${hashType} is not supported`);
  }

  const hashFn = hashMap[hashType];
  return hashFn(string_);
};

export default stringHash;
