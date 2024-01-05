const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000; // Define a porta do servidor, padrão é 3000

app.get('/api', (req, res) => {
    res.status(200).json({message: 'app published!'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});