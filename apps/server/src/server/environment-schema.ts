import * as Joi from 'joi'
import { EnvironmentVars } from '@/types/environment-vars'

export default Joi.object<EnvironmentVars>({
  HOST: Joi.string().default('localhost'),
  PORT: Joi.number().port().default(4000),
  // # Database authentication
  DATABASE_NAME: Joi.string().optional().min(0),
  DATABASE_PORT: Joi.number().port().default(3306),
  DATABASE_USERNAME: Joi.string().optional().min(0),
  DATABASE_PASSWORD: Joi.string().optional().min(0),
  DATABASE_HOST: Joi.string().optional().min(0).default('localhost'),
  EMAIL_HOST: Joi.string().optional().min(0),
  EMAIL_USERNAME: Joi.string().optional().min(0),
  EMAIL_PASSWORD: Joi.string().optional().min(0),
})
