import express from "express";

const app = express();


const categorias = [
    {
        id: 1,
        nome: "categoria 1",
    },
    {
        id: 2,
        nome: "categoria 2",
    },
    {
        id: 3,
        nome: "categoria 3",
    },
    {
        id: 4,
        nome: "categoria 4",
    },
];

const usuarios = [
{
    id: 1,
    nome: "Usuario",
    chaveAcesso: "chave-super-secreta",
},
]

const usuario_permissao = [
    {
        id: 1,
        id_usuario: 1,
        permissoes: ["/categorias/:id"],
    }
]

function validarPermissao(req, res, next){
    const chaveAcesso = req.headers['chave-acesso'];

    const usuario = usuarios.find((item) => item.chaveAcesso === chaveAcesso);
    const permissao = usuario_permissao.find((item) => item.id_usuario === usuario.id);

    const rota = req.route.path;

    const acesso_liberado = permissao.permissoes.some((item) => item === rota);

    if(acesso_liberado){
        next();
    } else {
        res.status(403).json({mensagem:"Voce nao tem permissao para acessar este conteudo"});
    }
   

}

function validarChaveAcesso(req, res, next){
    const chaveAcesso = req.headers['chave-acesso'];

    const usuario = usuarios.find((item) => item.chaveAcesso === chaveAcesso);

    if(usuario){
        next();
    } else {
        res.status(401).json ({mensagem: "Credenciais Invalidas"})
    }
}

app.get("/categorias", (requisicao,resposta) => {

    resposta.status(200).json(categorias) 
})

app.get("/categorias/:id", validarChaveAcesso, validarPermissao, (req , res) => {
    const id = req.params.id;
    const categoria = categorias.find((item)=> item.id == id)

    if (categoria){
        return res.json(categoria)
    }else{
        return res.status(404).json({mensagem: "categoria nao encontrada"})
    }

})
app.listen(3333,() => {
    console.log("servidor esta rodando em: http://localhost:3333")
})