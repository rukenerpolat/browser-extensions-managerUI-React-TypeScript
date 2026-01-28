import { Header, Main } from "./app-layout"
import AppHeader from "./components/app-header"
import ButtonGroup from "./components/button-group"
import ExtensionsCards from "./components/extensions-cards"
import ExtensionsCard from "./components/extensions-card"
import ExtensionsHeader from "./components/extensions-header"
import H1 from "./components/h-1"
import {data} from "./lib/data"
import { useState } from "react"
import type { Extension } from "./lib/types"

function App() {

  const [extensions, setExtensions] = useState<Extension[]>(data)

  function handleDeleteExtension(idToDelete: Extension["id"]) {
    setExtensions((prevExtensions) => 
      prevExtensions.filter((extension) => extension.id !== idToDelete)
    )
  }

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

        <ExtensionsCards>
          <ExtensionsCard
            onDeleteExtension= {handleDeleteExtension} 
            extensions={extensions}
          />
        </ExtensionsCards>
      </Main>
    </>
  )
}

export default App