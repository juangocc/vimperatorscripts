var carro="casa";
echo "casa";

function addCss(cssCode) {
var styleElement = content.document.createElement("style");
  styleElement.type = "text/css";
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = cssCode;
  } else {
    styleElement.appendChild(document.createTextNode(cssCode));
  }
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}

cssCodecustom = "

stream-item-header 
{
}
js-tweet-text-container
{
}
AdaptiveMediaOuterContainer
stream-item-footer





";

addCss(cssCodecustom);


// var c = content.document.getElementById("myDIV").childNodes;
// c[0].style.backgroundColor = "yellow"; 

function revisarPost(){
var streamitems = content.document.querySelectorAll("#stream-items-id:first-child>li"); 
var total = streamitems.length;
var i;
for (i=0; i<total; i++){
streamitems[i].remove();
}
content.console.log("Registrados : "+i);

}

var milliseconds = 15000;

function setDelay(j){
setTimeout(function(){
revisarPost();

if(j>1){
setDelay(j-1);
}
}, milliseconds);

content.console.log("Ciclo : "+j);
content.window.scrollTo(0,content.document.body.scrollHeight);
}

setDelay(3);

//setInterval(function, milliseconds);

