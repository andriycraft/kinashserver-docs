console.log('tmpl loaded');
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    }
}
xhr.send("foo=bar&lorem=ipsum");