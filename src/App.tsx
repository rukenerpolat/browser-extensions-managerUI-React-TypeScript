import { Header, Main } from "./app-layout"
import AppHeader from "./components/app-header"
import ButtonGroup from "./components/button-group"
import ExtensionsHeader from "./components/extensions-header"
import H1 from "./components/h-1"

function App() {
  return (
    <>
      <Header>
        <AppHeader/>
      </Header>
      <Main>
        <ExtensionsHeader>
          <H1/>
          <ButtonGroup/>
        </ExtensionsHeader>
      </Main>
    </>
  )
}

export default App