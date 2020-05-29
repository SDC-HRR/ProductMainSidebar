const mongoose = require('mongoose');
const config = require('./config.js');

// SCHEMAS
const gameSchema = new mongoose.Schema({
  proxyId: Number,
  name: { type: String, unique: true },
  url: String,
  mainbody: {
    description: String,
    images: Array,
    maturecontent: Array,
    sysrequirement: {
      os: Array,
      processor: String,
      memory: String,
      graphics: String,
    },
  },
  sidebar: {
    description: Object,
    vrsupport: Object,
    languages: Object,
    achievements: Array,
    metacritic: Number,
    minidescription: {
      genre: Array,
      developer: String,
      publisher: String,
      franchise: String,
      releasedate: String,
    },
  },
  relatedContent: [
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
  ],
});

const Game = mongoose.model('Game', gameSchema);

// METHODS
const getOne = (query, callback) => {
  Game.find(query).exec((err, res) => {
    if (err) {
      // console.log("error in getOne");
      callback(err);
    } else {
      callback(null, res);
      // console.log(res);
      console.log('getOne success:' + JSON.stringify(query));
    }
  });
};

const saveOne = (data, callback) => {
  const newGame = new Game(data);
  newGame.save((err) => {
    if (err) {
      callback(err);
    } else {
      console.log('saveOne success');
      callback();
    }
  });
};

const changeOne = ({ id, body }, callback) => {
  const filter = { proxyId: id };
  Game.updateOne(filter, body, (err) => {
    if (err) {
      callback(err);
    } else {
      console.log('changeOne success');
      callback();
    }
  });
};

const deleteOne = (filter, callback) => {
  Game.deleteOne(filter, (err) => {
    if (err) {
      callback(err);
    } else {
      console.log('deleteOne success');
      callback();
    }
  });
};

module.exports = {
  getOne, saveOne, changeOne, deleteOne, Game,
};
