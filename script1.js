var imagecount=1;
var allcount=0;
function changeImage(){
  var image = document.getElementById('myImage');
  allcount++;
  if(allcount==imagecount){
    allcount=0;
    imagecount++;
    if (image.src.match("on")){
      image.src = "off.png";
    } else{
      image.src = "on.png";
    }
  }
}