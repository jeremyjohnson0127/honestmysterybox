module.exports = {


  friendlyName: 'User',


  description: 'User admin.',


  inputs: {
    id: {
      type: 'number'
    }
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/admin/user'
    }
  },

  fn: async function (inputs, exits) {
    var user = await User.findOne({ id: inputs.id });
    return exits.success({user: user});
  }
};
