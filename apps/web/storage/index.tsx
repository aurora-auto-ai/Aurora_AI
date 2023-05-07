import { NodeFileStore } from "langchain/stores/file/node";

// Node files Manager
export const systemStorage = new NodeFileStore("./generator/");
