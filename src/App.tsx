import style from './styles/App.module.scss'
import Form from "./components/Form"
import List from "./components/List"

function App() {

  return (
    <div className={style.App}>
      <Form />
      <List />
    </div>
  )
}

export default App