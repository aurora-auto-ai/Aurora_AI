import { HNSWLib } from "langchain/vectorstores/hnswlib"; // Import HNSWLib for efficient similarity search
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

export const vectorStore = new HNSWLib(new OpenAIEmbeddings(), {
  space: "cosine",
  numDimensions: 1536,
});
