import { ExampleDto } from '@repo/dtos'
import { initContract } from '@ts-rest/core'

const c = initContract()

export const contract = c.router({
  exampleAction: {
    method: 'POST',
    path: '/example',
    responses: {
      201: c.type<{ message: string }>(),
    },
    body: c.type<ExampleDto>(),
    summary: 'Create a post',
  },
})
