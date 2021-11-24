import { HttpResponse, HttpResponseError } from './types/http'

export const responseError = (error: any): HttpResponseError => ({
  statusCode: error.statusCode,
  name: error.error,
  message: error.message
})


export const unauthorized = (): HttpResponseError => ({
  statusCode: 401,
  name: 'Unauthorized',
  message: 'Unauthorized!'
}) 

export const forbidden = (): HttpResponseError => ({
  statusCode: 403,
  name: 'Forbidden',
  message: 'Access Denied Level!'
}) 

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})








