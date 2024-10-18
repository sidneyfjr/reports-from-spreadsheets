require('dotenv').config()

const apiKeyMiddleware  = (req, res, next) => {

    const providedKey = req.headers['api-key'];

    if (providedKey && providedKey === process.env.API_KEY) {
        // Chave de API válida
        next();
    } else {
        // Chave de API inválida
        res.status(401).json({ error: 'Chave de API inválida' });
    }

}

module.exports = apiKeyMiddleware