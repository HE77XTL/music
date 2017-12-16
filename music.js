var xhr = new XMLHttpRequest();
xhr.open('GET','https://easy-mock.com/mock/5a34f6d8b3739f4feec6f314/music/he-music',true);
xhr.send();
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText));
}
