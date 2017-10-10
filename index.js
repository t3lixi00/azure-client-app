console.log("working!");


$(document).ready(function(){

    var token;
    var client_id = "938228a1-9ac9-4084-8ede-3c9088ba476a";
    var clientSecret = "06fR2q/onGGgW3pgLxGrlsTE+DnG+fRLpFCc9Dk/YRw=";
    var tokenurl = "https://login.microsoftonline.com/common/oauth2/v2.0/token"; 
    var request = new XMLHttpRequest();

 function getToken(tokenurl, client_id, clientSecret ){
     var key;
     request.open("POST", tokenurl, true );
     request.setRequestHeader("Content-type", "application/json");
     request.send("grant_type=client_credentials&client_id=" + client_id+"&"+"client_secret="+clientSecret);
     request.onreadystatechange = function(){
         if(request.readyState == request.DONE){
             var response = request.responseText;
             var obj = JSON.parse(response);
             key = obj.access_token;
             token = key;
             alert("successful!");
             
         }
     }
 }

getToken(token, client_id, clientSecret);

 /*   $(".button").click(function(){
       $.ajax({
           dataType:"json",
           url:"http://todolist2.azurewebsites.net/tasks",
           beforeSend: function(xhr){
               xhr.setRequestHeader("Authorization", "Bearer "+token)
           },
           success:function(data){
               $.each(data, function(i,item){
               $("#content").append(item.name+"<br/>");
               
               });

           },

           error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
       })
    })*/

})
