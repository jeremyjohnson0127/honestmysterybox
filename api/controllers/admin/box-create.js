module.exports = {


  friendlyName: 'Box create',


  description: '',


  inputs: {
    name:  {
      required: true,
      type: 'string'
    },

    price:  {
      required: true,
      type: 'number',
    },
  },


  exits: {
    redirect: {
      responseType: 'redirect',
    }
  },


  fn: async function (inputs, exits) {
    var box = await Box.create({name: inputs.name, price: inputs.price});
    throw {redirect: '/admin/boxes'}; 
  }


};
