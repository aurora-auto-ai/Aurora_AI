// Must be the entry point for everything

"use server";
import { AutoGPT } from "langchain/experimental/autogpt";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { IPrompts } from "../../types/prompts/IPrompts";
import { vectorStore } from "../database";
import { llmTools } from "../tools";

export default async function Main({ _aiName, _aiRole, _message }: IPrompts) {
  // Main must start on web loaded or something
  //TODO: Improve
  const autogpt = AutoGPT.fromLLMAndTools(
    new ChatOpenAI({ temperature: 0 }),
    llmTools,
    {
      memory: vectorStore.asRetriever(),
      aiName: _aiName,
      aiRole: _aiRole,
    }
  );

  try {
    const resp = await autogpt.run([`${_message}`]);
    return resp;
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error or return an error response
  }
}

/*
    Initial chatgpt prompt must be a _aiName and _aiRole ??
    how do i handle the auto prompt ? 
    how to compose Agents?
    does Auto GPT do automatic? 
    can i link different agent with diferent database??
    i need to check if database is really working
    Change database to Redis ? or some vector database
    or diferent types of database  ??
*/
