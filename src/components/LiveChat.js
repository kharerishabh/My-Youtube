import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChatMessages } from "../store/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utilis/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
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
    }, 1500);

    return () => clearInterval(liveChatDataTimer);
  }, []);

  const onSendLiveChatMessage = (e) => {
    e.preventDefault();
    dispatch(
      addLiveChatMessages({
        name: "Rishabh Khare",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={onSendLiveChatMessage}
      >
        <input
          className="px-2 w-[21rem] border border-gray-400 rounded-sm"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
