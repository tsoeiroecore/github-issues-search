var handleE11000 = function(error, res, next){
    if(error.name === "MongoError" && error.code === 11000 ){
        next(new Error("Duplicate Key"));
    }else{
        next(error);
    }
};

module.exports = {
    handleE11000,
};