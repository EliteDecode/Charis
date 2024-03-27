function GalleryHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center ">
      <h2 className="mt-16 text-[64px]">Gallery</h2>
      <p className="w-[1026px] text-[24px] text-center leading-[29.76px]">
        We will continue to grow and evolve Chariz Interiors for the betterment
        of our clients and our people. Vision includes the continual expansion.
      </p>

      <h1
        className="absolute top-56 z-10 text-[200px] text-yellow-400 text-opacity-25"
        style={{ top: "-80px" }}
      >
        Gallery
      </h1>
    </div>
  );
}

export default GalleryHeader;
