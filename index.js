
$(document).ready(function(){

    var token;
    var client_id = `00055cf7-0947-4c82-975b-fdfd5164d2dd`;
    var clientSecret = `sjiH+kHAulTDrwICCUW9zU9I9SZEAJNLUUfXWh5iM3Q=`;
    var tenant_id = `ea14b53f-1ff1-4682-92a4-b59d20531b04`;
    var tokenurl = `https://login.microsoftonline.com/${tenant_id}/oauth2/token/`;
    var resource = "https://todolist2.azurewebsites.net/";
    var request = new XMLHttpRequest();

 function getToken(){
    // var key;
     request.open("POST", tokenurl, true );
     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     request.send("grant_type=client_credentials&client_id=" + client_id+"&"+"client_secret="+clientSecret+ "&"+"resource="+resource);
     request.onreadystatechange = function(){
         if(request.readyState == request.DONE){
             var response = request.responseText;
             var obj = JSON.parse(response);
             token = obj.access_token; 
             console.log(request.responseText);
             alert("successful!");
             return token;
         }else{
             console.log("Error", request.statusText);
         }
     }

 }

getToken();


  $(".button").click(function(){
       $.ajax({
    
           url:"https://todolist2.azurewebsites.net/tasks",
           method:"GET",
           success:function(data){
               $.each(data, function(i,item){
               $("#content").append(item.name+"<br/>");
               
               });

           },

           error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
       })
    })

})
