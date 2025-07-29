import Group from "../../assets/Home/Lines/Group.webp"
const HeadingImage = ({ title, highlight }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <h2 className="text-3xl md:text-5xl font-bold mb-2">
        {title} <span className="text-orange-500">{highlight}</span>
      </h2>
      <img src={Group} alt="" className="w-9 mb-4" />
    </div>
  );
};

export default HeadingImage;