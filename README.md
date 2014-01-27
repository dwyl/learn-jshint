learn-jshint
============

Learn how to use the jshint code quality/consistency tool.

## What?

If you're completely new to JSHint read: http://jshint.com/about/


If you have writen JavaScript code professionally you will have come accross 
[The Good Parts](http://javascript.crockford.com/) by **Douglas Crockford**.

To *encourage* people to *only* use the predictable & well behaved ("good")
parts of JS, <br />
[Crockford](https://github.com/douglascrockford) developed the
[JSLint](http://www.jslint.com/) code quality tool.~~

*However* ... many developers find Crockford's JSLint to be 
***too restrictive*** and ***opinionated*** 

See:
http://stackoverflow.com/questions/6803305/should-i-use-jslint-or-jshint-javascript-validation
for the discussion.


## Why?

1. To make your code consistently awesome.
2. Ensure that *everyone* on your team writes similar (*maintainable*) code
3. See *immediately* if code (quality) gets worse (and *remedy* it!)

## How?

### jshint.com

You *can* simply paste your code into the input area on http://jshint.com/
But that gets tedious after a few goes. You need a more robust (and
*automatic*) way of checking your code e.g. every time you save.

Docs: http://www.jshint.com/docs/


### Sublime Text Plugin

Once you have [SublimeText](http://www.sublimetext.com/) *installed*.

Install **Package Control** (if you don't already have it)
https://sublime.wbond.net/installation#st2
[ follow their installation instructions ]

*Next* install **SublimeLinter** 
https://github.com/SublimeLinter/SublimeLinter

Inside SublimeText click: Tools > **Command Palette**

Type (or paste): **Package Control: Install Package**
into the Command Palette and wait for SublimeText 
to update the list of packages.

Now you can paste: SublimeLinter into the 
Command Palette to install the linter.

### Create a .jshintrc (JSHint Configuration) File

Create a file called **.jshintrc** in your project directory
and *paste* this sample configuration.

{
  "curly": true,
  "eqeqeq": true
}

- **curly** enforces that all code blocks should *always* be 
surrounded with curly braces.
- **eqeqeq** prohibits the use of == and !=, 
instead developers should use === and !==

### Sample JavaScript File

now create your JS file **example.js** and paste in some un-linted code:

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

we can easily fix the code:




### Command Line

If you just want to use JSHint on the command line,
or want to add it to your exisiting build system:

```
sudo npm install jshint -g
```

	

## Further Reading

- **Full List** of JSHint Options: http://www.jshint.com/docs/options/
- JSHint Strict Edition: https://gist.github.com/haschek/2595796
- How to use jslint in node.js projects: https://coderwall.com/p/-h1h1w
- http://blog.teamtreehouse.com/improving-code-quality-jshint


### [*Future*] Other Editors

> *Most* Other Editors/IDEs have a similar plugin: 
> see: http://www.jshint.com/docs/options/
> I intend to move all my editing to Cloud9 (or similar) soon
> and will update this tutorial when that happens.


## Top Tip: Add CodeClimate to your Project [![Code Climate](https://codeclimate.com/github/nelsonic/learn-jshint.png)](https://codeclimate.com/github/nelsonic/learn-jshint)

To *confirm* that your code quality is consistent, and *track* quality over time,
add CodeClimate to your project: https://codeclimate.com/tour/trends
[free for Open Source GitHub projects](https://codeclimate.com/github/signup)
