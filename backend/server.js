const express = require("express"); // imports the Express framework (used to create your web server)
const cors = require("cors");   // imports CORS middleware so your frontend can talk to this backend from another domain
 


const app = express();              //creates an Express app instance (your web server)
app.use(express.json());             // allows Express to automatically parse incoming JSON request bodies
app.use(cors());                  //allows requests from your React frontend)

const PORT = 9000; //Port for http://localhost:9000)

app.get("/", (req, res) = {                         // defines a get route URL "/"
    res.send("WELCOME TO LIFT & DRIP API!");       // sends back a plain text response when someone visits that route

});


app.listen(PORT, () => {     // // starts the server and makes it listen for requests on port 9000
    console.log(`Server is running on http://localhost:${PORT}`)      // logs a confirmation message in the terminal
});