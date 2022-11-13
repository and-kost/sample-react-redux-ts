export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  GET_USERS = 'GET_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_ERROR = 'GET_USERS_ERROR'
}

interface GetUsersAction {
  type: UserActionTypes.GET_USERS;
}

interface GetUsersSuccessAction {
  type: UserActionTypes.GET_USERS_SUCCESS;
  payload: any[]
}

interface GetUsersErrorAction {
  type: UserActionTypes.GET_USERS_ERROR;
  payload: string
}

export type UserAction = GetUsersAction | GetUsersSuccessAction | GetUsersErrorAction
