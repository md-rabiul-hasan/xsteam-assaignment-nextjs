import React from 'react';

export default function VideoDetails({ video, randomVideos }) {
  return (
    <main className="flex flex-col lg:flex-row gap-6">
      {/* Main content area */}
      <div className="lg:w-3/4">
        <div className="relative">
          {/* Video player */}
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title="YouTube video player"
            frameBorder={0}
            className="w-full aspect-video h-[500px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
          {/* Overlay at the bottom of the video */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center space-x-4">
              {/* Play button */}
              <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              {/* Live badge */}
              <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">LIVE</div>
              {/* Video duration */}
              <span className="text-sm">46:02</span>
              {/* Donate button */}
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                Donate
              </button>
            </div>
          </div>
        </div>
        {/* Video title and channel */}
        <h1 className="text-2xl font-bold mt-4">
          {video.title}
          <span className="block text-lg text-gray-500">{video.channelTitle}</span>
        </h1>
        {/* Channel details */}
        <div className="flex items-center space-x-4 mt-2">
          {/* Avatar */}
          <img
            src="/assets/avatar.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          {/* Channel name */}
          <div>
            <p className="font-semibold">{video.channelTitle}</p>
          </div>
          {/* Subscribe button */}
          <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Sidebar with random videos */}
      <div className="lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">You may like</h2>
        <div className="space-y-4">
          {/* List of random videos */}
          {randomVideos.map((video, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt="Video Thumbnail"
                className="w-30 h-20 rounded object-cover"
              />
              {/* Video details */}
              <div>
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.channelTitle}</p>
                <p className="text-sm text-gray-400">{video.publishTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
