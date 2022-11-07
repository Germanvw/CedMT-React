export interface IAuthSliceState {
  user: null,
  error: null | string,
  loading: boolean,
  refreshing: boolean
}

export interface IUiSliceState {
  modal: null | string,
  error: null | string,
}