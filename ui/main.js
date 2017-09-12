var button = document.getElementById("si");
button.onclick = function () {
    //First make a request
    var request=new XMLHttpRequest();
    
    //this is to capture and store a made request
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
              var counter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
          else {
          span.innerHTML= "inner Error";
      }
      }
      else {
          span.innerHTML= "outer Error";
      }
    };
    request.open('GET','http://sathyanrvks.imad.hasura-app.io',true);
    request.send(null);
 };