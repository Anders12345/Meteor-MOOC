//import { Mongo } from 'meteor/mongo';
export const Images = new Mongo.Collection('images');

Images.allow({
  insert:function(userId, doc) {
    console.log("testing security on image insert");
    if(Meteor.user()){// are they logged in ?
      if(userId != doc.createdBy) { //userIds doesnt match
        return false;
      } else { // user is logged in and the ids match
        return true;
      }
    }
    return true;
  },
  remove:function(userId, doc){
    return true;
  }
});
