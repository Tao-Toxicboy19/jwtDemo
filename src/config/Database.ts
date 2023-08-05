//config.ts
import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-m5iasjm-shard-00-00.gnbfgkb.mongodb.net:27017,ac-m5iasjm-shard-00-01.gnbfgkb.mongodb.net:27017,ac-m5iasjm-shard-00-02.gnbfgkb.mongodb.net:27017/login?ssl=true&replicaSet=atlas-tu358i-shard-0&authSource=admin&retryWrites=true&w=majority`;

const SERVER_PORT = process.env.SERVER_POER
    ? Number(process.env.SERVER_POER)
    : 4444;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};