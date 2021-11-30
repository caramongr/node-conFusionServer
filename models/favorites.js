const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    dish:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "dish"
    }

})

const Favorites = mongoose.model("Favorites", favoriteSchema);

module.exports = Favorites;