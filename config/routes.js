/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /': {
    action: 'view-homepage-or-redirect'
  },
  'GET /welcome/:unused?': {
    action: 'dashboard/view-welcome'
  },

  'GET /faq': {
    view: 'pages/faq'
  },
  'GET /legal/terms': {
    view: 'pages/legal/terms'
  },
  'GET /legal/privacy': {
    view: 'pages/legal/privacy'
  },
  'GET /contact': {
    view: 'pages/contact'
  },

  'GET /signup': {
    action: 'entrance/view-signup'
  },
  'GET /email/confirm': {
    action: 'entrance/confirm-email'
  },
  'GET /email/confirmed': {
    view: 'pages/entrance/confirmed-email'
  },

  'GET /login': {
    action: 'entrance/view-login'
  },
  'GET /password/forgot': {
    action: 'entrance/view-forgot-password'
  },
  'GET /password/new': {
    action: 'entrance/view-new-password'
  },

  'GET /account': {
    action: 'account/view-account-overview'
  },
  'GET /account/password': {
    action: 'account/view-edit-password'
  },
  'GET /account/profile': {
    action: 'account/view-edit-profile'
  },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms': '/legal/terms',
  '/logout': '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout': {
    action: 'account/logout'
  },
  'PUT   /api/v1/account/update-password': {
    action: 'account/update-password'
  },
  'PUT   /api/v1/account/update-profile': {
    action: 'account/update-profile'
  },
  'PUT   /api/v1/account/update-billing-card': {
    action: 'account/update-billing-card'
  },
  'PUT   /api/v1/entrance/login': {
    action: 'entrance/login'
  },
  'POST  /api/v1/entrance/signup': {
    action: 'entrance/signup'
  },
  'POST  /api/v1/entrance/send-password-recovery-email': {
    action: 'entrance/send-password-recovery-email'
  },
  'POST  /api/v1/entrance/update-password-and-login': {
    action: 'entrance/update-password-and-login'
  },
  'POST  /api/v1/deliver-contact-form-message': {
    action: 'deliver-contact-form-message'
  },

  // Admin Routes

  'GET /admin/dashboard': {
    controller: 'DashboardController',
    action: 'adminIndex',
    locals: {
      layout: 'layouts/admin'
    }
  },
  'GET /admin/users': {
    controller: 'UsersController',
    action: 'adminIndex',
    locals: {
      layout: 'layouts/admin'
    }
  },
  'GET /admin/users/add': {
    controller: 'UsersController',
    action: 'adminAdd',
    locals: {
      layout: 'layouts/admin'
    }
  },
  'GET /admin/users/edit/:id': {
    controller: 'UsersController',
    action: 'adminEdit',
    locals: {
      layout: 'layouts/admin'
    }
  },
  'GET /admin/users/delete/:id': {
    controller: 'UsersController',
    action: 'adminDelete',
    locals: {
      layout: false
    }
  },
  'POST /admin/users/addUser': {
    controller: 'UsersController',
    action: 'addUser',
    locals: {
      layout: false
    }
  },
  'POST /admin/users/editUser': {
    controller: 'UsersController',
    action: 'editUser',
    locals: {
      layout: false
    }
  },


  // Routes for boxes
  'GET /admin/boxes': {
    controller: 'BoxesController',
    action: 'list',
    locals: {
      layout: 'layouts/admin'
    }
  },
  'GET /admin/boxes/add': {
    controller: 'BoxesController',
    action: 'add',
    locals: {
      layout: 'layouts/admin'
    }
  },
  'GET /admin/boxes/edit/:id': {
    controller: 'BoxesController',
    action: 'edit',
    locals: {
      layout: 'layouts/admin'
    }
  },
  'GET /admin/boxes/delete/:id': {
    controller: 'BoxesController',
    action: 'delete',
    locals: {
      layout: false
    }
  },

  'POST /admin/boxes/addBox': {
    controller: 'BoxesController',
    action: 'addBox',
    locals: {
      layout: false
    }
  },
  'POST /admin/boxes/editBox': {
    controller: 'BoxesController',
    action: 'editBox',
    locals: {
      layout: false
    }
  },
};