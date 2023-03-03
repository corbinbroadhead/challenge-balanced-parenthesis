const has_balanced_parens = (str) => {
    let stack = [];
    let stackTwo = [];
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (currentChar === '(') {
            stack.push(1);
            continue;
        }
        if (currentChar === ')') {
            stackTwo.push(1);
            continue;
        }
    }
    if (stack.length === stackTwo.length) {
        return true;
    } else {
        return false;
    }
}

console.log(has_balanced_parens('()'));
console.log(has_balanced_parens('(Oh Noes!)('));
console.log(has_balanced_parens("((There's a bonus open paren here.)"));
console.log(has_balanced_parens(')'));
console.log(has_balanced_parens('('));
console.log(has_balanced_parens('(This has (too many closes.) ) )'));
console.log(has_balanced_parens('Hey...there are no parens here!'));