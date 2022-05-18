const axios = require('axios')

exports.getAllRoadworks = async function getAllRoadworks (url) {
  let res = await axios.get(url)
  const result = res.data
  return result
}