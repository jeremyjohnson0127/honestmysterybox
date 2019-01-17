module.exports = {


  friendlyName: 'Fail',


  description: 'Fail order.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/order/fail'
    }
  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
