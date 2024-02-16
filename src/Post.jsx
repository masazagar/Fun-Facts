



export default function Post ({posts}) {
    
    
    
    return (
        <>
        <main>
      <ul>
      <li>
          {
            posts.map((fact) => {
             return ( <div className="singular-post" key={fact.id}>
              <p>{fact.text}</p>
              <button >👍{fact.likes}</button>
              </div>
              )
            })
          }
        </li>
      </ul>
    </main></>
    )
}