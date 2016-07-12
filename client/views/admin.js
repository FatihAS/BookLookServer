Template.admin.events({
    'click .daftar-user':function(evt, tmpl){
        evt.preventDefault();
        Session.set('showDaftarUser', true);
    },
    'click .admin-utama':function(evt, tmpl){
        evt.preventDefault();
        Session.set('showDaftarUser', false);
    },
    'click .logout': function (e) {
        e.preventDefault();
        Session.set('adminEmailSess', null);
        Session.set('adminTF', false);
        Router.go('/');
    }
});
Template.admin.helpers({
    showDaftarUser:function(){
        return Session.get('showDaftarUser');
    }
});
Template.admin_main.onRendered(function () {
    GoogleMaps.load();
});
Template.admin_main.onCreated(function () {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

Template.admin_main.helpers({
    jumlahUsers: function () {
        Meteor.subscribe('requestAllUserList');
        var i = UsersBookLook.find().count();
        console.log("jumlah user : "+i);
        return i;
    },
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(-7.25747, 112.75209),
                zoom: 12
            };
        }
    }
});

Template.admin.events({
    'click .jumlah-user': function (e) {
        e.preventDefault();
        Session.set('showDaftarUser', true);
    }
});


















