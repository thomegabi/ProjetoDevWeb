const  { createServer } = require('http');
const express = require ('express');

const dotenv = require('dotenv');

dotenv.config();  // procura o arquivo .env e le

let app = express();

const http = createServer(app);

process.on('SIGINT', () => http.close((error) => {
    if(error){
        console.log(`${error.name}: ${error.message}`);
    }

    process.exit(error ? 1 : 0);
}));

http.listen(8989, () => console.log('Listening to port 8989'));