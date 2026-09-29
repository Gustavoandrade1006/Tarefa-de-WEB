
//GET /
const paginaInicial = (req, res) => {
    res.render("home", {nome: "Itoi"})
};

module.exports = {
   paginaInicial
};
 
 