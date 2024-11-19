db.test.aggregate([
    // stage-1    
    {
        $unwind: "$interests"
    },
    // stage-2
    {
        $group: { _id: "$age", interestsPerAge: { $push: "$interests"}}
    }
])