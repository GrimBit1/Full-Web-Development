// To insert the data in MongoDB
use Aditya // To change the database to Aditya or to create a new database named aditya
db.items.insertOne({ name: "Aditya", age:18,fvrt_food:"Bhindi"}) // insert one object in the data base
db.items.find() // Gives All the items 
db.items.insertMany([{ name: "Sanjay", age:43,fvrt_food:"Sev Tamatr"},{ name: "Kahna", age:23,fvrt_food:"Not Exist"}]) // insert many object in the data base
