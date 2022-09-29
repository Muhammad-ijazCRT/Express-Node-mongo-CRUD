var express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

// import schema
const student_schema = require('../models/student_schema')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse stringify (API) data
// app.use(express.json());

app.use(router)

router.get('/', async(req, res) => {
    const cursor = await student_schema.find();
    res.render('index', { 'data': cursor })

    // const data = new student_schema({
    //     name: req.body.name,
    //     email: req.body.email,
    //     phone: req.body.phone
    // })

    // data.save()
    //     .then(() => {
    //         res.send("insert successfully...");
    //     })
    //     .catch((err) => {
    //         res.send("error in insert...", err);
    //     });


    // res.send('Hello World...!')
})

router.post('/', (req, res) => {
    const data = new student_schema({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })

    data.save()
        .then(() => {
            res.redirect('/api');
        })
        .catch((err) => {
            res.send("error in insert...", err);
        });

})

router.get('/edit/:id', async(req, res) => {
    const _id = req.params.id
    const data = await student_schema.find({ _id });
    res.render('edit', { 'data': data })
})

router.post('/update', async(req, res) => {
    console.log('right router');
    const _id = req.body.id
    const updated_data = await student_schema.findByIdAndUpdate({ _id }, {
        $set: {
            "name": req.body.name,
            "email": req.body.email,
            "phone": req.body.phone
        }
    });

    res.redirect('/api');
})

router.get('/delete/:id', async(req, res) => {
    const _id = req.params.id
    const updated_data = await student_schema.findByIdAndDelete({ _id });

    res.redirect('/api');
})

router.get('/contact', (req, res) => {
    res.send('Hello World...!')
})


module.exports = router;