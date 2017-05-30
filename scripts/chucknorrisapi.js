window.onload = function gettingFunnyWithChuck(){

  function buwHaHaHa () {
  var value = [Math.floor(Math.random() * 100)];
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
    // console.log('the returned data is:', data)
    btn.addEventListener('click', function(){
      const comedy = data.value;
      console.log("comedy data:", comedy);
      hardyHar = comedy.filter(function(element, index){
        return element.joke})
      const idkLength = comedy.length;
      const jokes= [];



      for (let i = 0; i < idkLength; i++){
      jokes.push(comedy[i])
      }
      console.log("jokes obj cat;", jokes[jokeNum].categories.length);
      console.log("jokes obj;", jokes[jokeNum]);

      let humorless = jokes[jokeNum].joke;
      console.log("humorless;", humorless);

      function moreHardyHar(humorless){
      document.getElementById('input').innerHTML= humorless;
      }



    moreHardyHar(humorless);
    buwHaHaHa();
    gettingFunnyWithChuck();
    return jokes[jokeNum];




  })
  })

}
