//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    
    apiUaer(){
      $.ajax({
        url:'https://randomuser.me/api/?format=csv',
        dataType:'json',
        success:(user)=>(this.data.user=user.results),
        error:'Uh oh, something has gone wrong.',
      })
    }
  
    apiText(){
      $.ajax({
      url: 'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1',
      dataType:'json',
      success:(data)=>(this.data.text=data[0]),
      error:'Uh oh, something has gone wrong.',
      })
    }

    apiQutos(){
      $.ajax({
        url:"http://api.kanye.rest",
        dataType:json,
        success:(data)=>(this.data.quote=data.quote),
        error:'Uh oh, something has gone wrong.',
      })
    }

  apiPokemon=function(){
    let randomPokiId=math.floor((math.random()+1)*20)
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${randomPokiId}`,
      dataType:json,
      success:(data)=>(this.data.addPokemon={name:data.name,img:data.sprites.front_default}),
      error:'Uh oh, something has gone wrong.',
      })
    }

    // GetUserData = function(data){
    // let obj={
    //     firstName: data.results[0].name.first,
    //     lastName: data.results[0].name.last,
    //     city: data.results[0].location.city,
    //     state: data.results[0].location.state,
    //     imgSRC: data.results[0].picture.large
    // };
    // this.data["MainPerson"]=obj
    // }
}