import React from "react";

import { CarModel } from "./props";
import { fetchGetCarData } from "../../api/getCars";

export const loadCarData = async (
    id: number, 
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    const response = await fetchGetCarData(id)

    try{
        if (response){
            setCarData(response);
        }
    } catch(error) {
        console.log("Erro ao buscar da API: ", error)
    }
};

export const handlePreviousItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response = null;

    try {
        if (carData && carData?.id > 1){
            const response = await fetchGetCarData(carData.id - 1);
            if (response) {
                setCarData(response);
        }
        }

    } catch (error) {
        console.log("Erro ao chamar a API: ", error);
        setCarData(null);
    }
};

export const handleNextItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response = null;

    try {
        if (carData && carData?.id < 10){
            const response = await fetchGetCarData(carData.id  + 1);
            if (response) {
                setCarData(response);
        }
        }

    } catch (error) {
        console.log("Erro ao chamar a API: ", error);
        setCarData(null);
    }
};