(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        var addRoom = function (name) {
            var newRoom = {
                name: name
            };

            rooms.$add(newRoom);
            console.log(rooms.length);
        };


        return {
            all: rooms,
            addRoom: addRoom
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();