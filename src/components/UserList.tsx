import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useAction'

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user)
  const {getUsers} = useActions()

  useEffect(() => {
    getUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error {error}</h1>
  }

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id} >{user.name}</div>
      })}
    </div>
  );
};

export default UserList;
