import { DeleteByIdServiceReturnType } from './crud-service-return-interfaces'
import { UpdateByIdServiceReturnType } from './crud-service-return-interfaces'
import {
  CreateServiceReturnType,
  FindByIdServiceReturnType,
} from './crud-service-return-interfaces'

export interface ResponseBaseTemplate {
  message?: string
}

export interface FindResponse<T extends object> extends ResponseBaseTemplate {
  data: T[]
}

export interface FindByIdResponse<T extends object> extends ResponseBaseTemplate {
  data: NonNullable<FindByIdServiceReturnType<T>>
}

export interface CreateResponse<T extends object>
  extends ResponseBaseTemplate,
    CreateServiceReturnType<T> {}

export interface UpdateByIdResponse<T extends object>
  extends ResponseBaseTemplate,
    UpdateByIdServiceReturnType<T> {}

export interface DeleteByIdResponse<T extends object>
  extends ResponseBaseTemplate,
    DeleteByIdServiceReturnType<T> {}
