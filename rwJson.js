const fs = require('node:fs');
const { parse } = require('node:path');
fs.readFile('data.json',(err,data)=>{
    if(err)throw err;
    const jsonData = JSON.parse(data);
    jsonData.text2 = "from node";
    console.log(jsonData);

    fs.writeFile('data.json',JSON.stringify(jsonData,null,2),(err)=>{
        if(err)throw err;
        console.log('Data Written');
    })

})

