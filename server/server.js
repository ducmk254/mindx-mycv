const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3002,
  mongoose = require('mongoose'),
  morgan = require('morgan');

//connect to DB :
mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb://${process.env.HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => {
    console.log('+++++ connected to DB: ' + process.env.DB_NAME);
  })
  .catch((err) => {
    console.log('!!!!!!!!!--Cannot connect to DB ' + err);
    process.exit();
  });
// khai bao router:
const route = require('./API/routes/index.routes');

// khai bao middleware:
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

route(app);

app.listen(PORT, () => console.log('Server is up on :' + PORT + ' port.'));
