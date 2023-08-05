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
yarn add bcrypt
yarn add @types/bcrypt
yarn add nodemon
yarn add @types/nodemon
yarn add mongoose@latest
yarn add @types/mongoose@latest --save-dev

package.json
"scripts": {
"start": "ts-node-dev src/index.ts",
"test": "echo \"Error: no test specified\" && exit 1"
}

.ENV
MONGO_USERNAME="Username"
MONGO_PASSWORD="Password"
SERVER_PORT=5050

TOKEN_KEY=prayut