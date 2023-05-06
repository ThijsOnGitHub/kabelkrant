import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/global.scss'
import {Kabelkrant} from "./pages/Kabelkrant";
import {Scaler} from "./component/slideUtilities/scaler";
import {FitToScreen} from "./component/slideUtilities/fitToScreen";

function App() {
  const [count, setCount] = useState(0)

  return (
      <FitToScreen baseWidth={1920} baseHeight={1080}>
        <Kabelkrant />
      </FitToScreen>
  )
}

export default App
