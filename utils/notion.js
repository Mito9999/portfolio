import { Client } from "@notionhq/client";

let cached = global.notion;

if (!cached) {
  const defaultCache = [
    {
      id: process.env.NOTION_DATABASE_ID,
      notion: null,
      promise: null,
    },
    {
      id: process.env.NOTION_VIEWS_DATABASE_ID,
      notion: null,
      promise: null,
    },
  ];
  global.notion = defaultCache;
  cached = defaultCache;
}

export async function connectToDatabase(
  database_id = process.env.NOTION_DATABASE_ID
) {
  console.log(cached);
  let currentDBIndex = cached.findIndex(
    (cacheObj) => cacheObj.id === database_id
  );
  if (cached[currentDBIndex].notion) {
    console.log(`Using Cached Notion Client Connection for ${database_id}`);
    return cached[currentDBIndex].notion;
  }

  if (!cached[currentDBIndex].promise) {
    console.log(`Creating New Notion Client Connection for ${database_id}`);

    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    cached[currentDBIndex].promise = notion.databases
      .retrieve({ database_id })
      .then((res) => {
        return notion;
      });
  }
  cached[currentDBIndex].notion = await cached[currentDBIndex].promise;
  return cached[currentDBIndex].notion;
}
