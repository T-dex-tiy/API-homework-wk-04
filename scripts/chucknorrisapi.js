window.onload = function gettingFunnyWithChuck() {

  function buwHaHaHa () {
  var value = [Math.floor(Math.random() * 100)];
  console.log(value);
   return value;
};

let jokeNum = buwHaHaHa();



  const randomJoke = 'id/'
  const url = 'http://api.icndb.com/jokes'+ randomJoke

  $.ajax({
    url: url
  }).done(function(data){
    console.log('the returned data is:', data)

    if ( randomJoke ==='id/'){

      const comedy = data.value;
      const idkLength = comedy.length;
      const jokes= [];


      for (let i = 0; i < idkLength; i++){
      jokes.push(comedy[i])
      }
    console.log(jokes[jokeNum]);
    }


 })
}
