db.orders.aggregate([
    {
        $lookup: {
               from: "test",
               localField: "userId",
               foreignField: "_id",
               as: "meheraz"
             }
    }
])