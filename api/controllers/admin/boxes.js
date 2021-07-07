module.exports = {


  friendlyName: 'Boxes',


  description: 'Boxes admin.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/admin/boxes'
    }
  },


  fn: async function (inputs, exits) {
    var boxes = await Box.find();
    
    return exits.success({boxes: boxes});

  }


};
