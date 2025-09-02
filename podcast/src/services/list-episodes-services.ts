import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";


export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast();

    responseFormat = {
        statusCode: data.length !== 0 ? 200 : 204,
        body: data,
    };

    return responseFormat;
};