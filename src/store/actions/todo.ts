import axios from 'axios'
import { Dispatch } from 'react'
import { TodoAction, TodoActionTypes } from '../../types/todo'

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}

export const fetchTodo =
  (page = 1, limit = 10) =>
  async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        { params: { _page: page, _limit: limit } }
      )
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      })
    } catch {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке списка задач',
      })
    }
  }
