const db = require('../helpers/database')
const ObjectId = require('mongodb').ObjectId

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

exports.updateIncidentById = async function updateIncidentById (id, incidentID) {
  let o_id = new ObjectId(id)
  let data = await db.run_update('user', {'_id': o_id}, {'$push': {'incidentReported': incidentID}})
  console.log(data)
  return data
}