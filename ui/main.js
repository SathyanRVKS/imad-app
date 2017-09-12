var button = document.getElementById("si");
var counter=0,span;
button.onclick = trigg ();
function trigg() {
  counter=counter+1;
  span=document.getElementById("count");
  span.innerHTML=counter.toString();
}