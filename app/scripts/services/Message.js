(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function (roomId) {
                // Filter the messages by their room ID.
                var msgs;
                ref.orderByChild("roomId").equalTo(roomId).on("value", function (data) {
                    msgs = data.val();
                });

                return msgs;
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();