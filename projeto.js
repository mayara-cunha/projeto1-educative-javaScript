//inicializando o prompt-sync para receber inputs do teclado.
const entrada = require('prompt-sync')({sigint: true});

class Objeto {
    constructor(linkTitle, linkAuthor, linkUrl) {
        this.linkTitle = linkTitle;
        this.linkAuthor = linkAuthor;
        this.linkUrl = linkUrl;
      }
    }

let objeto = new Objeto();
let menu = true;
let allLinks = [];

while(menu) {

    console.log("==LETS START==");
    console.log("1. show the list of links");
    console.log("2. add a new link");
    console.log("3. remove an existing link");
    console.log("0. quit the program");
    option = Number(entrada("choose an option: "))

    switch(option) {

        case 1:
            let showAllLinks = showAllTheLinks();
            console.log(showAllLinks);
            break;

        case 2:
            let addMsg = addNewLink();
            console.log(addMsg);
            break;

        case 3:
            let removeMsg = removeAnExistingLink();
            console.log(removeMsg)
            break;
        
        case 0:
            console.log("===finished===")
            menu = false;
            break;

        default:
            console.log("***this option is not valid***")
    }
}

function showAllTheLinks() {
    if(allLinks.length === 0) {
        return "***empty link list***";
    } else {
        for (let i = 0; i < allLinks.length; i++) {
            console.log(`index: ${i} | title: ${allLinks[i].linkTitle} | author: ${allLinks[i].linkAuthor} | URL: ${allLinks[i].linkUrl}`);
        }    
    }
}

function addNewLink() {
    
    let title = entrada("type the link title: ");
    let url = entrada("type the link URL: ");
    if (!url.startsWith("http://") || !url.startsWith("https://")) {
        url = "http://" + url;
    } 
    let author = entrada("type the author: ");

    let objAux = new Objeto(title, author, url)

    allLinks.push(objAux);
    return "~~~~link added sucessfully~~~~"
}

function removeAnExistingLink() {
    if (allLinks.length === 0) {
        return "***empty link list***"
    } else {
        let index = entrada(`type the link index you want to remove (between 0 and ${allLinks.length-1}): `);
        if (index < allLinks.length) {
            allLinks.splice(index, 1);
            return "~~~~link removed sucessfully~~~~"
        } else {
            return "***this link is no registered***"
        } 
    }    
}