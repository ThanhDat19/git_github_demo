const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/Education');
        console.log('Connect Db Success')
    }
    catch(error){
        console.log('Connect Db Fail')
    }
}

module.exports = {connect}