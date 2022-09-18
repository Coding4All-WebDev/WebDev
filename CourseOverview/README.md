# Welcome to the JS Course @Coding4All

---

### 1. History of the Web and JavaScript

#### https://youtu.be/Sh6lK57Cuk4 

---

### 1. Running JavaScript (Part 1)

> To traditionally run JavaScript we use the script tag in our HTML

```html

....

<script>
    for (let i = 0; i < 10; i++) {
        // used to print values
        console.log(i);
    }
</script>

....

```

> Or we link a JS file externally

```html
...
<script src="main.js"></script>
...
```

```js
// the main.js file in the same folder, but linked to the above html
    for (let i = 0; i < 10; i++) {
        // used to print values
        console.log(i);
    }
```

### 2. Running JavaScript in the Console without HTML (For testing only) (Part 2)

> Step 1. Open Chrome or MS Edge and press: Ctrl + Shift + I

<br>

> Step 2. Click on Console on the top menu bar

<br>

> Step 3. Type the following sample javascript code, and hit enter

```js

// Prints numbers from 0-9
for (let i = 0; i < 10; i++) { console.log(i); }

```

### 4. Issues?

How do I run my JavaScript programs just through the console, <br>
in the browser?
<br>

> *Note*
<br>
> We'd like to execute JavaScript like any other programming languages!!!

> What is Node.js and why does it exist?

##### https://nodejs.dev/en/learn/a-brief-history-of-nodejs/

<hr>

### 5. Running JS outside the browser via Node.js (Part 3)

> Step 1. Install Node.js from the link below
```
https://nodejs.org/en/
```

> Step 2. Open your terminal i.e CMD, PowerShell, Bash, ZSH etc. and type the following

```sh
# if the folllowing returns a version number, 
# the you have successfully installed Node.js

node --version

```

> Step 3. Type the following in your terminal

```sh
    node
```

> Step 4. Type the following to run JavaScript in your terminal, similar to running JavaScript in the Browser Console

```js
    // check the output
    for (let i = 0; i < 10; i++) { console.log(i); }
```

---

### 6. Running a JavaScript file with Node.js

> Step 1. Open your favourite editor, eg: Nodepad, Nodepad++, VS Code, etc

```js
for (let i = 0; i < 99; i++) {
    console.log(i);
}
```

> Step 2. Save the file with a ".js" extension at the end.

```
eg. if my file name is firstProgram, then I save it as firstProgram.js
```

> Step 3. Run the file with Node.js by executing the following command from relevant directory

```sh
node YourFileName.js
```

---

#### EXTRA
You can install VS Code too, which is a great editor with a lot of plugins. 
https://code.visualstudio.com/download




