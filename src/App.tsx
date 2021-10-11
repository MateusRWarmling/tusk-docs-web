import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Assets/styles/theme'
import './App.css'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}

export default App
