'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          undefined,

  // Server port
  port:   process.env.OPENSHIFT_NODEJS_PORT ||
          process.env.PORT ||
          8080,

  // MongoDB connection options
  // mongo: {
  //   //uri: 'mongodb://localhost/assignment2yeoman-dev'
  //   uri: 'mongodb://00833827:ynnadc1@ds011472.mlab.com:11472/heroku_v6dtznbz'
  // }
  mongo: {
    uri:  process.env.MONGOLAB_URI ||
          process.env.MONGOHQ_URL ||
          process.env.OPENSHIFT_MONGODB_DB_URL +
          process.env.OPENSHIFT_APP_NAME ||
          'mongodb://00833827:ynnadc1@ds011472.mlab.com:11472/heroku_v6dtznbz'
  }
};
