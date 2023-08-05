yarn add tscyarn add typescript
yarn add typescript

yarn tsc --init

# tsconfig.json

{
"compilerOptions": {
"target": "es6",
"module": "commonjs",
"outDir": "dist",
"rootDir": "src",
"esModuleInterop": true
},
"include": [
"src/**/*.ts"
],
"exclude": [
"node_modules"
]
}
yarn add mongoose
yarn add @types/mongoose
yarn add express
yarn add @types/express
yarn add jsonwebtoken
yarn add @types/jsonwebtoken
yarn add dotenv
yarn add @types/dotenv
yarn add bcryptjs
yarn add @types/bcryptjs
yarn add nodemon
yarn add @types/nodemon

package.json
"scripts": {
"start": "ts-node-dev src/index.ts",
"test": "echo \"Error: no test specified\" && exit 1"
}
