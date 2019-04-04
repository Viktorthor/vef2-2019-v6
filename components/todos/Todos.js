import React from 'react';

import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';
import Form from '../form/Form';

import './Todos.css';

// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const { initTodos, id } = props;

  return (
    <React.Fragment>
      <Button children="Fela búið"/>

      <div className="todos">
      {initTodos.map((item, i) => (
              <TodoItem key={i} todo={item} id={initTodos[i].id} />
      ))}
      </div>

    </React.Fragment>
  );
}
