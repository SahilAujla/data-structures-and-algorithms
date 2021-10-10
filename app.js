// Stacks using arrays

let stack = [];
stack.push("google");
stack.push("instagram");
stack.push("twitter");
stack.pop();

function peek(stack) {
  return stack[stack.length - 1];
}

function isEmptyStack(stack) {
  return !stack.length;
  // converting length to boolean true or false --> if length > 0 then flase else true
}
