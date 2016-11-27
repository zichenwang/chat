(function () {
    function EnterUsernameCtrl($uibModalInstance, Room) {
        this.giveAlert = false;

        this.ok = function (data) {
            if (data && data.trim().length > 0) {
                $uibModalInstance.close(data);
            } else {
                console.log("here");
                this.giveAlert = true;
            }
        }

    }

    angular
        .module('blocChat')
        .controller('EnterUsernameCtrl', ['$uibModalInstance', 'Room', EnterUsernameCtrl]);
})();