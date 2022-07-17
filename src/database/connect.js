const mongoose = require ('mongoose');

const connectToDatabase = async () =>{
    await mongoose.connect(`mongodb+srv://${process.env.NOME_USUARIO}:${process.env.SENHA_USUARIO}@atividadesnodejs.xhvrf.mongodb.net/database?retryWrites=true&w=majority`, (error)=> {
       
    if(error){
            return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error);
        }
        return console.log('Conexão ao banco de dados realizada com sucesso!');
    }
   );
};

module.exports = connectToDatabase;