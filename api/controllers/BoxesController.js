module.exports = {

  list: async function (req, res) {

    var boxes = await Box.all();
    sails.log(boxes);
    return res.view('pages/admin/boxes/list', {
      boxes: boxes
    });

  },


  add: async function (req, res) {
    return res.view('pages/admin/boxes/add');
  },

  addBox: async function (req, res) {
    await Box.addBox(req, res);
    req.flash('success', "Box added successfully.");
    res.redirect('/admin/boxes');
  },


  edit: async function (req, res) {

    var id = req.params.id;
    var box = await Box.get(id);
    if (!box)
      return res.notFound();
    return res.view('pages/admin/boxes/edit', {
      box: box
    });
  },

  editBox: async function (req, res) {
    await Box.editBox(req, res);
    req.flash('success', "Box has been updated.");
    res.redirect('/admin/boxes');
  },

  delete: async function (req, res) {

    var id = req.params.id;
    var post = await Box.delete(id);
    req.flash('success', "Box #" + id + " has been deleted.");
    res.redirect('back');

  },
};