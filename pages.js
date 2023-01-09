const fs = require('fs')

// This function verify if the files of a directory is html file and adds it into an array 

function htmlFiles(directory, files){

    if (!files) files = []

    let filesList = fs.readdirSync(directory)

    function isHTML(file){
        let trueOrFalse = false
        let temp = file.split('.').pop()
        
        temp == 'html' ? trueOrFalse = true : trueOrFalse = false
   
        return trueOrFalse
    }

    let htmlFilesList = filesList.filter(isHTML)

    return htmlFilesList
}

let htmlPages = htmlFiles(__dirname + '/paginas')

module.exports = {
    htmlPages
}