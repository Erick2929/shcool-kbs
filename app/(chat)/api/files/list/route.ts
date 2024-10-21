import { auth } from "@/app/(auth)/auth";
import { list } from "@vercel/blob";

export async function GET() {
  // TODO: Implementar logica del get list

  return Response.json({
    Response: "list",
  });
}
