import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'

import { terser } from 'rollup-plugin-terser'

import builtinModules from 'builtin-modules'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/expanded-bundle.js',
      format: 'cjs',
      strict: false,
    },
    {
      file: 'dist/main.min.js',
      format: 'cjs',
      strict: false,
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript(),
    alias(),
  ],
  external: [
    ...builtinModules,

    // modules to install
    'ws',
  ],
}
