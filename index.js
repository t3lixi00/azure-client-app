console.log("working!");




$(document).ready(function(){

    var token;
    var client_id = "938228a1-9ac9-4084-8ede-3c9088ba476a";
    var clientSecret = "06fR2q/onGGgW3pgLxGrlsTE+DnG+fRLpFCc9Dk/YRw=";
    var tenant_id = `ea14b53f-1ff1-4682-92a4-b59d20531b04`;
    var tokenurl = `https://login.microsoftonline.com/${tenant_id}/oauth2/token`;
    var scope= "https://outlook.office.com/mail.read"; 
    var request = new XMLHttpRequest();

 function getToken(tenant_id, tokenurl, client_id, clientSecret, scope){
     var key;
     request.open("POST", tokenurl, true );
     request.setRequestHeader("Content-type", "application/json");
     request.send("grant_type=client_credentials&client_id=" + client_id+"&"+"client_secret="+clientSecret+ "&"+"scope="+scope);
     request.onreadystatechange = function(){
         if(request.readyState == request.DONE){
             var response = request.responseText;
             var obj = JSON.parse(response);
             key = obj.access_token;
             token = key;
             console.log(request.responseText);
             alert("successful!");
             
         }else{
             console.log("Error", request.statusText);
         }
     }

 }

getToken(token, client_id, clientSecret);

    $(".button").click(function(){
       $.ajax({
    
           url:"https://todolist2.azurewebsites.net/tasks",
           headers:{
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'application/x-www-form-urlencoded'
           },
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
