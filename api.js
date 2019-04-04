import 'isomorphic-fetch';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  /* todo */
}

// ATH THARF EKKI AD GERA THEGAR THAD ER GET REQUEST
export async function addTodo(title, due) {
  /* todo */
  const options = {
    body: JSON.stringify({
      title,
      due,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  const url = new URL('/', apiUrl);
  const response = await fetch(url.href, options);

  /*
  const url = new URL('/${id}', apiUrl);
  const response = await fetch(url.href, options);
  svona haegt ad fetch-a. tharf ekki endilega options, ef td saekja einn id gaeja.
  */

  /*...*/

}

export async function updateTodo(id, { title, completed, due } = {}) {
  /* todo */
}

export async function getTodos(hideCompleted = undefined) {
  /* todo */
  const completed = hideCompleted ? false : true;

  const url = new URL('/?completed=${completed}', apiUrl);
  const response = await fetch(url.href);
  const result = await response.json();

  return {
    success: response.ok,
    result
  }
}

export async function getTodo(id) {
  console.log(id);
  //console.log(apiUrl);
  const url = new URL(apiUrl);
  const response = await fetch(url.href);
  const result = await response.json();

  return {
    success: response.ok,
    result
  }
}
