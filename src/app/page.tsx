import AboutUsSection from '@/components/AboutUsSection';
import ListWithArrows from '@/components/ListWithArrows';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
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
    </>
  );
}
