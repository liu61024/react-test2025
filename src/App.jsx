import axios from "axios";
import { useState , useEffect } from "react";




function App() {
  
  const [userInfo, setUserInfo] = useState([]);

  const getUser =  async() =>{
    try {
      const res = await axios.get(`https://randomuser.me/api/?results=10`);
      setUserInfo(res.results.name);
      console.log(res.results.name);
    } catch (error) {
      alert("取得資料失敗")
    }
    
  }
  
  useEffect(() => {
    getUser();
  },[])

  
  return (
    <>
      {/* {userInfo}
      {getUser} */}
    </>
  )
}

export default App
