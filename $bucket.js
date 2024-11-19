db.test.aggregate([
    // stage - 1
    { $bucket: {
          groupBy: "$age",
          boundaries: [20, 40, 60, 80],
          default: "80 er uporer bura gula",
          output: {
              count: { $sum : 1 },
              karakaraAse: { $push: "$$ROOT" }
          }
        } }
])