window.onload = function gettingFunnyWithChuck() {

  const randomJoke = 'count/'
  const url = 'http://api.icndb.com/jokes/'+ randomJoke

  $.ajax({
    url: url
  }).done(function(data){
    console.log('the returned data is:', data)

    if ( randomJoke ==='count/'){
      const results = data.results;
      const resultsLength = results.length;
      const joke= [];

      for (let i = 0; i <resultsLength; i++){
      joke.push(result[i].name)
      }
    console.log(joke);
    }
 })
}
