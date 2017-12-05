var express = require('express');
var router = express.Router();

var pool = require('../modules/pool.js')

router.get('/', function(req,res){
    console.log('in get car')
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase){
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT c.id, c.company_id, c.year, co.name AS make, c.model, c.nickname, co.country
                        FROM cars c 
                        JOIN company co ON c.company_id = co.id;`, function(errorMakingQuery, result){
                done();
                if(errorMakingQuery){
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else{
                    res.send(result.rows);
                }
            });
        }
    });
});

router.get('/company', function(req,res){
    console.log('in get car/company')
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase){
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT * FROM company;`, function(errorMakingQuery, result){
                done();
                if(errorMakingQuery){
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else{
                    res.send(result.rows);
                }
            });
        }
    });
});

router.post('/', function(req,res){
    console.log('in post car', req.body)
    var makeid = req.body.makeid;
    var model = req.body.model;
    var year = req.body.year;
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase){
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`INSERT INTO cars (company_id, model, year) VALUES ($1, $2, $3);`, [makeid, model, year], function(errorMakingQuery, result){
                done();
                if(errorMakingQuery){
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else{
                    res.sendStatus(200);
                }
            });
        }
    });
});

router.delete('/:id', function(req,res){
    var deleteId = req.params.id
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase){
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`DELETE from cars WHERE id = $1`, [deleteId], function(errorMakingQuery, result){
                done();
                if(errorMakingQuery){
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else{
                    res.sendStatus(200);
                }
            });
        }
    });
});

module.exports = router;