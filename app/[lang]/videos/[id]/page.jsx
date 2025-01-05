import React from 'react';
import VideoDetails from '../../../../components/VideoDetails';

export default async function VideoDetailsPage({params: {id, lang}}) {
    return <VideoDetails id={id}  lang={lang} />;
}
