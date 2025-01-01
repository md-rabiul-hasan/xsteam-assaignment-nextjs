import { NextResponse } from "next/server";
import { getAllVideos } from "../../../lib/videos";

export async function GET() {
    const data = await getAllVideos();
    return NextResponse.json(data); 
}