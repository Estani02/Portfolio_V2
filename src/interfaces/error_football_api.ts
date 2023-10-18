export interface RootErrorFootball {
  get: string
  parameters: Parameters
  errors: Errors
  results: number
  paging: Paging
  response: any[]
}

export interface Parameters {
  team: string
  next: string
  timezone: string
}

export interface Errors {
  token: string
}

export interface Paging {
  current: number
  total: number
}
