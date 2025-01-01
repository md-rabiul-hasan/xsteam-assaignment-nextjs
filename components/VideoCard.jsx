import Link from 'next/link';
import React from 'react';

// The VideoCard component is responsible for displaying a single video's details.
// It accepts a `video` prop containing the video data.
export default function VideoCard({ video }) {
  return (
    // Main container with rounded corners and background styling
    <div className="rounded-lg overflow-hidden bg-color-gray">
      <Link href={`/videos/${video.videoId}`}>
        {/* Thumbnail image of the video */}
        <img
          src={video.thumbnail}
          alt={video.title} // Alt text dynamically set to the video title
          className="w-full h-40 object-cover"
        />
        
        {/* Content section containing video title and channel name */}
        <div className="p-2">
          {/* Video title displayed prominently */}
          <p className="font-semibold">{video.title}</p>
          {/* Channel title with muted styling */}
          <p className="text-sm text-gray-400">{video.channelTitle}</p>
        </div>
      </Link>
     
    </div>
  );
}
