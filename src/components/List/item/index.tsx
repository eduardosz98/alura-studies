import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item({ task, time, selected, completed, id, selectTask }: Props) {

    return (
        <li key={id}
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
            onClick={() => !completed && selectTask({
                task, time, selected, completed, id
            })}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="completed task"></span>}
        </li>
    )
}