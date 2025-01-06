import { DeleteByIdServiceResult } from './crud-service-results'
import { UpdateByIdServiceResult } from './crud-service-results'
import { CreateServiceResult, FindByIdServiceResult } from './crud-service-results'

export interface ResponseBase {
  message?: string
}

export interface FindResponse<T extends object> extends ResponseBase {
  data: T[]
}

export interface FindByIdResponse<T extends object> extends ResponseBase {
  data: NonNullable<FindByIdServiceResult<T>>
}

export interface CreateResponse<T extends object> extends ResponseBase, CreateServiceResult<T> {}

export interface UpdateByIdResponse<T extends object>
  extends ResponseBase,
    UpdateByIdServiceResult<T> {}

export interface DeleteByIdResponse<T extends object>
  extends ResponseBase,
    DeleteByIdServiceResult<T> {}
