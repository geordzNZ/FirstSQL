console.log('hi from main.js')
require('dotenv').config()
console.log((process.env.SECRET_KEY))



const knex = require('knex')({
    client: 'mssql',
    connection: {
      server : process.env.DB_SERVER,
      port : 1433,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : 'travelMapper'
    }
});
  
knex.select('*').from('Places').where('PlaceName','Woking')
    .then(places => {
        places.forEach(place => {
            console.log(place)
        })
        console.log('Records: ',places.length)
    }).catch(err => {
        console.log('ERROR:',err)
    }).finally(function () {
        knex.destroy()
    })




