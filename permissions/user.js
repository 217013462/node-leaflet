const AccessControl = require('role-acl')
const ac = new AccessControl()

ac.grant('user')
  .condition({Fn:'EQUALS', args: {'requester':'$.owner'}})
  .execute('read')
  .on('user', ['*', '!password'])
//! = locked/exception, meaning wont be shown in application
//user can only read his/her OWN info

ac.grant('user')
  .condition({Fn:'EQUALS', args: {'requester':'$.owner'}})
  //$.owner is the user himself/herself
  .execute('update')
  .on('user',
      ['firstName', 'lastName', 'password', 'email'])
//user can only update his/her OWN info

ac.grant('admin').execute('read').on('user')
ac.grant('admin').execute('read').on('users')
//admin can read other users' info

ac.grant('admin')
  .condition({Fn:'NOT_EQUALS', args:{'requester':'$.owner'}})
  .execute('delete').on('user');
//admin can delete other users profile, except himself/herself

exports.readAll = (requester) =>
  ac.can(requester.role).execute('read').sync().on('users')

exports.read = (requester, data) =>
  ac.can(requester.role).context({requester:requester.username, owner:data}).execute('read').sync().on('user')