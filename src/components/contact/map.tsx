
const Map = () => {
  return (
    <div className="-m-2 rounded-xl p-2  lg:-m-4 lg:rounded-2xl relative ">
    <div className='bg-blue-300 flex items-center justify-center blur-[2px] z-20 size-5 rounded-full absolute top-32 left-40 '><div className='bg-primary size-2 rounded-full'></div></div>
    <div className='bg-blue-300 flex items-center justify-center blur-[2px] z-20 size-5 rounded-full absolute bottom-32 right-40 '><div className='bg-primary size-2 rounded-full'></div></div>

    <div className='bg-blue-300 flex items-center justify-center blur-[2px] z-20 size-5 rounded-full absolute top-32 right-64 '><div className='bg-primary size-2 rounded-full'></div></div>

    <img
      src="/map.svg"
      alt="banner image"
      width={1200}
      height={1200}
      className="rounded-md lg:rounded-xl"
    />
  </div>
  )
}

export default Map
