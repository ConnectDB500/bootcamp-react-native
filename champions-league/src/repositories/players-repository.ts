import { PlayerModel } from "../contracts/player.model";
import { StatisticsModel } from "../contracts/statistics-model";

const database: PlayerModel[] = [
    { 
        id: 1, 
        name: "Neymar",
        club: "Santos FC",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 90,
            Passing: 89,
            Dribbling: 98,
            Defending: 46,
            Physical: 78,
        }
    },
    { 
        id: 2, 
        name: "Pedro",
        club: "Flamengo",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 84,
            Pace: 83,
            Shooting: 87,
            Passing: 81,
            Dribbling: 78,
            Defending: 53,
            Physical: 90,
        }
    },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined > => {
    return database.find( player => player.id === id );
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(p => p.id === id);

    if (index !== -1){
        database.splice(index, 1);
        return true;
    }

    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex( p => p.id === id);

    if (playerIndex == -1) {
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
}