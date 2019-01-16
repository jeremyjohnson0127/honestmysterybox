/**
 * Box.js
 *
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
      maxLength: 100
    },

    price: {
      type: 'string',
      columnType: 'float',
      required: true
    },
    status: {
      type: 'boolean'
    }

  },


  // Find all boxes
  all: async function () {
    return await Box.find({
      sort: 'createdAt DESC'
    });
  },

  // Find box by id
  get: async function (id) {
    return await Box.findOne({
      id: id
    });
  },

  // delete box
  delete: async function (boxId) {
    if (boxId)
      return await Box.destroy({
        id: boxId
      });
    else
      return false;
  },


  addBox: async function (req, res) { /* POSTed data */
    var name = req.body ? req.body.name : undefined,
      status = req.body ? req.body.status : 0,
      price = req.body ? req.body.price : undefined;
    //technically - once policies in place, this if can be removed as this action couldn't be called unless the user is logged in.
    if (!req.me) {
      return res.badRequest("Cannot add box without a logged in user");
    } else if (!name && !price) {
      return res.badRequest("Box name and price is required to add a box.");
    } else {
      return await Box.create({
        name: name || '',
        price: price || '',
        user_id: req.me.id,
        status: status
      });
    }
  },

  editBox: async function (req, res) { /* POSTed data */
    var name = req.body ? req.body.name : undefined,
      status = req.body ? req.body.status : 0,
      price = req.body ? req.body.price : undefined;
      id = req.body ? req.body.id : false;
      
    if (!req.me) {
      return res.badRequest("Cannot add post without a logged in user");
    } else if (!id) {
      return res.badRequest("Something went wrong, please try again later.");
    } else {

      return await Box.update({
        id: id
      }).set({
        name: name,
        price: price,
        status: status
      });
    }
  }
};