import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChatMessages } from "../store/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utilis/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.chatMessage);

  useEffect(() => {
    const liveChatDataTimer = setInterval(() => {
      dispatch(
        addLiveChatMessages({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 500);

    return () => clearInterval(liveChatDataTimer);
  }, []);

  return (
    <div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
