module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/incident",
  "title": "Incident",
  "description": "Traffic Incident",
  "type": "object",
  "properties": {
    "_id": {
      "description": "Unique object ID assigned by MongoDB",
      "type": "string"
    },
    "type": {
      "description": "Type of incident",
      "type": "string"
    },
    "latitude": {
      "description": "Latitude of the incident",
      "type": "number"
    },
    "longitude": {
      "description": "Longitude of the incident",
      "type": "number"
    },
    "description": {
      "description": "Incident description",
      "type": "string"
    },
    "dateReported": {
      "description": "Date and time of the incident reported",
      "type": "string"
    },
    "userReported": {
      "description": "The unique user ID of who reported the incident",
      "type": "string"
    },
    "upvote": {
      "description": "An array of unique user ID of who upvoted the incident",
      "type": "array"
    },
    "downvote": {
      "description": "An array of unique user ID of who downvoted the incident",
      "type": "array"
    },
  },
  "required": ["type", "latitude", "longitude", "dateReported", "userReported"]
}
