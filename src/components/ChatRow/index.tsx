"use client";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

interface Props {
  id: string;
}
export default function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    //TODO:IMPROVE
    router.replace("/");
  };

  const HandleChatClicked = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <label
      htmlFor="my-drawer"
      className={` justify-center ${active && "bg-gray-700/50"}`}
      onClick={HandleChatClicked}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "Novo Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-500"
      />
    </label>
  );
}
