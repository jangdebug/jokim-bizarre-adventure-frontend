export interface userDataType {
  accessToken: string
  refreshToken: string
}

export interface commonResType<T> {
  HttpStatus: string
  code: number
  message: string
  data?: T
}
