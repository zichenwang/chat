(function () {
    function CreateRoomCtrl($uibModalInstance, Room) {
        this.ok = function (newName) {
            console.log(newName);
            Room.addRoom(newName);
            $uibModalInstance.close(newName);
        }

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }

    }

    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$uibModalInstance', 'Room', CreateRoomCtrl]);
})();