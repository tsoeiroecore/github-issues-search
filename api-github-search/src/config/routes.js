module.exports = (app) => {
    app.route("/issues")
        .get(app.routes.issues.getIssues);
        ;
}