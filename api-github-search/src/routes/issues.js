const service = require('../services/issue')();
var constants = require('../config/constants');

module.exports = () => {
    const notifyError = (res, err, status) => {
        //TODO: add APM tools
        console.log(err);
        res.status(status || 400).send(err.message);
    }

    const validate = (req) => {
        //querystring search filter
        var searchText = req.query['search'];
        if (!searchText) { throw new Error(constants.FILTER_REQUIRED) };
        return searchText;
    };

    const getIssues = async (req, res) => {
        try {
            var searchText = validate(req);
            var result = await service.getIssues(searchText);
            res.json(result);
        } catch (err) {
            notifyError(res, err);
        }
    }

    return {
        getIssues
    }
}
