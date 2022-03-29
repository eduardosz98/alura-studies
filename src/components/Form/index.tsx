import React, { useState } from "react";
import { ITask } from "../../types/task";
import MyButton from '../Button/';
// import { Button } from 'antd';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function FormExample({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");
    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setTask("");
        setTime("00:00");
    }
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um curso</label>
                <input value={task} onChange={event => setTask(event.target.value)}
                    type="text" name="task" id="task" placeholder="O que você quer estudar?" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input value={time} onChange={event => setTime(event.target.value)}
                    type="time" name="time" id="time" step={1} min="00:00:00" max="01:30:00" required />
            </div>
            <MyButton type="submit">
                Adicionar
            </MyButton>
        </form>
    )
}

export default FormExample