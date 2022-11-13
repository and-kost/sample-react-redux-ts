import {Dispatch} from 'redux'
import axios from 'axios'
import {TodoAction, TodoActionTypes} from '../../types/todo'

export const getTodos = (page = 1, limit = 10 ) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.GET_TODOS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })
      dispatch({type: TodoActionTypes.GET_TODOS_SUCCESS, payload: response.data})
    } catch (e) {
      dispatch({
        type: TodoActionTypes.GET_TODOS_ERROR,
        payload: 'Error'
      })
    }
  }
}

export const setTodosPage = (page: number): TodoAction => {
  return {type: TodoActionTypes.SET_TODOS_PAGE, payload: page}
}
