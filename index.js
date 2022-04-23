const { connect } = require('mongoose');
const loadDrinks = require('./src/loadDrinks');
const saveDrinks = require('./src/saveToDB');

const connectToDB = () => {
    connect('YOUR URL DB', (e) => {
        if(e) console.log(e);
        console.log('Successfully connected to MongoDB!');
    });
};

connectToDB();
loadDrinks();
saveDrinks();