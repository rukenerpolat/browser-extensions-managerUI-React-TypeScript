export default function ExtensionsHeader({
    children,
}: {
    children : React.ReactNode
}) {
  return (
    <header>
        <div className="container flex items-center justify-between mb-8"> {children}</div>
    </header>
  )
}
