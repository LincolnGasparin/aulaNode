// class Usuario  {
//     id = Date.now();
//     nome;
//     email;
//     senha;



//     constructor(nome,email,senha){
//         this.nome = nome;
//         this.email = email;
//         this.senha = senha;
//     }

//     login(email,senha){
//         if(this.email != email || this.senha != senha){
//             throw new Error("Credenciais Invalidas");
            
//         }
//         console.log(`${this.nome} Logado com Sucesso`)
//     }

  
// }

// const usuario = new Usuario("Lincoln","lincolngasparin@hotmail.com","123456");

// console.log(usuario);
// usuario.login("lincolngasparin@hotmail.com","123456");
// usuario.login("lincolngasparin@hotmail.com","123456789");



class Produto {
    id = Date.now();
    nome;
    valor;
    qtde;


    constructor(nome,valor,qtde){
        this.nome =  nome;
        this.valor = valor;
        this.qtde = qtde;
    }
}



const p1 = new Produto ("Agua Potavel","10","4");


console.log(p1)