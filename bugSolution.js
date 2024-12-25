```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: "$field", count: {$sum: {$ifNull: ["$field", 0]}}}},
  {$sort: {count: -1}},
  {$limit: 10}
])
```