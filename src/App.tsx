import Header from "./components/header"
import ThemeProvider from "./theme"

function App() {

  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default App
