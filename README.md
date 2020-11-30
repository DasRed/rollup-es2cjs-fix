# rollup-es2cjs-fix

Fix the rollup ES modules to CommonJS bug.
Usage 
```js
import es2cjs from 'rollup-es2cjs-fix';

export default {
    input:    './src/index.js',
    output:   {
        dir:                 './dist/',
        format:              'cjs',
        exports:             'named',
        sourcemap:           false,
        preserveModules:     true,
        preserveModulesRoot: 'src',
    },
    external: [...builtinModules, ...Object.keys(dependencies)],
    plugins:  [
        es2cjs(),
    ]
};
```
