const fs = require("fs");

const quote = "No pain no gain";

// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("Completed writing!!");
// }) 

const quote2 = "live more, worry less";

// for(let i = 1; i <= 10; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed writing!!");
//     })
// }

// console.log(process.argv);

// const [, , noOfFiles] = process.argv;

// for(let i = 1; i <= noOfFiles; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed Writing!!");
//     })
// }


fs.readFile("./cool.txt", "utf-8", (err, data) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});


const quote3 = "Make everyday a little less ordinarily";

fs.appendFile(`./nice.txt`, "\n" + quote3, (err) => {
    console.log("Completed Updating!!");
})

fs.unlink("./delete.html", (err) => {
    if (err){
        console.log(err);
    }else{
        console.log("Completed Deleting!!");
    }    
});

