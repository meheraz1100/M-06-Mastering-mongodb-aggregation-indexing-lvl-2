db.getCollection("massive-data").find({ $text: { $search: " dolor " }}).project({about: 1})

// 