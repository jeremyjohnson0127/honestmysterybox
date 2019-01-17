module.exports = {


  friendlyName: 'Create',


  description: 'Create order.',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {
    redirect: {
      responseType: 'redirect',
    },
  },


  fn: async function (inputs) {
    if (!this.req.me) {
      throw {redirect:'/welcome'};
    }
    else {
      console.log(inputs);
      var box = await Box.findOne({
        id: inputs.id
      });
      var curBox = box;
      console.log(curBox);
      var price = curBox.price;
      if (price <= this.req.me.cash) {
        var order = await Order.create({ user: this.req.me.id, box: curBox.id });
        var newCash = this.req.me.cash - price;
        var user = await User.updateOne({id: this.req.me.id},{cash: newCash});
        throw {redirect: "/orderpass"};
      }
      else {
        throw {redirect: "/orderfailcash"};
      }
    }

  }


};
