import logo from "./logo.png"

export default function Header({setShowForm}) {
    return (
    <>
    {/* //logo img */}
    <header>
      <div className='logo'>
        <img src={logo}/>
        <h1>Fun facts</h1>
      </div>
      <button onClick={() => setShowForm((show) => !show)}>Post a fact</button>
    </header></>)
}