import React from 'react';
import VideoCard from './VideoCard';

// The VideoList component is responsible for rendering a list of video cards
// It accepts a `videos` prop, which is an array of video objects
export default function VideoList({ videos }) {
  return (
    // Section to display the list of videos
    <section className="mt-12">
      {/* Header section containing the title and a 'View all' link */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Streams of the day</h2>
        {/* Placeholder link for 'View all' */}
        <a
          href="#"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          View all
        </a>
      </div>

      {/* Grid layout to organize video cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Mapping over the videos array to render a VideoCard for each video */}
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </section>
  );
}
