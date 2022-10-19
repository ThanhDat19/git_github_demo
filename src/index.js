const express = require('express')
const methodOverride = require('method-override')
const path = require('path');
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const router = require('./routers')
const db = require('./config/db')
const app = express()
const port = 3000

//DB connect
db.connect()


//override
app.use(methodOverride('_method'))

//Morgan
app.use(morgan('combined'))

//Template Engine
app.engine(
  'hbs',
  exphbs({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource','views'));

app.use(express.json());
app.use(express.urlencoded());

//Router

router(app)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})