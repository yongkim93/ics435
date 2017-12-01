function onSave(){
  alert("rere");
  var stopwords = require('stopwords').english;

  var data = jQuery.get("/datasets/test.txt");
//var data = new File('C:/Users/Ashton Kim/Documents/GitHub/ics435/datasets/test.txt');

  var textWithoutStopwords =
      data.split(/\W+/)
          .filter((w)=> { return stopwords.indexOf(w.toLowerCase()) < 0 })
          .join(" ")
}

