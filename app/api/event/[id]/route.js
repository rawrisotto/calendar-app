import { promises as fs } from "fs";

export const GET = async (req, { params }) => {
  try {
    const file = await fs.readFile(process.cwd() + `/data/events.json`, "utf8");
    const data = JSON.parse(file);
    const filteredData = data.filter((event) => event.id === params.id);

    return new Response(JSON.stringify(filteredData[0]), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  try {
    const file = await fs.readFile(process.cwd() + `/data/events.json`, "utf8");
    const data = JSON.parse(file);
    let updatedEvent = await req.json();
    updatedEvent = { ...updatedEvent, id: params.id };

    const index = data.findIndex((event) => event.id === params.id);
    data[index] = updatedEvent;

    await fs.writeFile(
      process.cwd() + `/data/events.json`,
      JSON.stringify(data, null, 2)
    );

    return new Response(JSON.stringify(updatedEvent), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const file = await fs.readFile(process.cwd() + `/data/events.json`, "utf8");
    const data = JSON.parse(file);
    const filteredData = data.filter((event) => event.id !== params.id);

    await fs.writeFile(
      process.cwd() + `/data/events.json`,
      JSON.stringify(filteredData, null, 2)
    );

    return new Response(null, { status: 204 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
