var test = true;
if(test === true) {
  console.log("JSHint Should Flag this double equals...");
}

if(test === false) {
  console.log('and it should spot the lack of curly braces here...');
}
