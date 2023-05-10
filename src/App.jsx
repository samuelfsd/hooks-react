import './App.css'


// useState()
// useEffect()
// useContext()
// useMemo()
// useCallback()
const Header = () => {
  return (
    <header><h1>hooks header</h1></header>
  )
}

const Menu = () => {
  return (
    <nav>Menu</nav>
  )
}

const Sidebar = () => {
  return (
    <aside>Sidebar</aside>
  )
}

const Content = () => {
  return (
    <main>Content</main>
  )
}

const Footer = () => {
  return (
    <footer>footer</footer>
  )
}


function App() {

  return (
    <>
      <Header />
      <Menu />
      <Sidebar />
      <Content />
      <Footer />  
    </>
  )
}

export default App
