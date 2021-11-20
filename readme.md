### Steps to Run the Code

1. Run `npm install` at the command-line from the root of the `solution` directory (where the package.json file lives). 
2. Run `npm run webpack:w` to start the TypeScript build process in a command window. This will compile all of the TypeScript files and generate `.js` and `.map` (for debugging) files. A watcher will also be created to monitor any changes in the .ts files. Leave the command-window open while doing development work.
3. Run `npm start` in a separate command window. This will launch a local web server and browser.

**Note:** When you're done running the code press `ctrl+c` in each of the command windows you opened above to stop the running processes.

### Compiling and testing the Code
1. tsc - will install all TypeScript files and generate JS files
2. npm run webpack - will bundle all of the JS files into bundle.js
3. npm start - launches a local server and browser
