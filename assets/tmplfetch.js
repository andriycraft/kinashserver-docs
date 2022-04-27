console.log('tmpl loaded');

const xhr = new XMLHttpRequest();
xhr.open("POST", 'https://andriycraft.github.io/kinashserver-docs/assets/tmplfetch.js', true);

xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    }
}
xhr.send();