import { useState } from 'react'
import './App.css'


// useState()
// useEffect()
// useContext()
// useMemo()
// useCallback()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hooks React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
