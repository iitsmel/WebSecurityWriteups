const encoded = encodeURIComponent('window.alert(1)');
const decoded = decodeURIComponent(encoded);
console.log(encoded);
