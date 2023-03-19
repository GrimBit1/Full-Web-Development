// Deleting items from mongoDB
show dbs // Shows the list of Databases 
use Aditya // to change the database to aditya
db.items.find() // Shows all the items

db.dropDatabase() // Deletes the database

// Deleting syntax
db.items.deleteOne({ fvrt_food: "Not Exist" }) // To delete one item
db.items.insertOne({
    name: 'Kahna',
    age: 23,
    fvrt_food: 'Pani Puri'
  })

db.items.deleteMany({ name: "Kahna" }) // To delete many /all with same as filter item