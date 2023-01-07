const fs = require('fs')

// This function verify if the files of a directory is html file and adds it into an array 

function htmlFiles(directory, files){

    if (!files) files = []

    let filesList = fs.readdirSync(directory)

    function isHTML(file){
        let trueOrFalse = false
   
        for(let i = file.length - 1; i >= 0; i--){
            if(file[i] == '.') break

            if(file[i] == 'l') continue

            if(file[i] == 'm') continue

            if(file[i] == 't') continue

            if(file[i] == 'h') trueOrFalse = true
        }
        return trueOrFalse
    }

    let htmlFilesList = filesList.filter(isHTML)

    return htmlFilesList
}

let htmlPages = htmlFiles(__dirname + '/paginas')

module.exports = {
    htmlPages
}