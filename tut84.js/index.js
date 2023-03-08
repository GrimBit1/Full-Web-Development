show dbs
use Aditya 
show collections

db.items2.insertOne({ name: 'Aditya' }) // After db we can give another collection for database

db.items.find() // this is to get all the items in the collections

db.items.updateOne({ name: 'Kahna' }, { $set: { fvrt_food: 'Roti Sabzi' } }) // To update one data in the items


db.items.updateMany({ name: 'Kahna' }, { $set: { fvrt_food: 'Pani Puri' } }) // To update Many data in the items


