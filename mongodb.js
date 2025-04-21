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
        // let result; 
        // Regular find one returns the First one 
        try{

            await db.collection("tasks").updateMany({
                completed: false,
            }, {
                $set: {
                    completed: "true"
                }
            }).then((result) => {
                return console.log(result);
            }).catch((err) => {
                return console.log("Unable to Update Data" , err)
            });
           

            // await db.collection("users").updateOne({
            //     _id: new mongodb.ObjectId("68055a3a45779ec336d9dea6")
            // }, {
            //     $set: {
            //         name: "Charles"
            //     }
            // }).then((result) => {
            //     return console.log(result);
            // }).catch((err) => {
            //     return console.log("Unable to Update Data" , err)
            // });
           

             //Api for adding one item
             // const result = await db.collection("users").insertOne({
            //     name: "Tejiri",
            //     age: 25
            // });

            //Api for adding multiple items 

            // const result = await db.collection("tasks").insertMany([
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

            //Api for finding one items
            //  result = await db.collection("users").findOne({
            //     name: "Tejiri",
            //     age: 25
            // });

            //Api for finding all items
            // const result = await db.collection("users").find({age: 25}).toArray();

        } catch(err) {
            return console.log("Unable to Update Data" , err)
        }
       
      console.log("Data Updated correctly");
      // const db = client.db(databaseName);
  
//   console.log(result.insertedId);

    } catch (err) {
        console.log("Unable to connect to database", err);
    } finally {
        await client.close();
    }
}

main();

