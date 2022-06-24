import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

declare global {
  var signin: Promise<String[]>;
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "adsad";
  mongo = await MongoMemoryServer.create();
  await mongo.start();
  console.log(mongo);
  const mongoUri = mongo.getUri();
  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
