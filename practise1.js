const fs = require("fs");
const http = require("http");
const url = require("url");


//Server
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
    

const server = http.createServer((req, res) => {
    const pathName = req.url;


    //Overview page 
    if(pathName === "/" || pathName === "/overview") {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(tempOverview);

    //Product Page 
    }
    else if (pathName === "/product") {
        res.end("This is the PRODUCT");
    }

    // API 
    else if (pathName === "/api") {
            res.writeHead(200, { "Content-type": "application/json"});
            res.end(data);        
    }

    //Not Found
    else {
        res.writeHead(404, {
            "Content-type": "text/html"
            
        });
        res.end("<h1>Page not Found!</h1>");
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
});

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

