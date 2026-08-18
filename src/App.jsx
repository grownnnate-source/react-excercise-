import "./App.css";
import User from "./props";

const user = {
  name: "nate" , 
  age: 21 ,
  img: "/favicon.svg" ,
  phone : "0962371302" ,
  email : "abc@gmail.com"
}

export default function App() {
  return (
    <div className="app">
      <User
        user = {user}
      />
    </div>
  );
}