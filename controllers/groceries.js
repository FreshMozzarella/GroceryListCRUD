const Grocery = require('../models/grocery')

module.exports = {
    new: loadPage
    //create
    //show
}

function loadPage(req, res) {
    res.render('groceries/new', { title: "Add Groceries", errorMsg: ""})
}