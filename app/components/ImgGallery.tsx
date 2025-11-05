import Image from 'next/image'

const ImgGallery = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col md:my-16 '>            
      <h2  className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Image Gallery
      </h2> 
 <p className="text-center leading-6 max-w-2xl text-gray-700 [&:not(:first-child)]:mt-4 text-center px-3">
     See the incredible catches and beautiful scenery that await you on the Kenai River
    </p>
    </div>
    <div className='flex items-center justify-center px-4 md:px-7 py-7 md:py-0 md:min-h-screen max-w-6xl md:mx-auto'>
      
<div className="grid grid-cols-4 grid-rows-5 gap-2">
    <div className="col-span-2 row-span-2">
      <Image alt='image1' height={500} width={500} src="/images/GalleryImg1s.svg"/>
    </div>
    <div className="col-start-3">
       <Image alt='image1' height={500} width={500} src="/images/GalleryImg2s.svg"/>
    </div>
    <div className="col-start-4">
       <Image alt='image1' height={500} width={500} src="/images/galleryImg3s.svg"/>
    </div>
    <div className="col-start-3 row-start-2">
       <Image alt='image1' height={500} width={500} src="/images/galleryImg4s.svg"/>
    </div>
    <div className="col-start-4 row-start-2">
       <Image alt='image1' height={500} width={500} src="/images/galleryImg5s.svg"/>
    </div>
    <div className="col-span-2 row-span-2 row-start-3">
       <Image alt='image1' height={500} width={500} src="/images/galleryImg6s.svg"/>
    </div>
    <div className="row-span-2 col-start-3 row-start-3">
       <Image alt='image1' height={500} width={500} src="/images/galleryImg7s.svg"/>
    </div>
    <div className="row-span-2 col-start-4 row-start-3">
       <Image alt='image1' height={500} width={500} src="/images/galleryImg8s.svg"/>
    </div>
</div>
    
    </div>
    </>
  )
}

export default ImgGallery
