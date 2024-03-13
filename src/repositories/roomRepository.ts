import { AppDataSource } from "../db/data-source";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSource.getRepository(Room);