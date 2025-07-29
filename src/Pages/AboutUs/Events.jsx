
import img1 from "../../assets/Pages/About/img1.jpg";
import img2 from '../../assets/Pages/About/img2.png';
import img3 from "../../assets/Pages/About/im3.jpg";


const EventsSection = () => {
 

  return (
    <div className="py-10 px-4 md:px-10 bg-[#FAFAFA] text-center">
      {/* Heading */}
      <h2 className="text-[48px] font-bold mb-2">
        Beyond the Screen: <span className="text-orange-500">Our Events</span>
      </h2>
      <p className="text-black text-[24px] mb-8">
        Workshops, expert sessions, and team collaborations that matter.
      </p>

      {/* Image Grid */}
     <div className="flex justify-center items-center w-full py-5">
  <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4 max-w-5xl bg-white border-4 border-[#D7D7D7]  w-full">
    {/* image on left  */}
    <div className="row-span-2">
      <img src={img1} alt="Event 1" className="w-full h-full object-cover rounded-md" />
    </div>

    {/*image 2-columns */}
    <div className="col-span-2">
      <img src={img2} alt="Event 2" className="w-full h-full object-cover rounded-md" />
    </div>

    {/* images 3&4 */}
    <div className="col-start-2 row-start-2">
      <img src={img3} alt="Event 3" className="w-full h-full object-cover rounded-md" />
    </div>

    <div className="col-start-3 row-start-2">
      <img src={img2} alt="Event 4" className="w-full h-full object-cover rounded-md" />
    </div>

    {/* image on right */}
    <div className="row-span-2 col-start-4 row-start-1">
      <img src={img1} alt="Event 5" className="w-full h-full object-cover rounded-md" />
    </div>
  </div>
</div>


    </div>
  );
};

export default EventsSection;