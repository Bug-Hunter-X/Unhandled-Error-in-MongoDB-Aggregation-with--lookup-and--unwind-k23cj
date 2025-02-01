```javascript
// Assuming you have a MongoDB connection established

db.collection('myCollection').aggregate([
  {
    $lookup:
      {
        from: 'anotherCollection',
        localField: 'foreignKey',
        foreignField: '_id',
        as: 'joinedData'
      }
  },
  {
    $match: {
      'joinedData.0': { $exists: true } // Check if the array is not empty 
    }
  },
  {
    $unwind: '$joinedData'
  }
])
.toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```