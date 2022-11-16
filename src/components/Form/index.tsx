import { Component } from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends Component {
    render() {
        return (
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input
                        type="text"
                        id="task"
                        name="task"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        id="time"
                        name="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        );
    }
}

export default Form;