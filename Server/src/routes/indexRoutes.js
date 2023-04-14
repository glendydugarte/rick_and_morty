const getCharById = require("../controllers/getCharById");
const postFav = require("../controllers/handleFavorites");
const deleteFav = require("../controllers/handleFavorites")
const Login = require("../controllers/login")
const {Router} = require("express")

const router = Router();
router.get("/character/:id", getCharById);
router.get("/login", Login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav)



module.exports = router;