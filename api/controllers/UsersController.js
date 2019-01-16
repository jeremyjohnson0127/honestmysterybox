module.exports = {

  adminIndex: async function (req, res) {
    var users = await User.all();
    return res.view('pages/admin/users/index', {
      users: users
    });
  },


  adminAdd: async function (req, res) {

    return res.view('pages/admin/users/add');

  },


  adminEdit: async function (req, res) {
    var id = req.params.id;
    var user = await User.get(id);
    if (!user)
      return res.notFound();
    return res.view('pages/admin/users/edit', {
      user: user
    });

  },

  editUser: async function (req, res) {
    await User.editUser(req, res);
    req.flash('success', "User has been updated.");
    res.redirect('/admin/users');
  },

  addUser: async function (req, res) {
    await User.addUser(req, res);
    req.flash('success', "User added successfully.");
    res.redirect('/admin/users');
  },

  adminDelete: async function (req, res) {
    var id = req.params.id;
    var user = await User.delete(id);
    req.flash('success', "User #" + id + " has been deleted.");
    res.redirect('back');

  }
};