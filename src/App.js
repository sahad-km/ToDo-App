import React, {useState} from 'react';
import './App.css';

function App() {
  const [toDos,setToDos] = useState([])
   const [toDo,setToDo] = useState('')
   const d = new Date();
   let day = d.getDay();
   let toDay;
   if (day === 0) toDay = "Sunday";
  else if (day === 1) toDay = "Monday";
  else if (day === 2) toDay = "Tuesday";
  else if (day === 3) toDay = "Wednesday";
  else if (day === 4) toDay = "Thursday";
  else if (day === 5) toDay = "Friday";
  else if (day === 6) toDay = "Saturday";

  const removeTask = (index) => {
    const newToDos = [...toDos]
    newToDos.splice(index,1)
    setToDos(newToDos);
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {toDay}... 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        { (toDo !== "") && <i onClick={()=>setToDos([...toDos,{id:Date.now(), text: toDo, status:false, strike:false}],setToDo(""))} className="fas fa-plus"></i> }
        
      </div>
      <div className="todos">
        { toDos.map((obj,index)=>{
          return (
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  // obj2.status=e.target.checked
                  obj2.strike=(!obj.strike)
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p style={{textDecoration: obj.strike ? 'line-through' : 'none'}} >{obj.text}</p>
          </div>
          <div className="right">
          <i onClick={()=>{removeTask(index)}} className="fas fa-times"></i>
          </div>
        </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default App;
