import Header from "./header"
import Meta from "./meta"

const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <Header />
    <main>
        {children}
    </main>
    </>
  )
}

export default Layout