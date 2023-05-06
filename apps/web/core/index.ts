// Must be the entry point for everything

import { AutoGPT } from 'langchain/experimental/autogpt';
import { ReadFileTool, WriteFileTool, SerpAPI } from 'langchain/tools';
import { InMemoryFileStore } from 'langchain/stores/file/in_memory';
import { HNSWLib } from 'langchain/vectorstores/hnswlib'; // Import HNSWLib for efficient similarity search

import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';

interface IPrompts {
  _aiName?: string;
  _aiRole?: string;
  _maxIterations?: number;
  _message?: string;
}
export default async function Main({
  _aiName = 'Aurora Ai',
  _aiRole = 'an ai expert on tabaco related subject that provide usefull list ',
  _message = 'Hello AI, write a html file with a list of good practice related with not smoking',
}: IPrompts) {
  const store = new InMemoryFileStore();

  const tools = [
    new ReadFileTool({ store }),
    new WriteFileTool({ store }),
    new SerpAPI(process.env.SERPAPI_API_KEY, {
      location: 'United States',
      hl: 'en',
      gl: 'us',
    }),
  ];

  const vectorStore = new HNSWLib(new OpenAIEmbeddings(), {
    space: 'cosine',
    numDimensions: 1536,
  });

  const autogpt = AutoGPT.fromLLMAndTools(
    new ChatOpenAI({ temperature: 0 }),
    tools,
    {
      memory: vectorStore.asRetriever(),
      aiName: _aiName,
      aiRole: _aiRole,
    },
  );

  try {
    const resp = await autogpt.run([`${_message}`, '- shutdown']);
    return resp;
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle the error or return an error response
  }
}
