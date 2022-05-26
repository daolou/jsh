/*
 * @Author: zhiguo.jzg
 * @Date: 2022-05-17 04:38:57
 * @Description: TODO: Description of file, its uses and information
 * @LastEditTime: 2022-05-27 04:59:01
 * @LastEditors: zhiguo.jzg
 */
import ts from 'rollup-plugin-ts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'jsh',
      sourcemap: true,
      exports: 'default',
      plugins: [
        terser(),
      ],
    },
  ],
  plugins: [

    commonjs({
      dynamicRequireTargets: ['src/hash/*.js', 'src/hash/*.ts'],
    }),
    resolve(),
    ts({
      tsconfig: 'tsconfig.json',
    }),
  ],
}, {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.es.js',
    format: 'es',
    sourcemap: true,
    exports: 'default',
  },
  plugins: [

    commonjs({
      dynamicRequireTargets: ['src/hash/*.js', 'src/hash/*.ts'],
    }),
    resolve(),
    ts({
      tsconfig: 'tsconfig.d.json',
      transpileOnly: true,
    }),
  ],
}];
