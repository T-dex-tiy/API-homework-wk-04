window.onload = function gettingFunnyWithChuck(){

  function buwHaHaHa () {
  var value = [Math.floor(Math.random() * 600)];
   return value;
};
let screen;
let jokeNum =  buwHaHaHa();
var btn = document.querySelector("button");
var radio=document.getElementById('SFW')
let jokes= [];
let testJokes=[];
let newHumor;
let humorless=[];



  const randomJoke = 'id/'
  const url = 'https://api.icndb.com/jokes'

  $.ajax({
    url: url
  }).done(function(data){
    btn.addEventListener('click', function(){
      
      let comedy = data.value;
      testJokes={...comedy}
      newHumor= Object.keys(testJokes).filter(key=>{  
        if(testJokes[key].id==jokeNum){ 
          return jokes.push(testJokes[key])
        }
      })
    moreHardyHar(humorless);
    buwHaHaHa();
    gettingFunnyWithChuck();
    jokes=[]
    comedy=[]
    humorless=''
    explict=''   
    return
  })
  })

  function moreHardyHar(humorless){
    humorless = testJokes[newHumor].joke
    let explict=testJokes[newHumor].categories
    if(radio.checked==true&&explict=="explicit"){
      alert("This joke is too much for work, Cindy in HR would not be happy. We are going to send you another one that Cindy will be okay with")
      }else{
        screen=document.getElementById('input').innerHTML= humorless
      }
  
  }
}



