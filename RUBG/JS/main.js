// let obj={
//     firstName: data.results[0].name.first,
//     lastName: data.results[0].name.last
// }
// this.data.Frinds.push(obj)


// GetUserData = function(data){
//     let obj={
//         firstName: data.results[0].name.first,
//         lastName: data.results[0].name.last,
//         city: data.results[0].location.city,
//         state: data.results[0].location.state,
//         imgSRC: data.results[0].picture.large
//     };
//     this.data["MainPerson"]=obj
// }
const api=new APIManager()
const renderer=new Renderer()
const LS=new userInfoLocalStorage()

const loadUser=()=>{
  api.apiUaer()
  api.apiQutos()
  api.apiPokemon()
  api.apiText()
}

const displayUser=()=>{
  renderer.userRender(api.data.users)
  renderer.friendsRender(api.data.users)
  renderer.quoteRender(api.data.quote)
  renderer.pokemonImageRender(api.data.pokemon.img)
  renderer.properCasePokemonName(api.data.pokemon.name)
  renderer.textRender(api.data.text)
}

const saveUserToLocalStorage=()=>{
  LS.saveUser({...api.data})
  renderer.dropdownRender(api.data.users)
}

const loadUserFromLocalStorage=()=>{
  renderer.loadUser(LS.users)
}