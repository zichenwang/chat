(function () {
    function MainCtrl(Room, Message, $uibModal, $log) {
        this.rooms = Room.all;

        this.open = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/createRoomContent.html',
                controller: 'CreateRoomCtrl',
                controllerAs: '$ctrl',
                appendTo: undefined,
                size: 'sm'
            });

            modalInstance.result.then(function (data) {
                console.log(data);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        this.room = null;
        this.messages = [];

        this.getMessages = function (room) {
            this.room = room.name;
            this.messages = Message.getByRoomId(room.$id);
            console.log(this.messages);
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$log', MainCtrl]);
})();