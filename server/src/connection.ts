var sqlite3 = require('sqlite3');
export let db= new sqlite3.Database('./mcu.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err:Error) => {
    if (err && err.message == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
           
    }
});

function createDatabase() {
    var newdb = new sqlite3.Database('mcu.db', (err:Error) => {
        if (err) {
            console.log("Getting error " + err);
        }

    });
}


