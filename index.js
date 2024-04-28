//Reading an existing file......

const fs = require('fs');

fs.readFile('./Files/example.txt','utf8',(err,data)=>{
    if(err){ 
    throw err;}
    console.log(data);
});

//Writing To a file
fs.writeFileSync('./Files/sample.txt','Some Random demo text',(err)=>{if(err){ throw err;}else{
console.log('file written successfully')}});


//Create a program that takes user input from the console and appends it to a file named notes.txt. Ensure that each input is appended on a new line.
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('Enter your note: ', (input) => {
//     fs.appendFile('./Files/notes.txt', input + '\n', (err) => {
//         if (err) throw err;
//         console.log('Input appended to notes.txt successfully.');
//         rl.close();
//       });
// });


//Copying A file
fs.copyFile('./Files/notes.txt', './Files/copied.txt', (err) => {
    if (err) {
      console.error('Error copying content');
      return;
    }
    console.log('Content copied successfully.');
  });

  //Renaming a file
//   fs.rename('./Files/notes.txt','./Files/demo.txt',(err)=>{
//     if(err)throw err;
//     console.log('File renamed!');
//   })
//Delete existing file

fs.unlink('./Files/todelete.txt', (err) => {
    if (err) {
      console.error('Error deleting file');
      return;
    }
    console.log('File deleted successfully.');
  });

  //Listing Files from Directory
  const path = require('path');
  const dirPath = path.join(__dirname,'./Files');
  fs.readdir(dirPath,(err,files)=>{
    if(err)throw err;
    files.forEach((item)=>{
        console.log(item);
    })
  });

  //Write a program that creates a directory named newDirectory.

  fs.mkdir('newDirectory', (err) => {
    if (err) {
      console.error('Error creating directory');
     
    }
    console.log('Directory created successfully');
  });

//   Delete Directory

fs.rmdir('dirName', (err) => {
    if (err) {
      console.error('Error deleting directory');
      
    }
    console.log('Directory and its contents deleted successfully');
  });

// Watching for modification in files

// fs.watch('./Files/demo.txt',(eventType,filename)=>{
//     if (filename && eventType === 'change') {
//         console.log(`${filename} has been modified.`);
//       }
    
// })