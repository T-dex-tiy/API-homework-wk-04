window.onload = function gettingFunnyWithChuck() {

  const randomJoke = 'random/'
  const url = 'http://api.icndb.com/jokes'+ randomJoke

  $.ajax({
    url: url
  }).done(function(data){
    console.log('the returned data is:', data)

    if ( randomJoke ==='random/'){
      const comedy = data.value;
      const idkLength = comedy.length;
      const jokes= [];


      for (let i = 0; i < idkLength; i++){
      jokes.push(comedy[i])
      }
    console.log(comedy);
    }


 })
}
