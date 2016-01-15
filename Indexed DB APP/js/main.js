$(document).ready(function(){
    //Open Database
    var request = indexedDB.open('customermanager',1);

    request.onupgradeneeded = function(e){
        var db = e.target.result;

        if(!db.objectStoreNames.contains('customers')){
            var os = db.createObjectStore('customers',{keyPath: "id", autoIncrement:true});
            //Create Index for Name
            os.createIndex('name','name',{unique:false});
        }
    }

    //Success
    request.onsuccess = function(e){
        console.log('Success: Opened Database...');
        db = e.target.result;
        //Show Customers
        //showCustomers();
    }

    //Error
    request.onerror = function(e){
        console.log('Error: Could Not Open Database...');
    }
});