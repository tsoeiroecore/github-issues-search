const { Search } = require('../model/search');
var mongoose = require('mongoose');

module.exports = () => {

    const validate = (obj) => {
        //add any other validation conditions here
    };

    const insertSearch = async (obj) => {
        validate(obj);
        let search = new Search(obj);
        return await search.save();
    };

    return {
        insertSearch
    }
}