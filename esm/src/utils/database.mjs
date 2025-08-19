const databaseType = {
  userType: "admin",
  typeData: "dataLocal"
}

async function connectToDatabase(dataName){
  console.log(`connectado ao banco ${dataName}`);
}

async function disconnectDatabase(){
  console.log("desconectando banco de dados")
}

export {
  connectTodatabase,
  disconnectDatabase,
  databaseType
};