import axios from "axios";
import { useState , useEffect } from "react";




function App() {
  
  const [userInfo, setUserInfo] = useState([]);

  const getUser =  async() =>{
    try {
      const res = await axios.get(`https://randomuser.me/api/?results=10`);
      setUserInfo(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      alert("取得資料失敗")
    }
    
  }
  
  useEffect(() => {
    getUser();
  },[])

  
  return (
    <>
      {userInfo.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      ))}
    </>
  )
}

export default App
