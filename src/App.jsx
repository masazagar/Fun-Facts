import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import Form from "./Form.jsx"
import Post from "./Post.jsx"


const data = [
  {
      id:1,
      text: "A cloud weighs around a million tonnes. A cloud typically has a volume of around 1km3 and a density of around 1.003kg per m3 – that's a density that’s around 0.4 per cent lower than the air surrounding it",
      likes: 23
  },
  {
      id:2,
      text: "Giraffes are 30 times more likely to get hit by lightning than people. True, there are only five well-documented fatal lightning strikes on giraffes between 1996 and 2010. But due to the population of the species being just 140,000 during this time, it makes for about 0.003 lightning deaths per thousand giraffes each year. This is 30 times the equivalent fatality rate for humans.",
      likes: 19
  },
  {
      id:3,
      text: "Identical twins don’t have the same fingerprints. You can’t blame your crimes on your twin, after all. This is because environmental factors during development in the womb (umbilical cord length, position in the womb, and the rate of finger growth) impact your fingerprint.",
      likes: 14
  },
  {
      id:4,
      text: "Your brain is constantly eating itself. This process is called phagocytosis, where cells envelop and consume smaller cells or molecules to remove them from the system. Don’t worry! Phagocytosis isn't harmful, but actually helps preserve your grey matter.",
      likes: 50
  }


]

function App() {
 
  const [posts, setPosts] = useState(data)
  const [showForm, setShowForm] = useState(false)
  return (
    <>
    <Header setShowForm={setShowForm}/>
    <Form posts={posts} setPosts={setPosts} showForm={showForm} setShowForm={setShowForm}/>
    <Post posts={posts}/>
    </>
  )
}

export default App
