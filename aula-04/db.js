import myqsl from 'mysql2/promise';

export async function conectar() {
    const conectar = await myqsl.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'aula04'
    })   
    return conectar
}

