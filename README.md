# mocha + chai + nyc + typescript + webpack
sample app to start project with mocha test with test coverage	sample app to start project with mocha test with test coverage

 `npm start` run project on http://localhost:8080/

 `npm test` runt test cases in console with test coverage

 `npm testUI` runt test cases in browser (http://localhost:3006/tests/) 

 ## Configs:

 *mocha.opts*
```javascript
--require ts-node/register //You can run typescript directly on the node with the ts-node package
--require tsconfig-paths/register // Helps with aliases (tsconfig path)
--require source-map-support/register
--full-trace
--recursive
--bail
src/**/*.test.ts
```

 *package.json*
```javascript
...
 "scripts": {
    // run dev server with separate webpack config
    "testUI": "webpack-dev-server --config webpack.test.config.js",
    // run mocha in console with test coverage but with changed tsconfig (node does not understand es6 modules)
    "test": "set TS_NODE_COMPILER_OPTIONS={\"module\":\"commonjs\"} && nyc mocha --opts ./tests/mocha.opts", 
    "webpack": "webpack",
    "webpack-dev-server": "webpack-dev-server --env.mode development --open",
    "dev": "npm run webpack-dev-server",
    "start": "npm run dev"
  },
  // set up nyc configurations
  "nyc": {
    "extends": "@istanbuljs/nyc-config-typescript",
    "all": true,
    "extension": [
      ".ts",
      ".tsx"
    ],
    "exclude": [
      "**/*.js",
      "**/*.test.ts",
      "**/*.test.tsx"
    ],
    "reporter": [
      "text",
      "lcov",
      "html"
    ],
    "check-coverage": true,
    "excludeNodeModules": true
  },
...
```
