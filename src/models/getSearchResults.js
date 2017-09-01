
var getSearchData=function(searchparam,callback){
    var  tableData = []
    if(searchparam === '1'){
       tableData = [
        {
            name: 'Eddie Morra',
            status: 'on NZT',
        },
        {
            name: 'Brian Finch',
            status: 'On NZT',
        },
        {
            name: 'Rebacca Harris',
            status: 'Not On NZT',
        }
      ]  

    }else if(searchparam === '2'){
       tableData = [
        {
            name: 'Wall Street',
            status: 'Closed',
        },
        {
            name: 'Nifty',
            status: 'Open',
        },
        {
            name: 'Mid markets',
            status: 'About to be open',
        }
      ]  

    }else{
     tableData=[]; 
    }
    return callback(tableData);
}

module.exports = {
    getSearchData : getSearchData
}