// class hero {
//     constructor (classe, arma){
//         this.classe = classe
//         this.arma = arma
//     }

//     ataque(){
//         console.log(`O ${this.classe} atacou usando ${this.arma} `)
//     }

// }

// let guerreiro = new hero ("Guerreiro", "Espada")
// let mago = new hero ("Mago", "Magia")
// let monge = new hero ("Monge", "Artes Marciais")
// let ninja = new hero ("Ninja", "Shuriken")


// guerreiro.ataque()
// mago.ataque()
// monge.ataque()
// // ninja.ataque()

//----------------------------------------------------------------

class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "atacou";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const heroiGuerreiro = new heroi("Aragorn", 30, "guerreiro");
  const heroiMago = new heroi("Gandalf", 100, "mago");
  const heroiMonge = new heroi("Monk", 900, "monge");
  const heroiNinja = new heroi("Shinobi", 18, "ninja");

  heroiGuerreiro.atacar(); // Exibe "O guerreiro atacou usando usou espada"
  heroiMago.atacar(); // Exibe "O mago atacou usando usou magia"
  heroiMonge.atacar() // Exibe "O monge atacou usando usou Artes Marciais"
  heroiNinja.atacar() // Exibe "O ninja atacou usando usou Shuriken"

  console.log(heroiGuerreiro.nome, heroiGuerreiro.idade, heroiGuerreiro.tipo)
  console.log(heroiMago.nome, heroiMago.idade, heroiMago.tipo)
  console.log(heroiMonge.nome, heroiMonge.idade, heroiMonge.tipo)
  console.log(heroiNinja.nome, heroiNinja.idade, heroiNinja.tipo)