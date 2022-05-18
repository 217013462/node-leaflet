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
    "firstname": {
      "description": "User's first name",
      "type": "string"
    },
    "lastname": {
      "description": "User's last name",
      "type": "string"
    },
    "email":{
      "description": "User's e-mail address",
      "type": "string"
    },    
    "role":{
      "description": "either public user or admin user with edit rights",
      "type": "string"
    },    
    "location": {
      "description": "Which centre is the user belongs to?",
      "type": "string"
    },
  },
  "required": ["username", "password", "email"]
}
