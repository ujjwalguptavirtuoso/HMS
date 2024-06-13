import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import Sidebar from '../Components/Sidebar'

const MessagesDisp = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/message/get-all-msg",
          { 
            //withCredentials: true 
          }
        );
        console.log(data)
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);
  return (
    <div className='flex'>
      <Sidebar />

    </div>
  )
}

export default MessagesDisp