import { useEffect, useState } from 'react'
import { TopBar } from './components/topBar'
import { Sidebar } from './components/sidebar/sidebar'
import { ProgramForm } from './components/editpage/programForm'
import { ProgrammaFormSchema } from './type/programFormName'

function App() {
  const [programs, setPrograms] = useState<ProgrammaFormSchema[]>([])
  const [firstRender, setFirstRender] = useState(true)

  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)
  
  const selectedItem = selectedIndex == undefined ? undefined : programs[selectedIndex]

  function readPrograms() {
    window.electronApi.getPrograms().then((data) => {
      var newData = JSON.parse(data)
      if(newData != null && Array.isArray(newData)) {
        setPrograms(newData)
      }
    })
  }

  function deleteItem(index: number) {
    const newPrograms = [...programs]
    newPrograms.splice(index, 1)
    setPrograms(newPrograms)
  }

  useEffect(() => {
    if(firstRender) {
      setFirstRender(false)
      try{
        readPrograms()
      } catch(e) {
        console.log(e)
      }
      
      return
    }
    console.log('saving')
    window.electronApi.savePrograms(JSON.stringify(programs))
  }, [programs])

  return (
    <div>   
      <TopBar/>
      <div className='flex gap-5 '>
        <Sidebar items={programs} onAddBlock={()=> {
          setPrograms([...programs, {
            path: '',
            programName: 'nieuw programma',
            planning: []
          }])
        }} onDeleteItem={(_,index) => deleteItem(index) } selectedItem={selectedIndex} setSelectedItem={(index) => {
          setSelectedIndex(index)
        }} />
        <div className='mt-5 flex-1 bg-white px-5 py-2 rounded-md'>
          {
            selectedItem == null ? 
            <div className='text-center text-gray-500 h-full flex flex-col justify-center'>Geen programma geselecteerd</div> :
            <ProgramForm key={selectedItem.programName} value={selectedItem} onSubmit={(data) => {
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
