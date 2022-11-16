import React, { Component } from 'react';
import { ITask } from '../../types/task';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuid } from 'uuid';

class Form extends Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: '',
    time: '00:00:00',
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuid() },
    ]);
    this.setState({ task: '', time: '00:00:00' });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='task'>Adicione um novo estudo</label>
          <input
            type='text'
            id='task'
            name='task'
            placeholder='O que você quer estudar?'
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='time'>Tempo</label>
          <input
            type='time'
            step='1'
            id='time'
            name='time'
            min='00:00:00'
            max='01:30:00'
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            required
          />
        </div>
        <Button type='submit'>Adicionar</Button>
      </form>
    );
  }
}

export default Form;
