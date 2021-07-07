module.exports = {


  friendlyName: 'Users',


  description: 'Users admin.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/admin/users'
    }
  },


  fn: async function (inputs, exits) {
    var users = await User.find();
    
    return exits.success({users: users});

  }


};
