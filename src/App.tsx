import { Header } from "./components/header/Header"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Tasks } from "./pages/todo/Tasks"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Tasks/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
