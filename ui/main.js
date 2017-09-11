console.log('Loaded!');
var trigger = document.getElementById('si');
var counter=0;
trigger.onclick = trigg() {
  var counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};