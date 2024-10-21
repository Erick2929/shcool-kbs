import { auth } from "@/app/(auth)/auth";
import { deleteChunksByFilePath } from "@/app/db";
import { head, del } from "@vercel/blob";

export async function DELETE(request: Request) {
  // TODO: Implementar logica del delete

  return Response.json({ respone: "delete" });
}
