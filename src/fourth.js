function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }



  function loadClient() {
    gapi.client.setApiKey("AIzaSyCsE_cDRs1J5j-zx-DVJ0YFoLZ9XG0Pg5o");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }


  
  
  function execute(s) {
    myobj={  "part": [
      "snippet"
    ],
   
    "playlistId": "PLueqWd9Qy25grcSgQR0IJUiR4qIEoSWZL"
  }
  myobj.playlistId=s;
    return gapi.client.youtube.playlistItems.list(
      myobj
    /*  {
      "part": [
        "snippet"
      ],
     
      "playlistId": "PLueqWd9Qy25grcSgQR0IJUiR4qIEoSWZL"
    }*/
    )
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
               // console.log("Response", response);
               var ul=document.getElementById("first-ul");
               console.log(response["result"]["items"].type);
               response["result"]["items"].forEach(element => {
                   console.log(element["snippet"]["resourceId"].videoId);
                   ir=element["snippet"]["resourceId"].videoId+'';
                   console.log(typeof ir);
                   var li=document.createElement('iframe');
                   li.allow="fullscreen";
                   li.src="https://www.youtube.com/embed/"+ir;
                   console.log(li);
                   ul.append(li);
                   
               });
              /* for(var i=0;i<response["result"]["items"].size();i++)
               {
                    console.log(response["result"]["items"][i]["snippet"]["resourceId"].videoId+'');
                ir=response["result"]["items"][i]["snippet"]["resourceId"].videoId+'';
                console.log(typeof ir);
                var li=document.createElement('iframe');
                li.src="https://www.youtube.com/embed/"+ir;
                console.log(li);
                ul.append(li);
        }*/

              //  document.getElementById("video1").src="https://www.youtube.com/embed/"+ir;  //Getting id from iframe and changing iits src
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });