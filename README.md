# TODO APP

## [Check Out Live](https://todooslist.web.app/)

https://todooslist.web.app/

## PROJECT SETUP

> Run the following commands

```
npm init

npm install typescript

npm i @types/materialize-css

npm install webpack webpack-cli ts-loader 

npm install webpack-dev-server

tsc --init

```
> Update the package.json file with the following lines, to enable webpack build and test server

```

"serve": "webpack-dev-server",
"build": "webpack",

```

> Update the tsconfig.json file with the following lines

```

"include": ["src"],
"types":["materialize-css"]

```

> Copy the webpack.config.js file and update to your needs

<br>

## INSTALLATION

```

npm install

npm run serve

```

<br>

## DEV SERVER  
```

npm run serve

```

<br>

## COMPILE TYPESCRIPT 
```

npm run build

```

<br>

## FIREBASE HOSTING

```
npm install -g firebase-tools

firebase login

firebase init

firebase serve (to test)

firebase deploy

```

## SET UP CI 
> After previous steps push to github

> Run
```
firebase login:ci
```

> copy code and create repo secret FIREBASE_TOKEN

> setup custom workflow

add the following run code

```
	sudo npm install -g firebase-tools
        firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
```


## NOTE
> Typescript has to be installed as a dev dependency fo webpack to compile it

> The mmaterialize-css type was installed so I can use functions from the library without getting any errors.
I still had to import the js CDN in the html code. 

> Check out [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) for js library ts types


