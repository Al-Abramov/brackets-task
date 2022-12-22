function checkBrackets(str) {
  const hash = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  let trueBrackets = 0;

  const stack = [];

  const strSplit = str.split('').sort();
  strSplit.forEach(el => {
    if(!stack.length) {
      stack.push(el)
      return
    }
    if(hash[el] === stack[stack.length - 1]) {
      stack.pop()
      trueBrackets += 2;
    } else {
      stack.push(el)
    }
  });

  return `correctly ${trueBrackets} brackets, uncorrectly ${stack.length} brackets`;
}
