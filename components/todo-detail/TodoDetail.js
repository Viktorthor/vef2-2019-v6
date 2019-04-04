import React, { useState } from 'react';

// Stakt verkefni á /:id
export default function todoDetail(props) {
const {id, todo} = props;
  return (
    <div>
      <h2>${id}</h2>
      <p>Prump</p>
      </div>
  );
}
