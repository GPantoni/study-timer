import style from './List.module.scss';

export default function List() {
  const tarefas = [
    { tarefa: 'React', tempo: '01:30:00' },
    { tarefa: 'JavaScript', tempo: '01:00:00' },
    { tarefa: 'TypeScript', tempo: '02:00:00' },
  ];

  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.tarefa}</h3>
            <p>{item.tempo}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
