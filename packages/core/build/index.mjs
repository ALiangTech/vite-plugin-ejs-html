import * as rollup from 'rollup'
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
const inputOption = {
    input: './src/index.js',
    plugins: [ resolve(), commonjs(), json()]
};
const outputOption = {
    file: '../../bin/index.js',
    format: 'umd',
    name: 'ejsHtmlPlugin'
};

async function build () {
    const bundle = await rollup.rollup(inputOption)
    await bundle.write(outputOption)
}
build()