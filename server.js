const dotenv = require("dotenv");
const app = require("./app.js");
dotenv.config();
let connectDatabase = require("./config/DBconfig.js");

const Port = process.env.PORT || 4000;

app.listen(Port, async () => {
    try {
        await connectDatabase();

        console.log(`listening on http://localhost:${Port}/`);
    } catch (error) {
        console.log("app.listen  error:", error);

        console.log(`error while listening on ${Port}`);
    }
});


process.on('uncaughtException', (err) => {
    console.log(`Error:${err.message}`);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.log(`Error:${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});