import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/models/Post";

export async function GET(req) {
    try {
        await connectDB();
        const result = await PostModel.find();
        return NextResponse.json({ "result": result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ "msg": "api calling fail..." }, { status: 400 })
    }
}

// post api 
export async function POST(req) {
    const body = await req.json();
    try {
        await connectDB();
        const result = await PostModel.create(body);
        console.log("result: ", result)

        return NextResponse.json({ "result": result }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "msg": "API: post mathod fail" }, { status: 400 })
    }
}