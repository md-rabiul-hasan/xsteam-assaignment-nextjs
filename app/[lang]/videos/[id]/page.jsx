import React from 'react';
import VideoDetails from '../../../../components/VideoDetails';
import { getRandomVideos, getVideoById } from '../../videosData';

export default async function VideoDetailsPage({params: {id}}) {
    const video = await getVideoById(id);
    const randomVideos = await getRandomVideos();
    console.log(randomVideos);
    return <VideoDetails video={video} randomVideos={randomVideos} />;
}
