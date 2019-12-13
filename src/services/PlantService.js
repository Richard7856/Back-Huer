const { Plants } = require('../models');

const createPlant = (data) => Plants.create(data);

const getOnePlant = (id) => Plants.findById({_id:id, is_active:true});

const getAllPlants = () => Plants.find({is_active:true});

const deletePlant = (id) => Plants.findByIdAndUpdate({
    _id:id,
    is_active:true
}, {
    is_active:false
});

const updatePlant = (id, data) => Plants.findByIdAndUpdate({
    _id:id,
    is_active:true
}, {
    ...data
}, {
    new: true
});

module.exports = {
    createPlant,
    getOnePlant,
    getAllPlants,
    deletePlant,
    updatePlant,
};

