
  const APIKey = 'AIzaSyCsE_cDRs1J5j-zx-DVJ0YFoLZ9XG0Pg5o';//API Key
  let getdata = ( userid,subscriber,view) => {
    const Userid = userid;//Channel Id
    const subscriberCount= document.getElementById(subscriber);
    const viewCount = document.getElementById(view);
    //const videoCount = document.getElementById(video);


    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        subscriberCount.innerHTML = data["items"][0].statistics.subscriberCount;
        viewCount.innerHTML = data["items"][0].statistics.viewCount;
      //  videoCount.innerHTML = data["items"][0].statistics.videoCount;
        
    })

}