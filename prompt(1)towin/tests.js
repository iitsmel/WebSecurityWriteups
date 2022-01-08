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


/*
// 7
// #;prompt(1)#
// /*#*///;prompt(1)/*#*/
// '#';prompt(1)
/*
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
*/

/*
// 8
function escape(input) {
    // prevent input from getting out of comment
    // strip off line-breaks and stuff
    input = input.replace(/[\r\n</"]/g, '');

    return '                                \n\
<script>                                    \n\
    // console.log("' + input + '");        \n\
</script> ';
}

console.log(escape("'\u2028prompt(1)\u2028-->'"))
*/

/*
// 9
function escape(input) {
    // prevent input from getting out of comment
    // strip off line-breaks and stuff
    input = input.replace(/[\r\n</"]/g, '');

    return '                                \n\
<script>                                    \n\
    // console.log("' + input + '");        \n\
</script> ';
}   

console.log(escape("<svg onload=&#112;&#114;&#111;&#109;&#112;&#116;&#40;&#49;&#41;>"))

const input = 's';

console.log(input.toLocaleLowerCase());
*/

// 12
console.log((parseInt("prompt", 32)));
