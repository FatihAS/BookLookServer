UsersBookLook = new Mongo.Collection('users_booklook');
});
Transactions.attachSchema(Schemas.Transactions);


UserBooks = new Mongo.Collection('userbooks');
Schemas.UserBooks = new SimpleSchema({
    title: {
        type:String
    },
    email_user: {
        type: String
    },
    img_book: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    username_user: {
      type: String  
    }
});
UserBooks.attachSchema(Schemas.UserBooks);


Chatrooms = new Mongo.Collection('chatrooms');
Schemas.Chatrooms = new SimpleSchema({
    email_user_first: {
        type: String
    },
    email_user_second: {
        type: String
    },
    bookid: {
        type: String
    }
});
Chatrooms.attachSchema(Schemas.Chatrooms);
    

Chats = new Mongo.Collection('chats');
Schemas.Chats = new SimpleSchema({
    room_id: {
        type: String
    },
    text:{
        type:String
    },
    email: {
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
















