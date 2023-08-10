const Grocery = require('../models/grocery')

module.exports = {
    new: loadPage,
    //create
    //show
    index
}

async function loadPage(req, res) {
    try {
        res.render('groceries/new', { title: "Add Groceries", errorMsg: "", })
    } catch (err) { }
}

async function index(req, res) {
    try {
        const results = await Grocery.find()
        res.render('groceries/index', {
            title: 'All groceries',
            groceries: results,
        })
        console.log(results)
    } catch (err) { console.log(err.message)
        res.redirect('/')
    }
}