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
//         Title: `TestInsert6`,
//         Description: 'Sent from KNEX',
//         Status: 'New',
//         CreatedBy: 'Geordie'
//     }) .finally(function () {
//         knex.destroy()
//     })

// let insertArr = []
// for (let i = 21; i <= 25; i++) {
//     insertArr.push({
//         Title: `TestInsert${i}`,
//         Description: 'Sent from KNEX',
//         Status: 'New',
//         CreatedBy: 'Geordie'
//     })
// }
// console.log('INSERTING:')
// insertArr.forEach(td => console.log(`   -   ${td.Title}`))
// console.log('INSERTED')

// knex('dbo.TodoList')
//     .insert(
//         insertArr,
//         ['TodoID', 'Title'],
//         { includeTriggerModifications: true })
//     .then(function(rows) { console.log(rows) })
//     .finally(function () { knex.destroy() })



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

// //Deleteing
// knex('dbo.TodoList')
//     .where('Title', 'TestInsert21')
//     .del(['TodoID', 'Title'])
//     .then(function (rowsDeleted) { console.log(rowsDeleted) })
//     .finally(function () { knex.destroy() })

//     knex('dbo.TodoList')
//     .where('Title', 'TestInsert25')
//     .del()
//     .then(function (count) { console.log(`${count} rows deleted`) })
//     // .del(['TodoID', 'Title'])
//     // .then(function (rowsDeleted) { console.log(rowsDeleted) })
//     .finally(function () { knex.destroy() })

    // knex('dbo.TodoList')
    // .where('TodoID','>=',95 )
    // .del()
    // .then(function (count) { console.log(`${count} rows deleted`) })
    // // .del(['TodoID', 'Title'])
    // // .then(function (rowsDeleted) { console.log(rowsDeleted) })
    // .finally(function () { knex.destroy() })