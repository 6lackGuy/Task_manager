//CRUD CREATE READ UPDATE DELETE

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

async function main() {
    const client = new MongoClient(connectionUrl);
    try {
        await client.connect();
        console.log("Connected correctly");

        const db = client.db(databaseName);
        let result; 
        // Regular find one returns the First one 
        try{
             result = await db.collection("users").findOne({
                name: "Tejiri",
                age: 25
            });
            // const result = await db.collection("users").insertMany([
            //     {
            //         description: "Clean the house",
            //         completed: true,
            //     },
            //     {
            //         description: "Renew Light and Data Bills",
            //         completed: false,
            //     },
            //     {
            //         description: "Walk the dog",
            //         completed: false,
            //     },
            // ]);
        } catch(err) {
            return console.log("Unable to Store Data" , err)
        }
       
      console.log("Data Stored correctly");
      // const db = client.db(databaseName);
  console.log(result);
//   console.log(result.insertedId);

    } catch (err) {
        console.log("Unable to connect to database", err);
    } finally {
        await client.close();
    }
}

main();

