//inicializando o prompt-sync para receber inputs do teclado.
const entrada = require('prompt-sync')({sigint: true});
let x;

let menu = true
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
            let allLinks = showAllTheLinks();
            console.log(allLinks);
            break;

        case 2:
            newLink = String(entrada("- please, type the new link you want to add: "));
            addNewLink(newLink);
            console.log("~~~~link added sucessfully~~~~");
            break;

        case 3:
            linkToRemove = String(entrada("- please, type the link you want to remove: "));
            let removeLink = removeAnExistingLink(linkToRemove);
            console.log(removeLink);
            break;
        
        case 0:
            console.log("===finished===")
            menu = false;
            break;

        default:
            console.log("***this option is not valid***")
    }
}

//mostra todos os links cadastrados ou uma msg de alerta caso nao haja link cadastrado ainda
function showAllTheLinks() {
    if(allLinks.length === 0) {
        return "***empty link list***";
    } else {
        let links = []
        for (let link of allLinks) {
            links.push(link);
        }
        return links;    
    }
}

//adiciona um novo link a lista e adiciona https:// se necessario
function addNewLink(newLink) {
    if (newLink.startsWith("http://") || newLink.startsWith("https://")){
        allLinks.push(newLink);
    } else {
        let rightLink = "http://" + newLink;
        allLinks.push(rightLink);
    }
}

//remove um link cadastrado ou retorna uma msg de que esse link nao foi cadastrado
function removeAnExistingLink(linkToRemove) {
        if(allLinks.includes(linkToRemove)) {
            const i = allLinks.indexOf(linkToRemove);
            allLinks.splice(i, 1);
            return "~~~~link removed sucessfully~~~~"
        } else {
            return "***this link is no registered***"
        }     
}