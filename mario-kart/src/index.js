const player1 = {
  Nome: "Mario",
  Velocidade: 4,
  Manobrabilidade: 3,
  Poder: 3,
  Pontos: 0
};

const player2 = {
  Nome: "Luigi",
  Velocidade: 3,
  Manobrabilidade: 4,
  Poder: 4,
  Pontos: 0
};

async function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
  let random = Math.random();
  let result;

  switch (true){
    case random < 0.33:
      result = "RETA";
      break
    case random < 0.66:
      result = "CURVA";
      break
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute){
  console.log(`${characterName} ( ﾟｰﾟ)ﾉ■ rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2){
  for(let round = 1; round <= 5; round++){
    console.log(`▶ Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);
  
    // rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let TotalTestSkill1 = 0;
    let TotalTestSkill2 = 0;

    if(block === "RETA"){
      TotalTestSkill1 = diceResult1 + character1.Velocidade;
      TotalTestSkill2 = diceResult2 + character2.Velocidade;

      await logRollResult(
        character1.Nome, 
        "velocidade", 
        diceResult1,
        character1.Velocidade
        );

      await logRollResult(
        character2.Nome, 
        "velocidade", 
        diceResult2, 
        character2.Velocidade
      );
    }

    if(block === "CURVA"){
      TotalTestSkill1 = diceResult1 + character1.Manobrabilidade;
      TotalTestSkill2 = diceResult2 + character2.Manobrabilidade;

      await logRollResult(
        character1.Nome, 
        "manobrabilidade", 
        diceResult1, 
        character1.Manobrabilidade
      );

      await logRollResult(
        character2.Nome, 
        "manobrabilidade", 
        diceResult2, 
        character2.Manobrabilidade
      );
    }

    if(block === "CONFRONTO"){
      let powerResult1 = diceResult1 + character1.Poder;
      let powerResult2 = diceResult2 + character2.Poder;

      console.log(`${character1.Nome} confrontou com ${character2.Nome}! 1x1`);

      await logRollResult(
        character1.Nome, 
        "poder", 
        diceResult1, 
        character1.Poder
      );

      await logRollResult(
        character2.Nome, 
        "poder", 
        diceResult2, 
        character2.Poder
      );

      if(powerResult1 > powerResult2 && character2.Pontos > 0){
        console.log(`${character1.Nome} venceu o confronto! ${character2.Nome} perdeu 1 ponto!`)
        character2.Pontos--;
      }

      if(powerResult1 < powerResult2 && character1.Pontos > 0){
        console.log(`${character2.Nome} venceu o confronto! ${character1.Nome} perdeu 1 ponto!`)
        character1.Pontos--;
      }

      console.log(powerResult2 === powerResult1 ? "Empate tecnico" : "");

    }

    // verificando o vencedor
    if(TotalTestSkill1 > TotalTestSkill2){
      console.log(`${character1.Nome} marcou 1 ponto!`)
      character1.Pontos++;
    }
    else if(TotalTestSkill1 < TotalTestSkill2){
      console.log(`${character2.Nome} marcou 1 ponto!`);
      character2.Pontos++;
    }

    console.log("================================");
  }
}

async function declareWinner(character1, character2){
  console.log("Resultado final: \n");
  console.log(`${character1.Nome}: ${character1.Pontos} ponto(s)!`);
  console.log(`${character2.Nome}: ${character2.Pontos} ponto(s)!`);

  if(character1.Pontos > character2.Pontos)
    console.log(`\n${character1.Nome} venceu a corrida, parabens!`);
  else if(character1.Pontos < character2.Pontos)
    console.log(`\n${character2.Nome} venceu a corrida, parabens!`);
  else 
    console.log("Empate tecnico");
}

(async function main(){
  console.log(`(⌐■_■)  Corrida entre ${player1.Nome} e ${player2.Nome} a comecar... \n`);

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})()