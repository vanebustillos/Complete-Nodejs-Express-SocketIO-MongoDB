//console.log('ckmobile');

/*globalThis.setTimeout(() => {
    console.log('timeout with global')
}, 3000)
setTimeout(() => {
    console.log('timeout without global')
}, 3000)*/

/*const importedStuff = require('./users')
console.log(importedStuff)
//console.log(importedStuff.nums)*/

//---------------------------------------------------------------------------------
/*
const fs = require('fs')

//READ file
fs.readFile('./ckmobile/note.txt', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})

//WRITE file
fs.writeFile('./ckmobile/note.txt', 'A new messageee', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log('A new message was created')
    }
})

//APPEND file
fs.appendFile('./ckmobile/note.txt', 'A new message 2\r', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Second message was created')
    }
})

//CREATE folder
if(!fs.existsSync('newFolder')) {
    fs.mkdir('newFolder', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log('A new folder was created')
        }
    })
} else {
    console.log('Folder already exist')
}
//DELETE folder
if(fs.existsSync('newFolder')) {
    fs.rmdir('newFolder', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log('The folder was deleted')
        }
    })
} else {
    console.log('The folder already deleted')
}

//UNLINK file 
if(fs.existsSync('./ckmobile/note.txt')) {
    fs.unlink('newFolder', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log('The folder was deleted')
        }
    })
} else {
    console.log('The folder already deleted')
}
*/


//--------------------------------------------------------------------
/*const fs = require('fs')

const readStream = fs.createReadStream('largetext.txt',{encoding: 'utf-8'})
const writeStream = fs.createWriteStream('writeStream.txt');
readStream.on('data', chunk => {
    console.log('##### new chunk #####')
    console.log(chunk)

    writeStream.write('\n ##### new chunk ##### \n');
    writeStream.write(chunk);

})*/
//readStream.pipe(writeStream) 

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<p>Home Page</p>')
});
app.get('/add-item', (req, res) => {
    res.send('<h1>Add Items</h1>')
});
  
app.listen(3000);