(function () {
    function MainCtrl(Room) {
        this.rooms = Room.all;

        this.addRoom = function (name) {
            Room.addRoom(name);
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', MainCtrl]);
})();