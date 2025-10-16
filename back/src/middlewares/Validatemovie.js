const validatemovie = (req, res, next) => {
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

    next();
};

module.exports = validatemovie;
