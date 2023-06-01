import { Header } from "./components/header/Header"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Tasks } from "./components/todo/Tasks"
import { ToDoType } from "./interface/todo.interface"
const listaTodo : ToDoType[] = [

]

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Tasks listaToDos={listaTodo}></Tasks>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
