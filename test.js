const mysql = require("mysql2/promise");

async function test() {
    try {
        const conn = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123456",
            database: "newsdb"
        });

        console.log("CONNECTED");

        const [rows] = await conn.query("SELECT NOW()");
        console.log(rows);

        await conn.end();
    } catch (err) {
        console.error(err);
    }
}

test();