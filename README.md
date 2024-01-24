# tsconfig

> Shared [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for my projects

## Install

```sh
npm install --save-dev @unsync/tsconfig
```

*This config requires TypeScript 5 or later.*

## Usage

`tsconfig.json`

```json
{
	"extends": "@unsync/tsconfig",
	"compilerOptions": {
		"outDir": "dist"
	}
}
```

When you are targeting a higher version of Node.js, check the relevant ECMAScript version and add it as `target`:

```json
{
	"extends": "@unsync/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
		"target": "ES2023"
	}
}
```
