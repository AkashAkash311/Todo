import { useState } from "react";
import "./App.css";

function App() {

  const [task, Settask] = useState("");
  const [list, Setlist] = useState([]);

  function addTask(){
    if(task === ""){
      alert("Please enter a task")
    }else{
      Setlist((list) =>{
        const updatedlist = [...list, task]
        // console.log(updatedlist)
        Settask('');
        return updatedlist
      })
    }
  }

  const RemoveTask = (i) =>{
    const updatedlistdata = list.filter((data,id)=>{
      return i != id;

    });
    Setlist(updatedlistdata);
    console.log(i);
  }

  return (
    <div className=" bg-slate-600 h-screen flex flex-col items-center">
      <h6 className=" text-white text-5xl font-semibold mt-10"> TODO </h6>
      <div>
      <input className="mt-10 w-80 h-8 border-sm" placeholder="Add task" value={task} onChange={(input)=>Settask(input.target.value)} />
      <button className="h-8 text-white bg-green-800 font-medium w-32" onClick={addTask}>Add item</button>

      <h1 className=" text-white text-3xl font-semibold mt-10"> Task to be DONE {":)"}</h1>

      {list!=[] && list.map((data, i)=>{
        return(
          <div className="flex" key={i}>
            <p key={i}>
              <span className="text-white text-2xl mt-6">{i+1}.   {data}</span>
            <button className="h-8 text-white bg-green-800 font-medium w-32 mt-6 ml-4" onClick={() => RemoveTask(i)}>Remove item</button>
            </p>
          </div>
        )
      })}
      
      </div>
    </div>
  );
}

export default App;
