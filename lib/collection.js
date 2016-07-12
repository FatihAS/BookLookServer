UsersBookLook = new Mongo.Collection('users_booklook');
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
















