function Authenticate(userName,password, callback){
    if(userName ==='pradeep' && password==='pradeep'){
        return callback(true);
    }else{
         return callback(false);
    }
}

module.exports={
    Authenticate:Authenticate
}