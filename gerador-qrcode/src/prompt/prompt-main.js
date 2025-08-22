import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    "description": chalk.yellow("Escolha a ferramenta \n/1 - QRcode \n/2 - Password"),
    pattern: /^[1-2]+$/,
    message: chalk.yellow("Escolha 1 ou 2"),
    required: true,
  }
];

export default mainPrompt;