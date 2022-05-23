module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/user",
  "title": "User",
  "description": "User Details",
  "type": "object",
  "properties": {
    "_id": {
    "description": "Unique object ID assigned by MongoDB",
    "type": "string"
    },
    "username": {
      "description": "User's login name",
      "type": "string"
    },
    "password":{
      "description": "Password of login",
      "type": "string"
    },
    "email":{
      "description": "User's e-mail address",
      "type": "string"
    },    
    "role":{
      "description": "either public user or admin user with edit rights",
      "type": "string",
      "default": "user"
    },
    "incidentReported": {
      "description": "An array of all the incidents that reported by this user",
      "type": "array"
    },
    "upvoteIncident": {
      "description": "An array of unique incident ID that the user upvoted",
      "type": "array"
    },
    "downvoteIncident": {
      "description": "An array of unique incident ID that the user downvoted",
      "type": "array"
    },
  },
  "required": ["username", "password", "email"]
}
