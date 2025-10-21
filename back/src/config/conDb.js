const mongoose = require('mongoose');
require('dotenv').config();

const conDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado a la base de datos MongoDB');
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos MongoDB:', error);
    }
};

module.exports = conDb;
