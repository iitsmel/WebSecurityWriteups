# Notes
## 4
### My Thoughts

First of all, what, where, how???

What is this?

Where is the vulnerbility?

How can I perform the attack?

<br>

### What
This is an filter using js method to wrap around user's input.

There is a ```decodeURIComponent(input)``` in it, so this is a url attack, and perhaps will require some js skills.

<br>

### Where
The vulnerbility is in url itself.

<br>

### How
There are typically 2 kinds of url attacks.

**name=?? , id=??, page=?? e.t.c.**

From context (sample script: http://prompt.ml/js/test.js), I can know that the first attack method might not work.

<br>

**symbols**
- /, ?, # e.t,c.
- !, ~, ' e.t.c.

```JavaScript
/^(?:https?:)?\/\/prompt\.ml\//i.test(decodeURIComponent(input))
```

/ : path

^ : TBA

( : TBA

? : Delimit the boundary between the URI of a queryable object, and a set of words used to express a query on that object.

https : https

? : Delimit the boundary between the URI of a queryable object, and a set of words used to express a query on that object.

: : TBA 

) : TBA

? : Delimit the boundary between the URI of a queryable object, and a set of words used to express a query on that object.

\ : seperate symbols

/ : path

\ : seperate symbols

/ : path

prompt : prompt

\ : seperate symbols

.ml : .ml

\ : seperate symbols

/ : path

/ : 

i.test : Executes a search for a match between a regular expression and a specified string. 

decodeURIComponent : Decode a URL component.


### Readings
- [URL Encoded Attacks](https://www.cgisecurity.com/lib/URLEmbeddedAttacks.html)
- [URL Encoding](https://developers.google.com/maps/url-encoding)
- [Trailing Slashes](https://en.ryte.com/wiki/Trailing_Slashes)
- [Can you pass user/pass for HTTP Basic Authentication in URL parameters?](https://serverfault.com/questions/371907/can-you-pass-user-pass-for-http-basic-authentication-in-url-parameters)
- [regex101](https://regex101.com)
- [B Regular Expressions](https://docs.oracle.com/cd/E20593_01/doc.560/e23601/app_regexp.htm)
- [URL Encoding of Special Characters](https://secure.n-able.com/webhelp/nc_9-1-0_so_en/content/sa_docs/api_level_integration/api_integration_urlencoding.html)
- [URI_Recommentations](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html)
- [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

<br>

<br>

## Regular Expressions ( Regex )
**JavaScript Regular Expressions**
-   let re = /ab+c/;
-   let re = new RegExp('ab+c');

**Escaping**

When using any of the special characters literally, it's necessary to escape the special characters by putting a **backslash (```\```)** in front of it.

e.g,
- ```/a\*b/```
    - "a" followed by "*" followed by "b".
    - The backslash "escapes" the "*", making it literal instead of special.


<br>

**Special characters in regular expressions.**

[Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
```
\, ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]	
```



[Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
```
^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B
```



[Groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
```
(x), (?:x), (?<Name>x), x|y, [xyz], [^xyz], \Number
```



[Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
```
*, +, ?, x{n}, x{n,}, x{n,m}
```


[Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
```
\p{UnicodeProperty}, \P{UnicodeProperty}
```



<br>

**Readings**
- [MDN Web Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


<br>

<br>

