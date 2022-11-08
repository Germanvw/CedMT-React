export interface IMethodResponse {
  method: any | null
  operation: any | null
}

export interface IDropdownResponse {
  id: string
  descr: string
}
export interface IErrorResponse {
  code: any | null
  code_backend: any | null
  code_internal: any | null
  data: any | null
  description: any | null
  detail: any | null
  error_type: any | null
  lang: any | null
  message: string | null
  method_uri_path: any
  status_code: any
  title: any
  trace: any
}