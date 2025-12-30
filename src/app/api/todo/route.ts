
// import { clientPromise } from "@/lib/mongodb"
import { connectDB } from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await connectDB();
    const data=await Todo.find();
    return NextResponse.json({data:data},{status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error"+error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { title, desc } = await req.json();

    if (!title || !desc) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const data = new Todo({
      title,
      desc,
    });

    await data.save();

    return NextResponse.json(
      { data },
      { status: 201 }
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error"+error },
      { status: 500 }
    );
  }
}
