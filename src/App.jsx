import { Form } from './components/Form/Form';
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass } from './class-components/Count';
import { Count as Count } from './components/Count';
import { Child } from './components/Child';
import { Message } from './components/Message/Message';
import { useState } from 'react';

import './index.css'

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)
  const arr = ['ivanov', 'petrov', 'sidorov']

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <h2 style={{ backgroundColor: 'green' }}>Class components</h2>
      <CountClass count={10} />
      <hr />
      <FormClass />
      <hr />
      <h2>Fuction components</h2>
      <Count />
      <hr />
      <h3>Parent component</h3>
      <p>{count}</p>
      <input onChange={handleChangeName} />
      <h3>Child component</h3>
      <Child name={name} handleChangeCount={setCount} />
      {arr.map((item, idx) => <div key={idx}>{item}</div>)}
      <Form />
      <hr />
      <Message title={'Домашнее задание №1'} />
    </div>
  );
}

