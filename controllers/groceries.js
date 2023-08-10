const Grocery = require('../models/grocery')

module.exports = {
    new: loadPage,
    create,
    show,
    index,
}

async function loadPage(req, res) {
    try {
        res.render('groceries/new', { title: "Add Groceries", errorMsg: "", })
    } catch (err) { }
}

async function index(req, res) {
    try {
        const results = await Grocery.find({});
        res.render('groceries', {
            title: 'All groceries',
            groceries: results,
        })
        console.log(results)
    } catch (err) { console.log(err.message)
        res.redirect('/groceries/index')
    }
}
async function create(req, res){
    const pageData = {...req.body}
  try {
    const createdGrocery = await Grocery.create(pageData)
    res.redirect('/groceries');
  }catch(err){console.log(err.message)}  
}

async function show(req, res, next) {
    try {
        const grocery = await Grocery.findById(req.params.id)

        res.render("groceries/show", {
            title: "Grocery Details",
            groceries: grocery
        })
    } catch (err) {
        console.log(err);
        next(Error(err));
      }
}