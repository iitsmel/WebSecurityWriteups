# Notes
## Sink and Source of DOM element
"Sink and Source of DOM element" is an important and basic technique. 

### Readings
Article:

[DOM under attack — I followed you from source to the sink!!!](https://medium.com/@shilpybanerjee/dom-under-attack-i-followed-you-from-source-to-the-sink-5427adc04785)

**sources**
- document.URL
- document.documentURI
- document.URLUnencoded
- document.baseURI
- location
- document.cookie
- document.referrer
- window.name
- history.pushState
- history.replaceState
- localStorage
- sessionStorage
- IndexedDB
- Database

**sinks**
- document.write()
- window.location
- document.cookie
- eval()
- document.domain
- WebSocket()
- someElement.src
- postMessage()
- setRequestHeader()
- FileReader.readAsText()
- ExecuteSql()
- sessionStorage.setItem()
- document.evaluate()
- JSON.parse()
- someElement.setAttribute()
- RegExp()

<br>

### Knowledge
**What is sink and source?**

sink: funciton, where the source value is passed

source: value, accepts data

e.g. 

Code below is from Web Security Academy, lab: "DOM XSS in document.write sink using source location.search".

sink: function trackSearch, is for searching texts in search box.

source: searchTerms, is for the text in search box.

```
<script>
    function trackSearch(query) {
        document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
    }
    var query = (new URLSearchParams(window.location.search)).get('search');
    if(query) {
        trackSearch(query);
    }
</script>

```

Possible attack process:

Typed in ```"><svg onload=alert(1)>``` in search box.

Which means it'll be like this:
```
document.write('<img src="/resources/images/tracker.gif?"><svg onload=alert(1)>='+query+'">');
```

It will caused alert pop up being generated.

<br>

## Pseudo Protocol JavaScript
### Readings
[When do I need to specify the JavaScript protocol?](https://stackoverflow.com/questions/2321469/when-do-i-need-to-specify-the-javascript-protocol)
- Article: [The useless javascript: pseudo-protocol](https://crisp.tweakblogs.net/blog/313/the-useless-javascript-pseudo-protocol.html)

<br>

### Knowledge
**What is Pseudo Protocol?**

Something that can be accessed in the manner of a protocol but is not in fact a protocol.

**What is Pseudo Protocol about?**

It's about Anchor element ```<a>```.

<br>

## Backlinks Alert
### Readings
[What is: Backlink](https://www.wpbeginner.com/glossary/backlinks/)

<br>

## print()
### Readings
[alert() is dead, long live print()](https://portswigger.net/research/alert-is-dead-long-live-print)

## decodeURIComponent
### Readings
[JavaScript decodeURIComponent()](https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp)

<br>

## Constructor
### Readings
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#constructor)





