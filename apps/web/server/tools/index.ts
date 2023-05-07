import { ReadFileTool, WriteFileTool, Serper } from "langchain/tools";
import { systemStorage } from "../storage";

// Main Tools
//TODO: PLUGIN SYSTEM
export const llmTools = [
  new ReadFileTool({ store: systemStorage }),
  new WriteFileTool({ store: systemStorage }),
  new Serper(process.env.SERPER_API_KEY),
];
