
import { ChevronRight } from 'lucide-react';
import Wrapper from '../Wrapper';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate=useNavigate()
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center py-20 h-full w-full">
        <div className="flex flex-col items-center mt-8 w-full">
          <h1 className="text-2xl md:text-5xl md:!leading-tight font-bold text-center">
          Your Global Partner in Business Formation, Visa & Immigration, Seafood Supply, Auto Parts, and Construction
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground my-6 text-center">
          We provide world-class solutions across Oman, Dubai, and globally to help your business thrive.
          </p>
          <Button className='flex items-center justify-center' onClick={()=>navigate('/services')}>Explore Our Divisions <ChevronRight className='size-5 ml-1'/> </Button>
        </div>
        <div className="relative flex items-center py-10 md:py-20 w-full">
          <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

          <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
            <img
              src="/hero.jpg"
              alt="banner image"
              width={1200}
              height={1200}
              className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;