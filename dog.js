var ajxr = new XMLHttpRequest();
ajxr.onreadystatechange = function() {
    if (ajxr.readyState === 4) {
        var image = JSON.parse(ajxr.responseText);
        console.log(ajxr.responseText);
document.getElementById('image').src=image.message[0];
document.getElementById('image1').src=image.message[1];
document.getElementById('image2').src=image.message[2];
       
    }
};
ajxr.open('GET', 'https://dog.ceo/api/breeds/image/random/3');
function sendAJAX(){
    ajxr.send();
}