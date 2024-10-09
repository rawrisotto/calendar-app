import { promises as fs } from "fs";
import { v4 as uuidv4 } from 'uuid';

export const GET = async (req) => {
  try {
    const file = await fs.readFile(process.cwd() + "/data/events.json", "utf8");
    const data = JSON.parse(file);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const file = await fs.readFile(process.cwd() + "/data/events.json", "utf8");
    const data = JSON.parse(file);
    const newEvent = await req.json();
    newEvent.id = uuidv4();

    data.push(newEvent);

    await fs.writeFile(
      process.cwd() + "/data/events.json",
      JSON.stringify(data, null, 2)
    );

    return new Response(JSON.stringify(newEvent), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
