const express = require('express');
const cors = require('cors'); /* This is new */
const app = express();
app.use(cors()),  /* This is new */
require('./routes/person.routes')(app); // We're importing the routes export. 

// These two lines are the long-hand notation of the code above. They better show what's going on.
    // #1 const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
    // #2 personRoutes(app);  <-- invoke the function and pass in the express "app" server
app.listen(8000, () => console.log('Listening at Port 8000')); 