# Modern Riot - A UI architecture
*The neat web frontend setup with modern JavaScript syntax, modules and frameworks.*

## A Starting Point
The intention of this setup is to bring the great web enhancements to developers asap. So that we all can make use of awesome features and faster workflows.

For the actual application I mix Riot, a clean react-like UI library, with Cerebral, a declarative signaling framework for handling updates of the state. Our state is stored in a Baobab tree, a single immutable object with methods, cursors and [monkeys](https://github.com/Yomguithereal/baobab#computed-data-or-monkey-business). Styling happens with good ol' Less for now. PostCSS looks promising though.

The riot tags needs to be compiled, the ES6 syntax transpiled and the ES6 modules bundled. For this we've got webpack and babel. When developing we have webpack-dev-server to serve the app and rebuild necessary files whenever those are updated.

Give it a run, build something and let me know how you like it.

## Technologies included

* [Riot](http://riotjs.com)
* [Cerebral + Extras](http://cerebraljs.com)
* [Baobab](http://github.com/Yomguithereal/baobab)
* [Webpack](http://webpack.github.io)
* [Babel](http://babeljs.io)
* [Less](http://lesscss.org)


## Setup
Install all the dependencies.
```bash
npm i
```
Initialize the dev server.
```bash
npm run dev
- running on localhost:5555
```

## The App
This is actually a take on the [cerebral boilerplate](https://github.com/cerebral/cerebral-boilerplate). It's the same logic, but I've switched out all React code in favor of Riot.
