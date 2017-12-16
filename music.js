var xhr = new XMLHttpRequest();
xhr.open('GEt','/music.json',true);
xhr.send();
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText));
}
