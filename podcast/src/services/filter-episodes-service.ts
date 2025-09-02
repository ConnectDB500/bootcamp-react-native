import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 204,
        body: [],
    };

    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode =data.length !== 0 ? 200 : 204;

    responseFormat.body = data;

    return responseFormat;
}