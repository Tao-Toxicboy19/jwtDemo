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