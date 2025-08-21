async function connectTodatabase(user, password){
  if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
    console.log("conexao com banco de dados realizada");
  } else {
    console.log("conexao nao estabelecida");
  }
}

export default connectTodatabase;