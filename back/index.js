const app = require("./src/server");
const conDb = require ("./src/config/conDb");

conDb().then((res) => {
    app.listen(3001,() => {
    console.log("servidor escuchando en el puerto 3001");
    });  
})
.catch ((error) => {
    console.log("error al conectar a la base de datos");
});
