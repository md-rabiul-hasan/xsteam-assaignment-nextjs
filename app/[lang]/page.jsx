import React from 'react';
import Hero from '../../components/Hero';
import VideoList from '../../components/VideoList';
import { getAllVideos } from './videosData';

export default async function HomePage() {
  const videos = await getAllVideos();
  return (
    <>
      <Hero />
      <VideoList  videos={videos} />
    </>
  )
}
