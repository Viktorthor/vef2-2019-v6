import React, { useState, useEffect } from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import TodoDetail from '../components/todo-detail/TodoDetail';

import { getTodo } from '../api';

function Home(props) {
  const {todo, id} = props;
  return (
    <Layout>
      <TodoDetail
      id = {id}
      getTodo = {getTodo}>
      <h1>Hallo</h1>
      </TodoDetail>
    </Layout>
  );
}

Home.getInitialProps = async({ query }) => {
  const { id } = query;

  const todo = await getTodo(id);
  return { id ,initTodo: todo.result }
}

export default Home
