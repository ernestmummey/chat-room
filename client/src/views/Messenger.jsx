import {useState,useEffect} from 'react';
import io from 'socket.io-client';


const Messenger = props => {
    const {id} = props
    // const [name,setName] = useState("")
    const [socket] = useState(() => io(':8000'));
    const [input,setInput] = useState("");
    const [messages,setMessages] = useState([]);

    useEffect(() => {
        socket.on("Welcome", data => console.log(data));

        socket.on("updatingMessages",data => setMessages(data));
        return () => socket.disconnect(true);
    },[socket]);

    const sendToServer = () => {
        socket.emit("addToChat",`${id} says: ${input}`);
        setInput("");
    }

    return(
        <>
        <h3>Welcome {id}!</h3>
            <div className="form-group">
            <label>Send a message:</label>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className="form-control"
            />
            </div>
            <button onClick={sendToServer} className="btn btn-warning">Send It!</button>

            <ul className="list-group">
            {
                messages.map((m,i) => <li key={i} className="list-group-item">{m}</li>)
            }
            </ul>
            
        </>
        )
}

export default Messenger