UsersBookLook = new Mongo.Collection('users_booklook');
var Schemas = {};
Schemas.UsersBookLook = new SimpleSchema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
});
UsersBookLook.attachSchema(Schemas.UsersBookLook);

UserDetail = new Mongo.Collection('user_detail');
Schemas.UserDetail = new SimpleSchema({
    email_user: {
        type: String
    },
    img_user: {
        type: String
    },
    userTlp: {
        type: String
    }
});
UserDetail.attachSchema(Schemas.UserDetail);


Transactions = new Mongo.Collection('transactions');
Schemas.Transactions = new SimpleSchema({
    free: {
        type: Number,
        optional: true
    },
    buy: {
        type: Number,
        optional: true
    },
    barter: {
        type: Number,
        optional: true
    },
    sell: {
        type: Number,
        optional: true
    },
    charity: {
        type: Number,
        optional: true
    },
    email_user_first:{
        type: String,
    },
    email_user_second:{
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
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
    bookid:{
        type: String  
    },
    has_been_seen:{
        type: Boolean  
    }
});
HasBeenSeen.attachSchema(Schemas.HasBeenSeen);


ListChat = new Mongo.Collection('list_chat');
Schemas.ListChat = new SimpleSchema({
    room_id:{
        type: String  
    },
    bookid:{
        type: String  
    },
    book_title:{
        type: String  
    },
    img_book:{
        type: String,
        optional: true
    },
    img_profile:{
        type: String,
        optional: true
    },
    email_user_first:{
        type: String  
    },
    email_user_second:{
        type: String  
    },
    message:{
        type: String,
        optional: true
    },
    date:{
        type: String,
        optional: true
    },
    time:{
        type: String,
        optional: true
    },
    user_name_first:{
        type: String
    },
    user_name_Second:{
        type: String
    }
});
ListChat.attachSchema(Schemas.ListChat);


AdminUser = new Mongo.Collection('admin_user');
Schemas.AdminUser = new SimpleSchema({
    email:{
        type: String
    },
    password:{
        type: String
    }
});
AdminUser.attachSchema(Schemas.AdminUser);
















