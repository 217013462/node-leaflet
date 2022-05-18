const db = require('../helpers/database')


exports.getAllUsers = async function getAllUsers () {
  let data = await db.run_query('user', {})
  return data
}

exports.getByUsername = async function getByUsername (username) {
  let data = await db.run_query('user', {'username':String(username)})
  return data
}

exports.addUser = async function addUser (document) {
  let data = await db.run_insert('user', document)
  return data
}

