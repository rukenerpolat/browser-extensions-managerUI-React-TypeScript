import { Header, Main } from "./app-layout"
import AppHeader from "./components/app-header"
import ButtonGroup from "./components/button-group"
import ExtensionsCards from "./components/extensions-cards"
import ExtensionsCard from "./components/extensions-card"
import ExtensionsHeader from "./components/extensions-header"
import H1 from "./components/h-1"
import {data} from "./lib/data"
import { useMemo, useState } from "react"
import type { ButtonFilters, Extension } from "./lib/types"

function App() {
  const [extensions, setExtensions] = useState<Extension[]>(data)
  const [activeFilter, setActiveFilter] = useState<ButtonFilters>("all")

  const filteredExtension = useMemo(() => {
    switch (activeFilter) {
      case "active":
        return extensions.filter((extensions) => extensions.isActive)
      case "inactive":
        return extensions.filter((extensions) => !extensions.isActive)
      default:
        return extensions
    }
  }, [extensions, activeFilter])

  function handleFilterChange(filter: ButtonFilters) {
    setActiveFilter(filter)
  }

  function handleDeleteExtension(idToDelete: Extension["id"]) {
    setExtensions((prevExtensions) => 
      prevExtensions.filter((extension) => extension.id !== idToDelete)
    )
  }

  function handleToggleExtension(idToToggle: Extension["id"]) {
    setExtensions((prevExtensions) => 
      prevExtensions.map((extension) =>
        extension.id === idToToggle
          ? {...extension, isActive: !extension.isActive} : extension
      )
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
          <ButtonGroup 
            onFilterChange = {handleFilterChange}
            activeFilter = {activeFilter}
          />
        </ExtensionsHeader>

        <ExtensionsCards>
          <ExtensionsCard
            extensions = {filteredExtension}
            onDeleteExtension = {handleDeleteExtension}
            onToggleExtencion = {handleToggleExtension}
          />
        </ExtensionsCards>
      </Main>
    </>
  )
}

export default App