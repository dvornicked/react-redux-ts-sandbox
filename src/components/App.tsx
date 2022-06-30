import { TodoList } from './TodoList'
import { UserList } from './UserList'

export const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}
