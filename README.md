Learn JSHint
============

![code quality cartoon](http://i.imgur.com/IC3cJde.png "code quality cartoon")

Want to reduce bugs in your JavaScript code? <br />
Use jshint to **automatically** check your JavaScript code.

## Why?

1. To make your code consistently awesome.
2. Ensure that *everyone* on your team writes similar (*maintainable*) code
3. See *immediately* if code (quality) gets worse (and *remedy* it!)

## What?

If you have writen JavaScript code *professionally* you will know about
[The Good Parts](http://javascript.crockford.com/) by **Douglas Crockford**.

To *encourage* people to *only* use the predictable & well behaved ("good")
parts of JS <br />
[Crockford](https://github.com/douglascrockford) developed the
[JSLint](http://www.jslint.com/) code quality tool.

*However* ... many developers find Crockford's JSLint to be
***too restrictive*** and "***opinionated***"

Read the discussion on StackOverflow: <br />
http://stackoverflow.com/questions/6803305/should-i-use-jslint-or-jshint-javascript-validation

And so **JSHint** was Born! A ***fork*** from JSLint, JShint allows developers
to be more pragmatic about which rules they follow by allowing us to
*define* our own set of rules (see below)

For a more *detailed introduction* to **JSHint**: http://jshint.com/about


## How?

### jshint.com

You *can* simply *paste* your code into the input area on http://jshint.com/
But that gets tedious after a few goes. You need a more robust (and
*automatic*) way of checking your code e.g. every time you save.

Docs: http://www.jshint.com/docs/

### Command Line

Install the **jshint** node.js module:
```
npm intstall jshint -g
```

Run the command:

```sh
jshint
```
(this runs the **jshint** command over *all* the files in the current working directory)


Want to use a specific configuration file and exlude everything in your .gitignore file?
```
jshint -c .jshintrc --exclude-path .gitignore .
```

### Pre-commit Hooks

Pre-commit Hooks *prevent* people from commiting un-linted code!
So sloppy code never leaves the lazy developer's machine and your Git repo is always clean & tidy!

This deserved its own tutorial: https://github.com/nelsonic/learn-pre-commit 



### [Atom](https://atom.io) Editor Linter Plugin

Once you have made the switch to [Atom](https://atom.io) Editor you can
install the [Linter Plugin](https://atom.io/packages/linter) by opening your
**preferences** <br/> (Click: Atom > Preferences *or* **&#x2318;** + **,**)

![Atom Preferences - Install Linter](http://i.imgur.com/FKGVciq.png)

Once the plugin has installed click on **settings**

![Atom Pref - click linter settings](http://i.imgur.com/ED2Jnyo.png)

In addition to the linter you need to select the language you want
Atom to lint. <br />
In our case its JavaScript so in the packages interface search for:
**linter-jshint**

![linter-jshint](http://i.imgur.com/YEO2CJa.png)

Now when ever your code has issues you will see a "dot" on the line.
Simply correct it and continue coding! :-)

![atom linter-jshint showing error messages](http://i.imgur.com/I5qJquA.png)


### [Brackets](http://brackets.io/) Editor

If you use the open source Adobe Brackets text editor, you can install **JSHint** <br/> by going into **Extensions Manager** </br> on the top right hand side, and search for **JSHint** <br/>

![JSHint](http://i.imgur.com/yFyBRTM.png)

This will show you hints at the bottom of the editor but you can go one step further!

You can install another pluging called **Interactive Linter** <br/>

![Interactive Linter](http://i.imgur.com/PcvLitA.png)

This will show lightbulbs next to any errors you make!

![Demo](http://i.imgur.com/Von1N9k.png)


### SublimeText Plugin

If you are still using [SublimeText](http://www.sublimetext.com/)
there is a good JSHint package you can use.


Install **Package Control** (if you don't already have it)
https://sublime.wbond.net/installation#st2 <br />
[ follow their installation instructions ]

*Next* install **SublimeLinter**
https://github.com/SublimeLinter/SublimeLinter

Inside SublimeText click: Tools > **Command Palette**

Type (or paste): **Package Control: Install Package** <br />
into the Command Palette and wait for SublimeText
to update the list of packages.

Now you can *paste*: **SublimeLinter** into the
Command Palette to install the Linter.

## Other Editors

### WebStorm ?

> See: http://www.jetbrains.com/webstorm/webhelp/jshint.html

### Eclipse ?

> See: http://github.eclipsesource.com/jshint-eclipse/install.html and https://github.com/angelozerr/tern.java/wiki/Tern-Linter

### IntelliJ Idea ?

> See: http://blog.jetbrains.com/idea/2012/05/lint-your-javascript-with-jslintjshint-in-real-time/




### Create a .jshintrc (JSHint Configuration) File

Next *create* a file called **.jshintrc** in your project directory
and *paste* this sample configuration.
```
{
  "curly": true,
  "eqeqeq": true
}
```
- **curly** enforces that all code blocks should *always* be
surrounded with curly braces.
- **eqeqeq** prohibits the use of == and !=,
instead developers should use === and !==

For the **full list** of **JSHint options** see:
http://www.jshint.com/docs/options/

### Sample JavaScript File

now create your JS file **example.js** and paste in some *un-linted* code:

```javascript
var test = true;
if(test == true){
	console.log("JSHint Should Flag this double equals...")
}

if(test === false)
	console.log('and it should spot the lack of curly braces here...')
```

You should expect to see something like this:

![Imgur](http://i.imgur.com/NE1fEDq.png "JSHint warnings on lines 2,3 & 7")

Notice how lines 2, 3 and 7 have a red circle with an exclamation mark in them?
These are JSHint warnings because the code does not conform to the definitions
we set in our **.jshintrc** file above. Namely there is a **==** on line 2
and the second conditional (if) statmente is not wrapped in curly braces.

Additionally line 3 is flagged because it does not end with a semicolon.

We can *easily* fix the code:

```javascript
var test = true;
if(test === true) {
	console.log("JSHint Should Flag this double equals...");
}

if(test === false) {
	console.log('and it should spot the lack of curly braces here...');
}
```

Now SublimeLinter will no longer display any errors:

![Imgur](http://i.imgur.com/HqqrTpo.png "no more jshint errors")

Now you *know* how to use jshint.
Go forth and make your JavaScript Awesome! :-)


## Further Reading

- **Full List** of JSHint Options: http://www.jshint.com/docs/options/
- JSHint Strict Edition: https://gist.github.com/haschek/2595796
- How to use jslint in node.js projects: https://coderwall.com/p/-h1h1w
- http://blog.teamtreehouse.com/improving-code-quality-jshint



## Top Tip: Add *CodeClimate* to your Project

To *confirm* that your code quality is consistent, and *track* quality over time,
add CodeClimate to your project: https://codeclimate.com/tour/trends
[free for Open Source GitHub projects](https://codeclimate.com/github/signup)

[![Code Climate](https://codeclimate.com/github/docdis/learn-jshint.png)](https://codeclimate.com/github/docdis/learn-jshint) 
[![Build Status](https://travis-ci.org/docdis/learn-jshint.svg?branch=master)](https://travis-ci.org/docdis/learn-jshint)
