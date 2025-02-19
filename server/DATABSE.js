const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@crowdcube.hrdvs.mongodb.net/?retryWrites=true&w=majority&appName=Crowdcube`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let dbConnection;

async function connectDB() {
  if (!dbConnection) {
    try {
      await client.connect();
      console.log("MongoDB Connected!");
      dbConnection = client.db("TAsk-Manager-Pro");
    } catch (error) {
      console.error("MongoDB Connection Error:", error);
      throw error;
    }
  }
  return dbConnection;
}

module.exports = { connectDB };
