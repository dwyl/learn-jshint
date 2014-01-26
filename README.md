learn-jshint
============

Learn how to use the jshint code quality/consistency tool.

## What?

If you're completely new to JSHint read: http://jshint.com/about/
And new to the concept of **code quality** then read this
*gentle introduction*: 
http://blog.teamtreehouse.com/improving-code-quality-jshint

If you have writen JavaScript code professionally you will have come accross 
[The Good Parts](http://javascript.crockford.com/) by **Douglas Crockford**.

To *encourage* people to *only* use the predictable & well behaved ("good")
parts of JS, [Crockford](https://github.com/douglascrockford) developed 
[JSLint](http://www.jslint.com/) 

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

Next you will need to install **SublimeLinter** 
https://github.com/SublimeLinter/SublimeLinter

#### Instructions

Inside SublimeText click: Tools > Command Pallete

Package Control: Install Package

> *Most* Other Editors/IDEs have a similar plugin: 
> http://www.jshint.com/docs/options/



### Command Line

If you just want to use JSHint on the command line,
or want to add it to your exisiting build system:

```
sudo npm install jshint -g
```

### Add CodeClimate to your Project [![Code Climate](https://codeclimate.com/github/nelsonic/learn-jshint.png)](https://codeclimate.com/github/nelsonic/learn-jshint)

To confirm that your code quality is consistent, add CodeClimate to
your project: https://codeclimate.com/tour/trends
[free for Open Source GitHub projects](https://codeclimate.com/github/signup)



	

### [*Future*] Cloud9 IDE Instructions


## Further Reading

- **Full List** of JSHint Options: http://www.jshint.com/docs/options/
- JSHint Strict Edition: https://gist.github.com/haschek/2595796
- How to use jslint in node.js projects: https://coderwall.com/p/-h1h1w
