
$(document).ready(function(){

    var token;
    var client_id = `938228a1-9ac9-4084-8ede-3c9088ba476a`;
    var clientSecret = `TEw7L0hNEstLv8srUHtPOo0JUDh2AuRM0VhJmjseDM4=`;
    var tenant_id = `ea14b53f-1ff1-4682-92a4-b59d20531b04`;
    var tokenurl = `https://login.microsoftonline.com/${tenant_id}/oauth2/token/`;
    var resource = "938228a1-9ac9-4084-8ede-3c9088ba476a";
    var request = new XMLHttpRequest();

 function getToken(){
    // var key;
     request.open("POST", tokenurl, true );
     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     request.send("grant_type=client_credentials&client_id=" + client_id+"&"+"client_secret="+clientSecret+ "&"+"resource="+resource);
     request.onreadystatechange = function(){
         if(request.readyState == request.DONE){
           var obj = JSON.parse(this.responseText);
             token = obj.access_token; 
             console.log(token);
           //  console.log(request.responseText);
             console.log(token);
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
           headers:{"Authorization": token},
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
