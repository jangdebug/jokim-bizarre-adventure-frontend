export interface userDataType {
  accessToken: string
  name: string
  uuid: string
  email: string
}

export interface commonResType<T> {
  HttpStatus: string
  code: number
  message: string
  data?: T
}
