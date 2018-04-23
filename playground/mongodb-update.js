const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if (err){
        return console.log('Unable to connect'); 
    }
    console.log('connected');
    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5ad9aa9b6cf49a0d4e6b5035')
    },{
        $set: {
            completed : true
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    })
});

