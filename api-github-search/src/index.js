const conn = require('./config/mongoose'); // <-- mongoose.js
const app = require('./app'); // <-- app.js
const PORT = process.env.PORT || 3000;

conn.open().then(() => {
    app.listen(PORT, () => {
        console.log("listening on port " + PORT);
        // OK!
    });
});
