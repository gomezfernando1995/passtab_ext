function compareUrl(tabUrl){
    var localURL= JSON.stringify(localStorage.getItem("url"));
    if(tabUrl===localURL){
        console.log("existe esta url");
    }else{
        console.log("no existe esta url" + tabUrl);
    }
}