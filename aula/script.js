function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`;
    }

    this.salvar = () => {
        localStorage.setItem("nome", this.nome);
        localStorage.setItem("sobrenome", this.sobrenome);
        localStorage.setItem("idade", this.idade);
    }

    this.recuperar = () => {
        console.log(localStorage.getItem("nome"));
    }
}

const pessoa = new Pessoa("Djeferson", "Preis", 20);

let container = document.getElementById("container");

container.innerHTML = pessoa.nomeCompleto();