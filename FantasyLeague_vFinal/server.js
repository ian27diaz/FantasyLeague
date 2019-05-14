const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

let jsonParser = bodyParser.json();
let corsOptions = {
    origin: 'http://127.0.0.1:5500'
};

//MONGODB
let {Usuario} = require('./mongodb/Usuario');
//MONGODB

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
app.use(jsonParser);

app.route('/api/usuario/login')
    .get( async (req, res) => {
        let body = req.body;
        console.log(req.body);
        if(body.usuario && body.password) {
            try{
                let token = await Usuario.validarUsuario(body.usuario, body.password);
                res.set('x-auth', token);
                res.send();
            } catch (err) {
                console.log(err);
                res.status(401).send(err);
            }
        } else {
            res.status(400).send({error: 'Faltan atributos'});
        }
    })

app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}!`));