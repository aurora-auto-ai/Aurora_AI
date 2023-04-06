import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
export default function Message({ message }: Props) {
  const isChatpt = message.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatpt && "bg-[#434654]"} `}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img alt="" src={message.user.avatar} className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}
