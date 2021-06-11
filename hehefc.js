function setPreviewImage(tdContent){



console.log(tdContent);


imgSrc = tdContent.getElementsByTagName('img')[0].src;

console.log(imgSrc);

document.getElementById("playershow").innerHTML = '<img src=' + imgSrc +'>';


}


function removePreviewImage(){

document.getElementById("playershow").innerHTML = " Hover to a player's name to display image";

}