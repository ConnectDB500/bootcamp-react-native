import connectTodatabase from "../database/data.js";
import "dotenv/config";

async function main(){
  await connectTodatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE);
}

main()