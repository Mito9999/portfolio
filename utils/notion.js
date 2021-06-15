import { Client } from "@notionhq/client";

let cached = global.notion;

if (!cached) {
  cached = global.notion = { notion: null, promise: null };
}

export async function connectToDatabase(
  database_id = process.env.NOTION_DATABASE_ID
) {
  if (cached.notion) {
    return cached.notion;
  }

  if (!cached.promise) {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    cached.promise = notion.databases.retrieve({ database_id }).then((res) => {
      return notion;
    });
  }
  cached.notion = await cached.promise;
  return cached.notion;
}
