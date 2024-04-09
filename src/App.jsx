import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const url = "https://jsonplaceholder.typicode.com/users"
  const [data, setData] = useState([])
  const fetchInfo = () => {
    fetch(url).
      then(res => res.json()).
      then(d => setData(d))
  }

  useEffect(() => {
    fetchInfo()
    console.log(data)
  }, [setData])

  return (
    <>
      <h1 style={{ color: 'green' }}>JavaScript inbuilt fetch</h1>
      <center>
        {
          data.map((dataObj, index) => (
            <div key={index} style={{ width: "15em", background: "#35D841", padding: 2, borderRadius: 10, marginBlock: 10 }}>
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.id}</p>
            </div>
          ))
        }
      </center>
    </>
  )
}

export default App
