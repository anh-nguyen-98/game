# Javascript: History and Hello World

## [History](#history)

- The name of the language is JavaScript, often abbreviated as JS. Though the name sounds similar to Java, the two languages are not directly related. They are very different from each other in how they are used, assembled and executed.
- JavaScript was officially released in Decemnber 1995 by Netscape corporation. JavaScript is an interpreted language.
- At the time, World Wide Web was growing rapidly. People needed not only beautiful web pages, but also dynamic ones, where the web page content (HTML, CSS) could be updated based on the users' interaction. However, at the time, the web pages were not polished and static. By being "static", everything on the web page remained the same all the time. Netscape Corporation was the first company to invest in creating a new scripting language that could create dynamic behaviours for web pages.
- JavaScript is mostly used in client-side web development. Client-side means the JavaScript code, together with HTML, CSS is downloaded and executed on browser - the client side (Google Chrome, Microsoft Edge, etc.) to display web pages to users including image/ video animation and update content according to user action (button click, mouse hovering, etc.), input validation. 
- Some great resources for learning JavaScript:

    Documentation
    - [JavaScript | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - [JavaScript Tutorial | W3 School](https://www.w3schools.com/js/)
    - [Javascript Tutorial | Tutorials Point](https://www.tutorialspoint.com/javascript/index.htm)

    Books
    - [Elequent JavaScript](https://eloquentjavascript.net/)
    - [Speaking JavaScript](https://www.oreilly.com/library/view/speaking-javascript/9781449365028/)
    
## [Getting Started](#getting-started)

### [A. Installation](#a-installation)
 
Follow these steps to install JavaScript to your machine:

1. Download Node.js [here](https://nodejs.org/en).

**Node.js** is a JavaScript runtime environment that helps executes your Javascript code outside the web browser (i.e. the IDE on your machine).

2. Install Node.js on your machine by:

    2.1. Open the downloaded package (installer). The Node.js Setup Wizard shows up.
   
    2.2. Keep clicking **Next** if you agree to the default configuration settings.
    
    2.3. Finally, click **Install**.
    
    2.4. When the installer finished, click **Finish**.

3. Check whether Node.js has been successfully installed on your computer by:
    
    3.1. Open `Terminal` on your computer (or `Command Prompt`/ `Powershell` on Windows).
 
    3.2. Run `node -v`.

The terminal should display the Node.js version installed on your computer.

### [B. Programming Environment](#b-programming-environment)

JavaScript does not come with a specific recommended programming environment. However, you can write and run JavaScript on many IDEs. Some popular choices are [Visual Studio Code](https://code.visualstudio.com/), [WebStorm](https://www.jetbrains.com/webstorm/).

My favorite one is Visual Studio Code (VSC). VSC comes with many great JavaScript extensions such as *JavaScript IntelliSense* for debugging, formatting, syntax-highlighting, autocompletion. Moreover, Visual Studio Code can be used for programming in multiple languages such as Java, Python, TypeScript, C++, C#, etc. Most importantly, it is free to use.

### [C. Running JavaScript](#c-running-javascript)

1. Open your favorite IDE. 
2. Create a new file with `<filename>.js` extension (e.g. `helloworld.js`). 
3. Write your JavaScript script (e.g. `console.log ("Hello World")`).
4. Open Terminal. On VSC, you click `View > Terminal`. 
5. In Terminal, change directory to the folder containing your `<filename>.js` file.
6. Type `node <filename>.js` (e.g. `node helloworld.js`) and press Enter. 


### [D. Writing comments in JavaScript](#d-writing-comments-in-javascript)

There are two ways for writing comments in JavaScript:
 - For single-line comments: comments start with two dashes `//`
 
 For example:
 
 ```javascript
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2
```

 - For multi-line comments: comments start with `/*` and end with `*/`

For example:

```javascript
/*
The code below will change the heading with id = "heading" in web page.
*/
document.getElementById("heading").innerHTML = "My First Page";
```
 
 ## [References](#references)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript History](https://en.wikipedia.org/wiki/JavaScript#History)
- [JavaScript Programming With Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
- [Working With JavaScript IntelliSense](https://code.visualstudio.com/docs/nodejs/working-with-javascript)
- [How to Run JavaScript in Visual Studio Code](https://linuxhint.com/javascript-visual-studio-code)
- [How to Install Nodejs and Npm on Windows?](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- [What is the Best IDE for JavaScript Programming in 2022?](https://dev.to/theme_selection/what-is-the-best-ide-for-javascript-development-in-2021-1pmn)
- [JavaScript Comments](https://www.w3schools.com/js/js_comments.asp)
 


