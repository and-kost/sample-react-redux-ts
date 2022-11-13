import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useAction'

const TodoList: React.FC = () => {
  const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
  const {getTodos, setTodosPage} = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    getTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error {error}</h1>
  }

  return (
    <div>
      {
        todos.map((todo) => {
          return <div key={todo.id}>{todo.id} - {todo.title}</div>
         })
      }
      <div style={{display: 'flex'}}>
        {
          pages.map((pageItem) => {
            return <div
              onClick={() => setTodosPage(pageItem)}
              style={{border:pageItem === page ? '2px solid green' : '1px solid grey', padding: 10}}
            >
              {pageItem}
            </div>
          })
        }
      </div>

    </div>
  );
};

export default TodoList;
