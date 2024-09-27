interface userDataType {
  accessToken: string
  refreshToken: string
}

interface commonResType<T> {
  httpStatus: string
  isSuccess: boolean
  code: number
  message: string
  result?: T
}
