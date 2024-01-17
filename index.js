const express = require("express");
const app = express();
const cors = require("cors");

// middle ware
app.use(cors({ origin: ["http://localhost:5173"], }));
app.use(express.json());

// courseDashBoard
// WqM_6.Th6Tkpycs

const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://courseDashBoard:WqM_6.Th6Tkpycs@cluster0.hmijryu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    // await client.connect();
    const courseCollection = client.db("alemeno-course-dashboard").collection("courses");
    
    app.get('/courses', async(req, res)=> {
        const result = await courseCollection.find().toArray();
        res.send(result);
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send(`Course Dash-board server is running`);
  });
  app.listen(port, () => {
    console.log(`Course Dash-board server is  running on Port${port}`);
  });