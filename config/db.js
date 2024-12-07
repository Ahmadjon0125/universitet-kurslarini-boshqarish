const {Pool } = require ('pg')

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',  
  database: 'university',  
  password: 'linux',  
  port: 5432,  
})

module.exports = pool