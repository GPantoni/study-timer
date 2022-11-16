import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({ selectTask, ...props }: Props) {
  return (
    <li
      className={`${style.item} ${props.selected ? style.selectedItem : ''}`}
      onClick={() => selectTask({ ...props })}
    >
      <h3>{props.task}</h3>
      <p>{props.time}</p>
    </li>
  );
}
