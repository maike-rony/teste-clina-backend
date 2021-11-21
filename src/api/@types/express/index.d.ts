declare namespace Express {
  interface Request {
    auth: {
      uuid_user: string
      name: string
      email: string
    }
  }
}
