# XSS
## [reflected XSS vulnerabilities](https://portswigger.net/web-security/cross-site-scripting/reflected)
- Test every entry point.
    - Test separately every entry point for data within the application's HTTP requests.

- Submit random alphanumeric values. 
    - For each entry point, submit a unique random value and determine whether the value is reflected in the response.
- Determine the reflection context. 
    - For each location within the response where the random value is reflected, determine its context.
- Test a candidate payload. 
    - Based on the context of the reflection, test an initial candidate XSS payload that will trigger JavaScript execution if it is reflected unmodified within the response.
        - Send the request to Burp Repeater
        - Modify the request to insert the candidate payload
        - Issue the request
    
        And then review the response to see if the payload worked.
- Test alternative payloads. 
    - If the candidate XSS payload was modified by the application, or blocked altogether, then you will need to test alternative payloads and techniques that might deliver a working XSS attack based on the context of the reflection and the type of input validation that is being performed.
- Test the attack in a browser. 
    - Finally, if you succeed in finding a payload that appears to work within Burp Repeater, transfer the attack to a real browser (by pasting the URL into the address bar, or by modifying the request in Burp Proxy's intercept view, and see if the injected JavaScript is indeed executed.

**Difference between reflected XSS and stored XSS, self-XSS.**

reflected XSS: Embeds input from an HTTP request into immediate response.
stored XSS: Embeds input from an HTTP request into later response. 
self-XSS: Only triggers when user send out XSS payloads.

## [Stored XSS](https://portswigger.net/web-security/cross-site-scripting/stored)
- Parameters or other data within the URL query string and message body.
- The URL file path.
- HTTP request headers that might not be exploitable in relation to reflected XSS.
- Any out-of-band routes via which an attacker can deliver data into the application. 
