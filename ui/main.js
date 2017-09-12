var button = document.getElementById("si");
var counter=0,span;
button.onclick = function () {
    //First make a request
    var request=new XMLHttpRequest();
    
    //this is to capture and store a made request
    request.onreadystatechange() = function {
      if(request.readyState == XMLHttpRequest.DONE) {
          if (request.status == 200) {
              var counter=request.responseText;
              span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      }  
    };
  counter=counter+1;
  
}