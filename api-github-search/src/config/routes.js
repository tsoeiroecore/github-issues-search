var { cacheMiddleware } = require('../config/cache');

module.exports = (app) => {
    app.get("/issues", cacheMiddleware(10), app.routes.issues.getIssues);
}