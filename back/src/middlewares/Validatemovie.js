const validateMovie = (req, res, next) => {
    let { title, year, director, duration, genre, rate, poster } = req.body;

    year = Number(year);
    rate = Number(rate);

    if (!title) return res.status(400).json({ error: "El campo 'title' es obligatorio" });
    if (!director) return res.status(400).json({ error: "El campo 'director' es obligatorio" });
    if (!poster) return res.status(400).json({ error: "El campo 'poster' es obligatorio" });

    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|tiff|svg))$/i;
    if (!urlRegex.test(poster)) {
        return res.status(400).json({ error: "El campo 'poster' debe ser una URL válida de imagen (.jpg, .png, .gif, etc.)" });
    }
    
    if (!year) return res.status(400).json({ error: "El campo 'year' es obligatorio" });
    
    if (!year || isNaN(year) || year < 1888 || year > 9999){
        return res.status(400).json({ error: "El campo 'year' debe ser un número válido de 4 dígitos (ej: 1995)" });
    }
    if (!duration) return res.status(400).json({ error: "El campo 'duration' es obligatorio" });
    
    if (!Array.isArray(genre) || genre.length === 0) {
        return res.status(400).json({ error: "Debes seleccionar al menos un género" });
    }
    if (rate === undefined || rate === null) {
        return res.status(400).json({ error: "El campo 'rate' es obligatorio" });
    }
    if (typeof rate !== 'number' || isNaN(rate) || rate < 0.1 || rate > 10) {
        return res.status(400).json({ error: "El rating debe ser un número entre 0 y 10" });
    }

    next();
};

module.exports = validateMovie;
