import * as database from "./utils/database.mjs";
import { getDataFromApi} from "./utils/api.js";


database.connectToDatabase("my-database");

getDataFromApi();