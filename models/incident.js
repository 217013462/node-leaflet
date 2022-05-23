const db = require('../helpers/database')
const ObjectId = require('mongodb').ObjectId

exports.getAll = async function getAll () {
  let data = await db.run_query('incident', {})
  return data
}


exports.getById = async function getById (id) {
  let o_id = new ObjectId(id)
  let data = await db.run_oid('incident', {'_id':o_id})
  return data
}


exports.getByType = async function getByType (type) {
  let data = await db.run_query('incident', {'type':type})
  return data
}


exports.addIncident = async function addIncident (document) {
  let data = await db.run_insert('incident', document)
  return data
}


exports.updateById = async function updateById (id, body) {
  let o_id = new ObjectId(id)
  let data = await db.run_update('incident', {'_id': o_id}, {'$set': body})
  console.log(data)
  return data
}


exports.delById = async function delById (id) {
  let o_id = new ObjectId(id)
  let data = await db.run_delete('incident', {'_id':o_id})
  return data
}
