
const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"



module.exports =
    function getCharById(req, res) {
        const {id} = req.params;
            axios.get(`${URL}${id}`).then(response => response.data)
            .then(data => {
                if(!data)res.status(404).json("Not fund")
            
                    const {id, name,gender, species, origin, image, status} = data;
                    const character = { id, 
                        name, 
                        gender, 
                        species, 
                        origin, 
                        image,
                        status } 
                res.status(200).json(character)
            })
                

            
        .catch(error => (res.status(500).json({error: error.message})))
            
        }
    