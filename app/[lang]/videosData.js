import 'server-only'; // Ensures that this module can only be used on the server side

// Function to dynamically import the videos JSON file
const videos = async () => {
  const module = await import('./dictionaries/videos.json');
  return module.default; // Return the default export from the JSON file
};

// Function to get all videos
export const getAllVideos = async () => {
  const allVideos = await videos(); // Fetch all videos
  return allVideos || []; // Return videos or an empty array if undefined
};

// Function to get a specific video by its ID
export const getVideoById = async (videoId) => {
  const allVideos = await videos(); // Fetch all videos
  return allVideos.find((video) => video.videoId === videoId); // Find and return the video with the matching ID
};


// Function to get three random videos
export const getRandomVideos = async () => {
  const allVideos = await videos(); // Fetch all videos
  
  if (allVideos.length <= 3) {
    return allVideos; // If there are 3 or fewer videos, return them all
  }
  
  // Shuffle the videos array and return the first 3 items
  const shuffledVideos = allVideos.sort(() => Math.random() - 0.5);
  return shuffledVideos.slice(0, 3);
};