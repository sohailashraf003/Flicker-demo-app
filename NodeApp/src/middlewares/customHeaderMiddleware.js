
const customHeader = (req, res, next) => {
    res.header("Content-Type", 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-user_id");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET");
    next();
}

module.exports = customHeader;