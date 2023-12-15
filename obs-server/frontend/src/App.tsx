import { useState } from 'react'
import { TopBar } from './components/topBar'
import { Sidebar } from './components/sidebar/sidebar'
import { ProgramForm } from './components/editpage/programForm'
import { ProgrammaFormSchema } from './type/programFormName'

function App() {
  const [programs, setPrograms] = useState<ProgrammaFormSchema[]>([{
    folder: '',
    programName: 'Super programma',
    planning: []
  }])

  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)
  
  const selectedItem = selectedIndex == undefined ? undefined : programs[selectedIndex]

  return (
    <div>
      <TopBar/>
      <div className='flex gap-5 '>
        <Sidebar items={programs} onAddBlock={()=> {
          setPrograms([...programs, {
            folder: '',
            programName: 'nieuw programma',
            planning: []
          }])
        }} selectedItem={selectedIndex} setSelectedItem={(index) => {
          setSelectedIndex(index)
        }} />
        <div className='mt-5 flex-1 bg-white px-5 py-2 rounded-md'>
          {
            selectedItem == null ? 
            <div className='text-center text-gray-500 h-full flex flex-col justify-center'>Geen programma geselecteerd</div> :
            <ProgramForm value={selectedItem} onSubmit={(data) => {
              const newPrograms = [...programs]
              newPrograms[selectedIndex!] = data
              setPrograms(newPrograms)
            }}/>
          }
        </div>
      </div>
    </div>
  )
}

export default App
