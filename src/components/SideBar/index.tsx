"use client";
import { signOut, useSession } from "next-auth/react";
import { NewChat } from "../NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import ChatRow from "../ChatRow";
import ModelSelection from "../ModelSelection";

export function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <>
      <div className="menu p-4 w-80 bg-[#343541] text-white">
        <div className="flex-1">
          <li>
            <NewChat />
          </li>
          <li>
            <ModelSelection />
          </li>
          <li>
            {loading ? (
              <>
                <p className=" text-center text-white">Loading Chats...</p>
              </>
            ) : (
              <>
                {chats?.docs.map((chat) => (
                  <ChatRow key={chat.id} id={chat.id} />
                ))}
              </>
            )}
          </li>
        </div>

        <div className="justify-center flex mb-8">
          {session && (
            <div className="avatar">
              <div className="w-24 rounded-full">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  onClick={() => signOut()}
                  src={`${session.user?.image}`}
                  alt={`${session.user?.name}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
