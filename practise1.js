const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    res.end("Hello from the server!");
})

/* 
PART 4 THESE WERE ALL FOR FILES NO SERVER

const fs = require("fs");

fs.readFile("./txt/start.txt", "utf-8", (err, data1) =>{
    if (err) return console.log(" ERROR! ");
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) =>{
        console.log(data2);
        fs.readFile("./txt/append.txt", "utf-8", (err, data3) =>{
            console.log(data3);

            fs.writeFile(".txt/_final.txt", `${data2}\n${data3}`, "utf-8", err => {
                console.log("Your file has been written :D");
            })
            });
        });
    });
    console.log("Will read file!");
*/

/*
PART 3 ASYNCHRONISE AND NON BLOCKING 
const fs = require("fs");

fs.readFile("./txt/start.txt", "utf-8", (err, data) =>{
    console.log(data);
    });
    console.log("Will read file!");
 */


/*
const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut =`This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/_output.txt", textOut);
console.log("File written!");
*/


/*

PART 2 SYNCHRONISE CODE
BLOCKING AND SYNCHRONOUS WAY WHICH WE DON'T WANT

const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/_output.txt", textOut);
console.log("File written!");

*/

/*

PART 1

const fs = require("fs");

const hello = "Hello World";
console.log(hello);

*/

