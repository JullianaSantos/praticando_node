const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta criada com sucesso");
});

// Criar Arquivos
fs.writeFile(
  path.join(__dirname, "/teste", "test.txt"),
  "hello, node!",(error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Arquivo criado com sucesso");
}
);

//Adicionar um arquivo
fs.appendFile(path.join(__dirname,'/teste', 'test.txt'), 'hello, world', (error) =>{
  if(error){
    return console.log('Error', error)
  }
  console.log('Arquivo modificado com sucesso')
})

//Ler arquivos 
fs.readFile(path.join(__dirname, '/teste','test.txt'),'utf-8', (error,data)=>{
  if(error){
    return console.log('Erro', error);
  }
  console.log(data);
}
)
