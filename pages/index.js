import React, { useState, useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Form from '../components/form/Form';

import { getTodos, updateTodo } from '../api';
// import { futimesSync } from 'fs';

function Home(props) {
  const { initTodos } = props;

  /* Hook-ar */
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);
  const [hideCompleted, setHideCompleted] = useState(false);

  async function onToggleHidden() {
    setLoading(true);
    /*  */
    const todos = await getTodos(hideCompleted);
    setItems(todos);
    setHideCompleted(!hideCompleted);
    setLoading(false);
  }

  return (
    <Layout title="Verkefni">
      <Todos
        initTodos = {initTodos}
        loading = {loading}>

      </Todos>
      <Form>

      </Form>
    </Layout>
  );
}

Home.getInitialProps = async({ req }) => {
  const todos = await getTodos();
  console.log(todos);
  /* Fer eftir hvernis bakendinn skilar gognum, hvernig vid kollum a thau */
  return { initTodos: todos.result }
}

export default Home
