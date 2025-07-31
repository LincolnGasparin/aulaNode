import express  from 'express';
import { conectar } from './db.js';

// const result = connection.query()
// async function iniciar() {
//     const db = await conectar();
//     const insertQuery = "INSERT INTO usuarios (nome , email , senha) values (?, ?, ?)";
//     const valores = ["Lincoln","lincolngasparin@hotmail.com","123456"];

//     // const resultadoInsert = await db.query(insertQuery, valores);
//     // console.log(resultadoInsert)  
//     const selectQuery = "SELECT * from usuarios";
//     const [resultadoSelect] = await db.query(selectQuery);
//     let nome = resultadoSelect[0];
//     console.log(resultadoSelect);
//     console.log(nome)
// }
// iniciar();
// try {
//     const [results] = await conectar().connection.query(sql);
  
//     console.log(results);
//   } catch (err) {
//     console.log(err);
  
const app = express();
app.use(express.json());

app.post('/login', async (req, res) =>{
    const body = req.body;

    const db = await conectar();

    const sqlEmail = "SELECT * FROM usuarios where email = ? LIMIT 1";
    const [usuario] = await db.query(sqlEmail, [body.email])
    await db.end();


    if(usuario.length === 0 || usuario[0].senha !== body.senha) {
        
        return res.status(401).json({mensagem: "Credenciais inválidas"})
    }
    res.json({usuario})
})

app.get("/usuarios", async (req , res) => {
    const db = await conectar();
    const selecaoQuery = "SELECT * from usuarios";
        const [lista_usuario] = await db.query(selecaoQuery)
        console.log(lista_usuario);
})

app.listen(3333, () => console.log('Servidor iniciando em http://localhost:3333'));



// conectar().connection.query(sql);