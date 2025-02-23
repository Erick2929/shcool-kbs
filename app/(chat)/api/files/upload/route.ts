import { auth } from "@/app/(auth)/auth";
import { insertChunks } from "@/app/db";
import { getPdfContentFromUrl } from "@/utils/pdf";
import { openai } from "@ai-sdk/openai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { put } from "@vercel/blob";
import { embedMany } from "ai";

export async function POST(request: Request) {
  // const content = await getPdfContentFromUrl(downloadUrl);
  // const textSplitter = new RecursiveCharacterTextSplitter({
  //   chunkSize: 1000,
  // });
  // const chunkedContent = await textSplitter.createDocuments([content]);

  // const { embeddings } = await embedMany({
  //   model: openai.embedding("text-embedding-3-small"),
  //   values: chunkedContent.map((chunk) => chunk.pageContent),
  // });

  // await insertChunks({
  //   chunks: chunkedContent.map((chunk, i) => ({
  //     id: `${user.email}/${filename}/${i}`,
  //     filePath: `${user.email}/${filename}`,
  //     content: chunk.pageContent,
  //     embedding: embeddings[i],
  //   })),
  // });

  return Response.json({});
}
