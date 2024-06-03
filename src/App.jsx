
import './App.css'
import Button from './component/button'
import Wrapper from './component/wrapper/Wrapper.jsx'



function App() {
  return (
    <>
    <Wrapper >
      <div className='text'>
        
    <Button type="delete" className="delete"/> 
    <Button type="play" className="play"/> 
    <Button type="setting" className="setting"/> 
    <Button type="home" className="home"/> 
    <Button type="upload" className="upload"/> 
    <Button type="cancel" className="cancel"/> 
    <Button type="submit" className="submit"/> 
    <Button type="icon" className="icon"/> 
    <Button type="download" className="download"/> 
    <Button type="search" className="search"/> 
    
    </div>
    </Wrapper>
    </>
  )
}

export default App
