(function () {
    function MainCtrl(Room, $uibModal, $log) {
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
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', '$uibModal', '$log', MainCtrl]);
})();