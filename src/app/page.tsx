import AboutUsSection from '@/components/AboutUsSection';
import Carousel from '@/components/Carousel';
import ListWithArrows from '@/components/ListWithArrows';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import StartProject from '@/components/StartProject';
import VideoSection from '@/components/VideoSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <AboutUsSection />
      <VideoSection />
      <ListWithArrows />
      <Carousel />
      <StartProject />
      <Navbar />
    </>
  );
}
