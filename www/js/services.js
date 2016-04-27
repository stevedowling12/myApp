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
