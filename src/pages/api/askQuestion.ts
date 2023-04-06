import { NextApiRequest, NextApiResponse } from "next";
import query from "../../../lib/queryApi";
import { adminDb } from "../../../firebaseAdmin";
import admin from "firebase-admin";

type Data = {
  answer: string;
};
export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a Valid Chat ID!" });
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT was enable to find a answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: chatId,
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
