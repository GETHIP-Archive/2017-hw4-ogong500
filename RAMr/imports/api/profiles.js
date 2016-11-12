export const Profiles = new Mongo.Collection('profiles');
export const Memes = new Mongo.Collection('memes');

Comment_Schema = new SimpleSchema({
  posterId: {
    type: String
  },
  posterFullName: {
    type: String
  },
  comment: {
    type: String,
    max: 140
  }
});

Profiles.schema = new SimpleSchema({
  ramSize: {
    type: String,
    max: 30
  },
  lastName: {
    type: String,
    max: 30
  },
  bio: {
    type: String,
    max: 500
  },
  age: {
    type: Number
  },
  userId: {
    type: String
  },
  comments: {
    type: [Comment_Schema],
    optional: true
  }
});

Profiles.attachSchema(Profiles.schema);
Memes.attachSchema(Memes.schema);
