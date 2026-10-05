import { Button } from "./components/Button/Button"
import { CustomInput } from "./components/CustomInput/CustomInput"

export const App = () => {
  return (
    <div> 
      <h1>Hello React</h1>
      <a href="/">Hello World</a>
      <div> 
        <Button/>
      </div>
      <div className="main-btn">BLOCK</div>
      <CustomInput />
      </div>
  )
}