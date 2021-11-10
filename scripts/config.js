const path = require('path')
const node = require('rollup-plugin-node-resolve') // 支持第三方包
const cjs = require('rollup-plugin-commonjs') // 转commonjs to es
const buble = require('rollup-plugin-buble') // 转为es5
const { terser } = require('rollup-plugin-terser') // 代码压缩
const version = process.env.VERSION || require('../package.json').version

const resolve = p => {
    return path.resolve(__dirname,'../',p);
}


// 默认配置
const defaultPlugins = [
    node(),
    cjs(),
    buble()
];

const builds = {
    'fe-utils': {
        entry: resolve('dist/src/index.js'),
        dest: resolve('lib/fe-utils.js'),
        format: 'umd',
        moduleName: 'feUtils',
        plugins: defaultPlugins
    },
    'fe-utils-min': {
        entry: resolve('dist/src/index.js'),
        dest: resolve('lib/fe-utils-min.js'),
        format: 'umd',
        moduleName: 'feUtils',
        plugins: [...defaultPlugins, terser()]
    },
    'fe-utils-cjs': {
        entry: resolve('dist/src/index.js'),
        dest: resolve('lib/fe-utils-cjs.js'),
        format: 'cjs',
        plugins: defaultPlugins
    },
    'fe-utils-esm': {
        entry: resolve('dist/src/index.js'),
        dest: resolve('lib/fe-utils-esm.js'),
        format: 'es',
        plugins: defaultPlugins
    },
}

/**
 * 获取对应name的打包配置
 * @param {*} name 
 */
function getConfig(name) {
    const opts = builds[name];
    const config = {
        input: opts.entry,
        external: opts.external || [],
        plugins: opts.plugins || [],
        output: {
            file: opts.dest,
            format: opts.format,
            name: opts.moduleName || 'feUtils',
            globals: opts.globals,
            exports: 'named', /** Disable warning for default imports */
        },
        onwarn: (msg, warn) => {
            warn(msg);
        }
    }

    Object.defineProperty(config, '_name', {
        enumerable: false,
        value: name
    });
    return config;
}

if(process.env.TARGET) {
    module.exports = getConfig(process.env.TARGET);
}else {
    exports.defaultPlugins = defaultPlugins;
    exports.getBuild = getConfig;
    exports.getAllBuilds = () => Object.keys(builds).map(getConfig);
}