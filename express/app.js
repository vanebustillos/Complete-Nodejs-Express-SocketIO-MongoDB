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

const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/items');
const app = express();

const mongodb = 'mongodb+srv://admin:admin@cluster0.fdiy4to.mongodb.net/item-database?retryWrites=true&w=majority';
mongoose.connect(mongodb, { useNewUrlParser: true }).then(() => 
    console.log('connected')).catch(err => console.log(err))

app.use(express.urlencoded({extended: true }));
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>')
    //res.sendFile('./views/index.html', {root: __dirname})
    //res.render('index', { title2: 'some titlee2'});
    /*const items = [
        { name: 'mobile phone', price: 1000 },
        { name: 'book', price: 30 },
        { name: 'computer', price: 2000 },
    ]
    res.render('index', {items});*/
    res.redirect('/get-items');
});

app.get('/create-item', (req, res) => {
    const item = new Item({
        name: 'computer',
        price:2000
    });
    item.save().then(result => res.send(result));
})

app.get('/get-items', (req, res) => {
    Item.find().then(result => {
        //res.send(result)
        res.render('index', { items: result });
    }).catch(err => console.log(err));
})

app.get('/get-item', (req, res) => {
    Item.findById('62cdec52d1666c2631ca754c').then(result => res.send(result)).catch(err => console.log(err));
})

app.get('/add-item', (req, res) => {
   // res.sendFile('./views/add-item.html', {root: __dirname})
   res.render('add-item')
});

app.post('/items', (req, res)=> {
    const item = Item(req.body);
    item.save().then(() => {
        res.redirect('/get-items');
    }).catch(err => console.log(err));
});

app.get('/items/:id', (req, res) => {
    console.log(req.params);
    const id =  req.params.id;
    Item.findById(id).then(result => {
        console.log('result', result);
        res.render('item-detail', { item: result })
    })
});

app.delete('/items/:id', (req, res) => {
    const id =  req.params.id;
    Item.findByIdAndDelete(id).then(result => {
        res.json({ redirect: '/get-items' })
    }).catch(err => console.log(err));
});

app.put('/items/:id', (req, res) => {
    const id =  req.params.id;
    Item.findByIdAndUpdate(id, req.body).then(result => {
        res.json({ msg: 'Updated successfully!' })
    }).catch(err => console.log(err));
});

app.use((req,res) => {
    //res.sendFile('./views/error.html', {root: __dirname})
    res.render('error')
}); //usarlo siempre al final

