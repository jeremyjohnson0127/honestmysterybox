module.exports = {


  friendlyName: 'Index',


  description: 'Index box.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/box/index',
    }
  },


  fn: async function (inputs, exits) {
    var boxes = await Box.find();
    
    return exits.success({boxes: boxes});

  }


};
