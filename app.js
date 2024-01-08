const express = require('express');
const cors = require('cors');
const redis = require('redis');

const app = express();
app.use(cors());

const db = redis.createClient({
    // Por algum motivo, o nome do host só é resolvido quando criado via docker-compose.
    // O container 'k8s-example-container-db-redis' criado manualmente não funciona.
    url: process.env.REDIS_URL // redis.createClient(port, host) não funcionou para mim.
});

db.on('connect', () => console.log('Conexão estabelecida com o servidor Redis'));
db.on('error', err => console.log('Redis Client Error', err));

(async function () {
    await db.connect();
    await db.set('visitas', 0);
})();

const PORT = process.env.PORT || 3000; // Define a porta do servidor, padrão é 3000

app.get('/api', (req, res) => {
    res.status(200).json({message: 'app published!'});
});

app.get('/api/visitas', async (req, res) => {
    await db.incr('visitas');
    const visitas = await db.get('visitas');
    res.status(200).json({visitas: visitas});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});