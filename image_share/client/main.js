import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

const Images = new Mongo.Collection('images');

//Template.images.helpers({images:img_data});
Template.images.helpers({images:Images.find()});

Template.images.events({
  'click .js-image': function(event) {
    $(event.target).css("width", "50px");
  },
  'click .js-del-image': function(event) {
    var image_id = this._id;
    console.log(image_id);
    $("#" + image_id).hide('slow', function() {
      Images.remove({"_id":image_id});
    });

  }
});

/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
