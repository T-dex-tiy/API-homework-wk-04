window.onload = function gettingFunnyWithChuck() {

  function buwHaHaHa () {
  var value = [Math.floor(Math.random() * 100)];
  console.log(value);
   return value;
};

let jokeNum =  buwHaHaHa();
let hardyHar=[];
var btn = document.querySelector("button");

  const randomJoke = 'id/'
  const url = 'http://api.icndb.com/jokes'+ randomJoke

  $.ajax({
    url: url
  }).done(function(data){
    console.log('the returned data is:', data)

    btn.addEventListener('click', function(){
      const comedy = data.value;
      hardyHar = comedy.filter(function(element, index){
        return element.joke})

      const idkLength = comedy.length;
      const jokes= [];


      for (let i = 0; i < idkLength; i++){
      jokes.push(comedy[i])

      }
      let humorless= jokes[jokeNum].joke;

      function moreHardyHar(humorless){
      document.getElementById('input').innerHTML= humorless;
      }


    console.log(jokes[jokeNum]);
    moreHardyHar(humorless);
    return jokes[jokeNum];




  })
  })

}
