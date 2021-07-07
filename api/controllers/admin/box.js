module.exports = {


  friendlyName: 'Box',


  description: 'Box admin.',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/admin/box'
    },
    fail: {
      statusCode: 409,
      description: 'The box not found.',
    }
  },


  fn: async function (inputs, exits) {
    var box = await Box.findOne({id: inputs.id});   
    if(!box) {
      return exits.fail();
    }
    else {
      return exits.success({box: box});
    }
  }


};
