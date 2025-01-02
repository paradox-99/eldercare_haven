import bed1 from '../../assets/images/1bed.jpg';
import bed2 from '../../assets/images/bed.jpg';
import bed3 from '../../assets/images/33bed.jpg';
import bed4 from '../../assets/images/lerge-height.avif';
import bed5 from '../../assets/images/biggbed.avif';

const Living = () => {
     return (
          <div className="mt-28 flex justify-between">
               <div className="w-[700px]">
                    <div className='flex gap-4'>
                         <div className='w-1/2 flex flex-col gap-4'>
                              <img src={bed1} alt="" className='rounded-xl'/>
                              <img src={bed2} alt="" className='rounded-xl'/>
                         </div>
                         <div>
                              <img src={bed4} alt="" className='w-[333px] h-[480px] rounded-xl'/>
                         </div>
                    </div>
                    <div className='mt-4'>
                         <img src={bed3} alt="" className='w-[700px] h-[350px] rounded-xl'/>
                    </div>
               </div>
               <div className="flex flex-col w-[635px] h-[848px]">
                    <div className='h-1/2 flex flex-col justify-center'>
                         <h3 className="text-xl font-medium text-center">Your Comfort, Our Priority</h3>
                         <h1 className="text-secondary text-5xl font-extrabold mt-5 mb-12 text-center"><span className="text-primary">Explore Our <br /></span> Living Options</h1>
                    </div>
                    <div className=''>
                         <img src={bed5} alt="" className='w-full rounded-xl h-[500px]'/>
                    </div>
               </div>
          </div>
     );
};

export default Living;