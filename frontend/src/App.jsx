import {useState} from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState()
  const [author, setAuthor] = useState()

  const httpRequestImage = async () => {
    const req = await fetch("http://localhost:8082/img")
    const res = await req.json()
    setUrl(res.results.urlImg)
    setAuthor(res.results.author)
  }

  return (
    <div className="container">
      {
        url && (
          <>
            <img src={url} alt="dog" />
            <span>Author: {author.name}</span>
            {author.instagram && <a target='_blank' href={`https://www.instagram.com/${author.instagram}/`}>Instagram: @{author.instagram}</a>}
          </>
        )
      }
      <button onClick={httpRequestImage}>Gerar</button>
    </div>
  )
}

export default App
