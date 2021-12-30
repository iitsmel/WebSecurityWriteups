// 4 

function escape(input) {
    if (/^(?:https?:)?\/\/prompt\.ml\//i.test(decodeURIComponent(input))) {
        console.log("yes");        
    } else {
        return 'Invalid resource.';
    }
}

console.log(escape("http://prompt.ml%2f@000/test.js"));
console.log(escape("http://prompt.ml@000/test.js"));
console.log(escape("http://prompt.ml/@000/test.js"));
// The third one will pass if condition, but will make domain into path, which is not correct.
