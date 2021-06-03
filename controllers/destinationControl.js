const{Destination} = require('../models/index')

class Controller{
    static destinationAll(req,res){
        Destination.findAll()
            .then((data)=>{
                res.render('destination',{data})
            })
            .catch((err)=>{
                console.log(err);
                res.send(err)
            })
    }
    static destinationLocation(req,res){
        let location = req.params.location
        console.log(location);
        Destination.findOne({
        where:{
                location :location 
            }
        })
            .then((data)=>{
                res.render('destinationLocation',{data})
            })
            .catch((err)=>{
                console.log(err);
                res.send(err)
            })
    }
}

module.exports = Controller