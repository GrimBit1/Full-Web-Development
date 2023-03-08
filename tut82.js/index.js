// Search Queary in MongoDB 
use Aditya
db.items.find() // This gives all items as we know 
// But
db.items.find({ name: 'Aditya' }) // This will filter the items with the parameter

db.items.find({ age: { $gt: 18 } }) // this will return the items which age is greater than 18 
// Similiarly $gte: greater than or equal to / $lte: smaller than or equal to / $lt : smaller than

db.items.find(
    { age: { $gt: 18 }, name: "Kahna" }     // This is for and filter
)

db.items.find({
    $or: [{ age: { $gt: 18 } }, { name: "Kahna" }] // This is for or filter
})