var mqSql=require("mqsql")
var services=JSON.parse(process.env.VCAP_SERVICES  || {});
var mysqlCreds={};

for(var serviceName in services){
    if(sericeName.indexx("cleardb")>-1){
        mysqlCreds=services[serviceName][0]['credentials']
    }
}

var services={mqsql:{}};
if(JSON.stringify(myysqlCred)=="{}"){
    service=require("../../dbconfig.json");
}


  }

 