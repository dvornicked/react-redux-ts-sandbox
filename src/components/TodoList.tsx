import { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const TodoList = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    state => state.todo
  )
  const pages = [1, 2, 3, 4, 5]
  const { fetchTodo, setTodoPage } = useAction()
  useEffect(() => {
    fetchTodo(page)
  }, [page])
  if (loading) return <h1>Идет загрузка...</h1>
  if (error) return <h1>Идет загрузка...</h1>
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}

      <div style={{ marginTop: 20 }}>
        {pages.map(p => (
          <span
            key={p}
            style={{
              border: p === page ? '2px solid black' : '1px solid gray',
              padding: 10,
            }}
            onClick={() => setTodoPage(p)}>
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}
