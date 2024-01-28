const fs = require('fs')

const rootPath = require.main.paths[0].split('node_modules')[0]

// add npm script
const packageJsonPath = `${rootPath}package.json`
if(fs.existsSync(packageJsonPath)) {
    console.info('postinstall: add package.json scripts')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath))

	if(!packageJson.scripts['build']) {
		packageJson.scripts['build'] = 'rm -Rf dist && tsc'
		fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
	}
}

// create tsconfig.json
const tsConfigPath = `${rootPath}tsconfig.json`
if(!fs.existsSync(tsConfigPath)) {
	const config = {
		"extends": "@unsync/tsconfig",
		"compilerOptions": {
			"outDir": "dist"
		},
		"include": ["./src/**/*"]
	}
	console.info('postinstall: create tsconfig.json')
	fs.writeFileSync(tsConfigPath, JSON.stringify(config, null, 2))
}
