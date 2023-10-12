import express, { Express, Request, Response } from 'express';
import sqlite3 from 'sqlite3';
const app: Express = express();

let db = new sqlite3.Database(
      './mcu.db',
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      err => {
            function createDatabase() {
                  var newdb = new sqlite3.Database('mcu.db', err => {
                        if (err) {
                              console.log(
                                    'Error while creating Database - ' + err,
                              );
                        } else {
                              console.log('db created');
                        }
                  });
            }

            if (err) {
                  console.log('Error while opening db file' + err);
            } else {
                  createDatabase();
                  return;
            }
      },
);

function insert(id: number, name: string): string {
      const query: string = `INSERT INTO CA 
                            VALUES(${id}, "${name}")`;

      return query;
}

const createQuery: string = `CREATE TABLE IF NOT EXISTS CA (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
    )`;
db.run(createQuery, (err: Error) => {
      if (err) console.log(err.message);
});

// db.run(`INSERT INTO CA
//     VALUES(3, "sujal")`);

db.serialize(function () {
      db.all('select * from CA', function (err, tables) {
            console.log(tables);
      });
});

app.get('/', (req: Request, res: Response) => {
      res.json({
            message: 'Vivacity_2k24 server - init',
      });
});

app.listen(3000, () => {
      console.log('Server active on port|3000');
});
