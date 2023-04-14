let myFavorites = [];

function postFav(req, res){
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)
}
   

function deleteFav(req, res){
    const {id} = req.params;
    findFavorite = myFavorites.find(char => char.id === Number(id));
 try {
    if(!findFavorite) throw Error("Id not found");
    myFavorites.filter(fav => fav.id !== Number(id))
    res.status(200).json(myFavorites)
 } catch (error) {
    return res.status(422).json({error: error.message});
 }
}

module.exports = postFav, deleteFav;