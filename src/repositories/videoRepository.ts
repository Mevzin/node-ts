import { AppDataSource } from "../db/data-source";
import { Video } from "../entities/video";

export const videoRepository = AppDataSource.getRepository(Video);