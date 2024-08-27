const  { createServer } = require('http');
const dotenv = require('dotenv');

const PORT = 8080


dotenv.config();  // procura o arquivo .env e le

const app = require('./config/router-factory');

const http = createServer(app);

process.on('SIGINT', () => http.close((error) => {
    if(error){
        console.log(`${error.name}: ${error.message}`)
    }

    process.exit(error ? 1:0);
}))


http.listen(PORT, () => console.log(`Listening to port ${PORT}`));