import { Request, Response } from "express"
import * as service from "../services/clubs-services"

export const getClubs = async (request: Request, response: Response) => {
    const resp = await service.getClubService();
    resp.status(resp.statusCode).json(resp.body);
}