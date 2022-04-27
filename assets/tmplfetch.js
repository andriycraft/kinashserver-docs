console.log('tmpl loaded');

const xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    }
}
xhr.send("foo=bar&lorem=ipsum");