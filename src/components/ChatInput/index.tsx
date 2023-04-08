"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { db } from "../../../firebase";
import { toast } from "react-hot-toast";
import ModelSelection from "../ModelSelection";
import userSwr from "swr";

type Props = {
  chatId: string;
};
export default function ChatInput({ chatId }: Props) {
  const [prompt, setprompt] = useState("");
  const { data: session } = useSession();

  const { data: model } = userSwr("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;
    const input = prompt.trim();
    setprompt("");
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://url-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("Chat gpt is think...");
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      //Toast notidication day sucess
      toast.success("ChatGPT as Responded:", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form className="p-5 space-x-5 flex " onSubmit={sendMessage}>
        <input
          disabled={!session}
          className="bg-transparent focus:outline-none flex-1 
          disabled:cursor-not-allowed disabled:text-gray-300"
          type="text"
          value={prompt}
          placeholder="digite sua mensagem aqui..."
          onChange={(e) => setprompt(e.currentTarget.value)}
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11A37f] hover:opacity-50 text-white font-bold 
          px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
