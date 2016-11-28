(function () {
    function MainCtrl(Room, Message, $uibModal, $log, $cookies) {
        this.rooms = Room.all;

        this.room = null;
        this.roomName = null;
        this.messages = [];
        this.newMsg = "";

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


        this.getMessages = function (room) {
            this.room = room;
            this.roomName = room.name;
            this.messages = Message.getByRoomId(room.$id);
            console.log(this.messages);
        }

        this.sendMessage = function () {
            var date = new Date();
            var newMessage = {
                username: $cookies.get('blocChatCurrentUser'),
                content: this.newMsg,
                sentAt: date.getTime(),
                roomId: this.room.$id
            };

            Message.send(newMessage);

            this.messages = Message.getByRoomId(this.room.$id);
            this.newMsg = "";
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$log', '$cookies', MainCtrl]);
})();