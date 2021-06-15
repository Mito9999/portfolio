import { connectToDatabase } from "../../utils/notion";

const database_id = process.env.NOTION_VIEWS_DATABASE_ID;

export default async function handler(req, res) {
  try {
    if (process.env.MODE !== "production") {
      res
        .status(400)
        .json({ msg: "Site is under development, no views are counted" });
      return;
    }

    const { path } = req.body;

    const notion = await connectToDatabase(database_id);
    notion.pages.create({
      parent: { database_id },
      properties: {
        Route: {
          title: [{ type: "text", text: { content: path || "none" } }],
        },
      },
    });

    res.status(200).json({ msg: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error" });
  }
}
