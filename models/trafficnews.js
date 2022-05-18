const axios = require('axios')
const convert = require('xml-js')

//to clean up the conversion and remove the "_text"
//refer to https://github.com/nashwaan/xml-js/issues/53 if needed

function nativeType(value) {
  var nValue = Number(value);
    if (!isNaN(nValue)) {
      return nValue;
    }
    var bValue = value.toLowerCase();
    if (bValue === 'true') {
      return true;
    } else if (bValue === 'false') {
      return false;
    }
    return value;
  }

var removeJsonTextAttribute = function(value, parentElement) {
    try {
      var keyNo = Object.keys(parentElement._parent).length;
      var keyName = Object.keys(parentElement._parent)[keyNo - 1];
      parentElement._parent[keyName] = nativeType(value);
    } catch (e) {}
  }

var options = {
    compact: true,
    trim: true,
    ignoreDeclaration: true,
    ignoreInstruction: true,
    ignoreAttributes: true,
    ignoreComment: true,
    ignoreCdata: true,
    ignoreDoctype: true,
    textFn: removeJsonTextAttribute
  }

exports.getAllNews = async function getAllNews(url) {
  let res = await axios.get(url)
  const result = convert.xml2json(res.data, options)
  return result
}