const { Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'ppl',
    password : 'ppl123',
    database : 'nodeapi',
    port : '5432'

});
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.status(200).send(response.rows);
}

const createUser = async (req, res) => {
    console.log(req.body);
    const {name, email} = req.body;

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    //res.status(200).send('User created successfully');
    res.json({
        message: 'User created successfully',
        body :{
            user :{name, email}
        }
    })
}


const getCoffees = async (req, res) => {
    const response = await pool.query('SELECT * FROM coffees ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getCoffeesDetailById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM coffees_detail WHERE id_coffee = $1', [id]);
    res.json(response.rows);
};


module.exports = {
    getUsers, createUser,
    getCoffees, getCoffeesDetailById
};
