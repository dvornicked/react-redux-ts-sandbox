import { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const UserList = () => {
  const { users, error, loading } = useTypedSelector(state => state.user)
  const { fetchUsers } = useAction()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) return <h1>Идет загрузка...</h1>
  if (error) return <h1>Идет загрузка...</h1>
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
