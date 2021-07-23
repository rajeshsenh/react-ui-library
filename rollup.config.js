import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const production = !process.env.ROLLUP_WATCH;
const bundle = "bundle";

const extensions = ['.mjs', '.js', '.jsx', '.json'];

export default {
  input: "src/index.js",
  output: [
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: "react-ui-library",
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        'react': 'React',
        'prop-types': 'PropTypes'
      },
      format: 'umd'
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
      extensions: extensions,
    }),
    production && terser()
  ],
  external: ['react', "prop-types"]
}