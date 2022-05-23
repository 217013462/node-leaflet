const {Validator, ValidationError} = require('jsonschema')
const userSchema = require('../schemas/user.schema.js')
const incidentSchema = require('../schemas/incident.schema.js')

const v = new Validator()

exports.validateUser = async (ctx, next) => {
  const validationOptions = {
    throwError: true,
    allowUnknownAttributes: false
  }
    const body = ctx.request.body;
  try {
    v.validate(body, userSchema, validationOptions)
      await next()
  } catch (error) {
    if (error instanceof ValidationError) {
      ctx.body = error
        ctx.status = 400
    } else {
      throw error
    }
  }
}

exports.validateIncident = async (ctx, next) => {
  const validationOptions = {
    throwError: true,
    allowUnknownAttributes: false
  }
    const body = ctx.request.body;
  try {
    v.validate(body, incidentSchema, validationOptions)
      await next()
  } catch (error) {
    if (error instanceof ValidationError) {
      ctx.body = error
        ctx.status = 400
    } else {
      throw error
    }
  }
}