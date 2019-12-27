function updateFeed(){
  jQuery.getFeed({
    url: 'https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/worldnews.rss',
    success: function(feed) {
      alert(feed.title);
      console.log(feed.title);
      console.log(feed.description); 
      console.log(feed);

      document.getElementById("rssDesc").innerHTML = feed.items[0].title;
    
      let i = 0;

     for (let i=0; i<feed.items.length; i++) {
      setTimeout( function timer(){
        document.getElementById("rssDesc").innerHTML = feed.items[i].title;
        console.log(i);
      }, i*7500 );

      setTimeout(function time(){
        i = 0;
      }, (7500 * feed.items.length) - 1)
      }
    }
  });
}

updateFeed();
var rss = setInterval(() => {
  updateFeed();
}, 600000);
