db.test.aggregate([
    // stage - 1
    { $group: { _id: "$address.country", count: { $sum: 1 }}}
])