import React from "react"
import { useState } from "react"


export default function Form ({posts, setPosts, showForm}) {
    const [text, setText] = useState("")

    function post(e) {
        e.preventDefault()
    
        const newPost = {
        id: Math.random(),
        text: text,
        likes:  0
        }
        
        setPosts((post) => [newPost, ...posts])
    
        setText("")
      }
    
      //hide form
      
      

    return (
        <> { showForm ? (
        <form onSubmit={(e) => post(e)}>
          <input 
          placeholder="type your fun fact"
          value={text}
          onChange={(e) => setText(e.target.value)}></input>
          <button>Post</button>
        </form>
        )
        : (
            " "
        )
    }
    </>
    )
}