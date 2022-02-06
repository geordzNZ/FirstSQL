console.log('hi from main.js')
require('dotenv').config()


//Set up connection
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


// knex.select('*').from('Places').where('PlaceName','Woking')
//     .then(places => {
//         places.forEach(place => {
//             console.log(place)
//         })
//         console.log('Records: ',places.length)
//     }).catch(err => {
//         console.log('ERROR:',err)
//     }).finally(function () {
//         knex.destroy()
//     })

// let queryRes = []
//     knex.select('PlaceId','PlaceName', 'Tag').from('Places')
//     .then(places => {
//         queryRes = places.map(place => {
//             return {id:place.PlaceId, name: place.PlaceName}
//         })
//         console.log('Records: ', places.length)
//         console.log(queryRes)
//         console.log(queryRes[1])
//         console.log(queryRes[3])
//     }).catch(err => {
//         console.log('ERROR:',err)
//     }).finally(function () {
//         knex.destroy()
//     })


// knex.select('*').from('dbo.TodoList')
//     .then(todos => {
//             todos.map(todo => {
//                     console.log(todo)
//                 })
//                 console.log('Records: ', todos.length)
//             }).catch(err => {
//                     console.log('ERROR:',err)
//                    })
            
    //Insert an entry into the TodoList
// knex('dbo.TodoList').insert(
//     {
//         Title: `TestInsert2`,
//         Description: 'Sent from KNEX',
//         Status: 'New',
//         CreatedBy: 'Geordie'
//     }) .finally(function () {
//         knex.destroy()
//     })

// let insertArr = []
// for (let i = 1; i <= 5; i++) {
//     insertArr.push({
//         Title: `TestInsert${i}`,
//         Description: 'Sent from KNEX',
//         Status: 'New',
//         CreatedBy: 'Geordie'
//     })
// }

// knex('dbo.TodoList').insert(
//     insertArr
//     ) .finally(function () {
//         knex.destroy()
//     })


//UPDATE TABLES
// knex('TodoList')
//     .where('TodoID', '=', '3')
//     .update({
//         title: 'Updated 2',


//     })


// COUNT ROWS IN TABLE
// knex.select('*').from('Places')
//     .then(places => {
//         console.log('Records: ',places.length)
//     }).catch(err => {
//         console.log('ERROR:',err)
//     }).finally(function () {
//         knex.destroy()
//     })

// let countPlaces = 0
// knex("Places")
//   .count("* as cntPlaces")
//   .first()
//   .then(total => {
//       console.log('a:',total)
//       console.log('b:', total.cntPlaces)
//       countPlaces = total.cntPlaces
//       console.log('c:', countPlaces)
//   });
// console.log('d:', countPlaces)