import { NextResponse } from "next/server";
import { getAllVideos, getVideoById } from "../../../../lib/videos";

export async function GET(request, {params}) {
    const videoId = params?.id;
    const data = await getVideoById(videoId);
    return NextResponse.json(data);
}


export async function PATCH(request, { params }) {
    const videoId = params?.id;
    const body    = await request.json();
    const video   = await getVideoById(videoId);
  
    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }
  
    // Update video details
    if (body.title){
        video.title = body.title;
    }
    if (body.description) {
        video.description = body.description;
    }
  
    return NextResponse.json(video);
}

export async function DELETE(request, { params }) {
    const videoId = params?.id;
    const videos = await getAllVideos();
  
    const videoIndex = videos.findIndex((video) => video.videoId === videoId);
  
    if (videoIndex === -1) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }
  
    // Remove the video from the list
    const deletedVideo = videos.splice(videoIndex, 1)[0];
  
    return NextResponse.json({ message: "Video deleted successfully", deletedVideo });
  }