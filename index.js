class hero {
    constructor (classe, arma){
        this.classe = classe
        this.arma = arma
    }

    ataque(){
        console.log(`O ${this.classe} atacou usando ${this.arma} `)
    }

}

let guerreiro = new hero ("Guerreiro", "Espada")
let mago = new hero ("Mago", "Magia")
let monge = new hero ("Monge", "Artes Marciais")
let ninja = new hero ("Ninja", "Shuriken")


guerreiro.ataque()
mago.ataque()
monge.ataque()
ninja.ataque()
