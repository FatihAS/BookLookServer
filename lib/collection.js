UsersBookLook = new Mongo.Collection('users_booklook');
        type: String
    },
    bookid: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
});
Chats.attachSchema(Schemas.Chats);


Locations = new Mongo.Collection('locations');
Schemas.Locations = new SimpleSchema({
    email_user: {
        type: String
    },
    long: {
        type: String
    },
    lat: {
        type: String
    }
});
Locations.attachSchema(Schemas.Locations);


HasBeenSeen = new Mongo.Collection('has_been_seen');
Schemas.HasBeenSeen = new SimpleSchema({
    email_user:{
        type: String  
    },
 \HasBeenSeen.attachSchema(Schemas.HasBeenSeen);
















