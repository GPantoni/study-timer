export default function List() {
    const tarefas = [{ tarefa: 'React', tempo: '01:30:00' }, { tarefa: 'JavaScript', tempo: '01:00:00' }]

    return (
        <div>
            {tarefas.map((item, index) => (
                <div key={index}>
                    <h3>{item.tarefa}</h3>
                    <p>{item.tempo}</p>
                </div>
            ))}
        </div>
    )
}