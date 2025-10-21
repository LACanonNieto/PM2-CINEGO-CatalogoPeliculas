const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

if (!title) {
        return res.status(400).json({ error: "El campo 'title' es obligatorio" });
    }
    if (!director) {
        return res.status(400).json({ error: "El campo 'director' es obligatorio" });
    }
    if (!poster) {
        return res.status(400).json({ error: "El campo 'poster' es obligatorio" });
    }

    if (!year || !duration || !genre || !rate) {
        return res.status(400).json({ error: "Faltan datos: year, duration, genre o rate" });
    }

    if (typeof year !== 'number' || year < 1000 || year > 9999) {
        return res.status(400).json({ error: "El campo 'year' debe ser un número de 4 dígitos" });
    }

    if (typeof rate !== 'number' || isNaN(rate) || rate < 0 || rate > 10) {
        return res.status(400).json({ 
        error: "El rating debe ser un número entre 0 y 10" 
    });
}

    next();
};

module.exports = validateMovie;
