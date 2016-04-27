angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Max H.',
    lastText: '',
    face: 'img/max.jpg'
  }, {
    id: 1,
    name: 'Drew Hakala',
    lastText: '',
    face: 'img/drew.jpg'
  }, {
    id: 2,
    name: 'Brian Wesienbloom',
    lastText: '',
    face: 'img/BRAAIN.jpg'
  }, {
    id: 3,
    name: 'Pat Moulton',
    lastText: '',
    face: 'img/pat.jpg'
  }, {
    id: 4,
    name: 'Tim Wakefield',
    lastText: '',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Max H.',
    face: 'img/max.jpg'
  }, {
    id: 1,
    name: 'Drew Hakala',    lastText: '',
    face: 'img/drew.jpg'
  }, {
    id: 2,
    name: 'Brian Wesienbloom',
    face: 'img/BRAAIN.jpg'
  }, {
    id: 3,
    name: 'Pat Moulton',
    face: 'img/pat.jpg'
  }, {
    id: 4,
    name: 'Tim Wakefield',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return friends;
    },
    remove: function(friend) {
      friends.splice(friends.indexOf(friend), 1);
    },
    get: function(friendId) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(friendId)) {
          return friends[i];
        }
      }
      return null;
    }
  };
})
