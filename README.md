Learn JSHint [![Code Climate](https://codeclimate.com/github/nelsonic/learn-jshint.png)](https://codeclimate.com/github/nelsonic/learn-jshint)
============

!["Software Bugs"](http://dilbert.com/dyn/str_strip/000000000/00000000/0000000/000000/80000/4000/500/84511/84511.strip.sunday.gif "Software Bugs")

Want to avoid bugs in your JavaScript code? <br />
Use jshint to automatically check your JavaScript code quality.

## Why?

1. To make your code consistently awesome.
2. Ensure that *everyone* on your team writes similar (*maintainable*) code
3. See *immediately* if code (quality) gets worse (and *remedy* it!)

## What?

If you have writen JavaScript code professionally <br />
you will know about
[The Good Parts](http://javascript.crockford.com/) by **Douglas Crockford**.

To *encourage* people to *only* use the predictable & well behaved ("good")
parts of JS <br />
[Crockford](https://github.com/douglascrockford) developed the
[JSLint](http://www.jslint.com/) code quality tool.

*However* ... many developers find Crockford's JSLint to be
***too restrictive*** and ***opinionated***

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


### [Atom](https://atom.io) Editor Linter Plugin

If you have made the switch to [Atom](https://atom.io) you can install the
[Linter Plugin](https://atom.io/packages/linter) by opening your **preferences**
(Click: Atom > Preferences or **&#x2318;** + **,**)

![Atom Preferences - Install Linter](http://i.imgur.com/FKGVciq.png)


### Sublime Text Plugin

*All* the kids are using SublimeText these days. <br />
if you prefer a different editor/ide,
check out: http://www.jshint.com/install/

Once you have [SublimeText](http://www.sublimetext.com/) *installed*.

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

### Create a .jshintrc (JSHint Configuration) File

Next *create* a file called **.jshintrc** in your project directory
and *paste* this sample configuration.

{
  "curly": true,
  "eqeqeq": true
}

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
