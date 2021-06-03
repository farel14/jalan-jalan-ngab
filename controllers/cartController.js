class Controller{
    static cartAll(req,res){
        res.send('control all')
    }
    static cartDelete(req,res){
        res.send('control delete')
    }
    static cartEdit(req,res){
        res.send('control Edit')
    }
    static cartEditPost(req,res){
        res.send('control Edit Post')
    }
}

module.exports = Controller