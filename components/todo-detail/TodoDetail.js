import React, { useState, useEffect } from 'react';
import Form from '../form/form';
import Field from '../field/Field';
import Button from '../button/Button';
import { deleteTodo } from '../../api.js';

// Stakt verkefni á /:id
export default function todoDetail(props) {
  const {todo} = props;

  const [data, setData] = useState({ title: '', date: undefined });

  function onChangeTitle(e) {
    setData({
      ...data,
      title: e.target.value,
    });
  }

  function onChangeDue(e) {
    let due = e.target.value
    if(due.length === 0) {
      due = null;
    }
    setData({
      ...data,
      due: e.target.value,
    });
  }

  async function onDelete(e) {
    e.preventDefault();
    const toDelete = await deleteTodo(todo.id);
  }

  return (
    <React.Fragment>
      <div>
      <Field
        title = "Titill:"
        value={todo.title}
        onChange={onChangeTitle}
        />
      </div>
      <div>
        <p>Lokið:</p>
        <input type="checkbox" title = "Lokið:" value = {todo.completed} />
      </div>
      <div>
        <Field
          title = "Klárast fyrir:"
          value={todo.due}
          onChange={onChangeDue}
          />

        <Button children="Uppfæra" onclick = {onChangeDue}/>
        <Button children = "Eyða" onclick = {onDelete}/>
      </div>
    </React.Fragment>
  );
}
