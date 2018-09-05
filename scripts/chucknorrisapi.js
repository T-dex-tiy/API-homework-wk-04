window.onload = function gettingFunnyWithChuck(){

  function buwHaHaHa () {
  var value = [Math.floor(Math.random() * 100)];
   return value;
};

let jokeNum =  buwHaHaHa();
var btn = document.querySelector("button");
var radio=document.getElementById('SFW')
let jokes= [];
console.log();


  const randomJoke = 'id/'
  const url = 'https://api.icndb.com/jokes'

  $.ajax({
    url: url
  }).done(function(data){
    btn.addEventListener('click', function(){
      let comedy = data.value;
      let idkLength = comedy.length;



      for (let i = 0; i < idkLength; i++){
        console.log("run");
      jokes.push(comedy[i])    
      }
      console.log("jokes obj cat;", jokes[jokeNum].categories);


      let humorless = jokes[jokeNum].joke;
      let explict=jokes[jokeNum].categories

      function moreHardyHar(humorless){
        if(radio.checked==true&&explict=="explicit"){
          // document.getElementById('input').innerHTML= humorless
          console.log("not today", humorless);
          console.log(humorless);
          }else{
            console.log(humorless, "2");
            document.getElementById('input').innerHTML= humorless
          }
      }



    moreHardyHar(humorless);
    buwHaHaHa();
    gettingFunnyWithChuck();
    jokes=[]
    comedy=[]
    humorless=''
    explict=''
    console.log(jokes, comedy, humorless, explict, "end");
    
    // return jokes[jokeNum];




  })
  })

}
