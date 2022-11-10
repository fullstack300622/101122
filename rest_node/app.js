const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const customerRouter = require('./router/customerRouter')
const {logger, auth} = require('./middlewares/middlewares')

app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.json())
app.use(logger);

app.get('/', auth, (req, res) => {
    res.render('welcome.ejs');
})
app.use('/customer', auth);

app.get('/login', (req, res) => {
    res.cookie('logged_in', 'true')
    res.redirect('/')
})

app.get('/notloggedin',(req,res)=>{
    res.send('Not logged in')
})

app.use('/customer', customerRouter)






//Customers controller
// app.delete('/customer/:id', deleteCustomer)
// app.post('/customer', postCustomer)
// app.patch('/customer/:id', patchCustomerController)
// app.get('/customer', getCustomer)
// app.get('/customer/:id', getCustomerByIdController)
// app.put('/customer/:id', putCustomerController)


//Tickets controller
// app.delete('/customer/:id', deleteCustomer)
// app.post('/customer', postCustomer)
// app.patch('/customer/:id', patchCustomerController)
// app.get('/customer', getCustomer)
// app.get('/customer/:id', getCustomerByIdController)
// app.put('/customer/:id',putCustomerController)


//Flight controller
// app.delete('/customer/:id', deleteCustomer)
// app.post('/customer', postCustomer)
// app.patch('/customer/:id', patchCustomerController)
// app.get('/customer', getCustomer)
// app.get('/customer/:id', getCustomerByIdController)
// app.put('/customer/:id',putCustomerController)


app.listen(3000, () => {
    console.log('app is listening on port 3000')
})