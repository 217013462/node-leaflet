const Client = require('mongodb').MongoClient
const Auth = require('../config')

const username = Auth.config.user
const password = Auth.config.pwd

const CONNECTION_URI = `mongodb+srv://${username}:${password}@${Auth.config.host}`
const DATABASE_NAME = Auth.config.dbname

/**
  *  run_query
  *  retrieve specific records from database by query
  *  @param query
  *  @returns result
  */
exports.run_query = async function run_query(collection, query) {
  const dbClient = await Client.connect(CONNECTION_URI)
  try {
  const result = await dbClient.db(DATABASE_NAME).collection(collection).find(query).toArray()
  // MongoDB returns in BJSON
  // .toArray is to convert return objects in order to read data
  return result
    } catch (e) {
    console.error(e)
  } finally {
    await dbClient.close()
  }
}

/**
  *  run_oid
  *  retrieve one record from database by objectID
  *  @param objectID
  *  @returns result
  */
exports.run_oid = async function run_oid(collection, oid) {
  const dbClient = await Client.connect(CONNECTION_URI)
  try {
  const result = await dbClient.db(DATABASE_NAME).collection(collection).findOne(oid)
  return result
    } catch (e) {
    console.error(e)
  } finally {
    await dbClient.close()
  }
}

/**
  *  run_insert
  *  add a new record to database
  *  @param document
  *  @returns object
  */
exports.run_insert = async function run_insert(collection, document) {
  const dbClient = await Client.connect(CONNECTION_URI)
  try {
  const result = await dbClient.db(DATABASE_NAME).collection(collection).insertOne(document)
  // insertOne to make sure only inserting one record
  return {'status': 201, 'description': 'Successfully created', 'data': result}
    } catch (e) {
    console.error(e)
  } finally {
    await dbClient.close()
  }
}

/**
  *  run_update
  *  update an existing record in the database by using id to call out one specific record
  *  @param id updateContent
  *  @returns object
  */
exports.run_update = async function run_update(collection, id, updateContent) {
  const dbClient = await Client.connect(CONNECTION_URI)
  try {
  const result = await dbClient.db(DATABASE_NAME).collection(collection).updateOne(id, updateContent)
  return {'status': 200, 'description': 'Successfully updated'}
    } catch (e) {
    console.error(e)
  } finally {
    await dbClient.close()
  }
}

/**
  *  run_delete
  *  delete one record from database by objectID
  *  @param id updateContent
  *  @returns object
  */
exports.run_delete = async function run_delete(collection, oid) {
  const dbClient = await Client.connect(CONNECTION_URI)
  try {
  const result = await dbClient.db(DATABASE_NAME).collection(collection).deleteOne(oid)
  return {'status': 200, 'description': 'Successfully deleted'}
    } catch (e) {
    console.error(e)
  } finally {
    await dbClient.close()
  }
}
