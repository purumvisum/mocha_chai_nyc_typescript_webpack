const path = require('path');
module.exports = {
    entry: './tests/index.ts',
    output: {
        filename: 'test.build.js',
        path: path.join(__dirname, 'tests/'),
        publicPath: 'http://localhost:' + 3006 + '/tests'
    },
    devServer: {
        port: 3006,
        host: "127.0.0.1",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            code: path.resolve(__dirname, 'src/code/'),
            test: path.resolve(__dirname, 'src/test/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            }
        ]
    }
}
