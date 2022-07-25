
class Renderer {

      GetIpsum(data){
      const source = $("#displayTemplate").html()
      const temp = Handlebars.compile(source)
      let Ipsum = temp({Ipsum: data[0]})
      $("#setHandle").append(Ipsum)
    }

     GetQoute(data){
      const source = $("#displayTemplate").html()
      const temp = Handlebars.compile(source)
      let quto = temp({qoute: data.qoute})
      console.log(quto)
      $("#setHandle").append(quto)
    }

   GetPokemon(data){
      const source =$("#displayTemplate").html()
      const temp = Handlebars.compile(source)
      let poke = temp({name: data.name, image: data.sprites.front_default})
      $("#setHandle").append(poke)
    }

}