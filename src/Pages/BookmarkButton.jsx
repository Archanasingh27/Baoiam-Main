import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";

const BookmarkButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active); // Toggle on click
  };

  return (
    <button onClick={handleClick}>
      <BsBookmark
        className={`w-[20px] h-[20px] transition-colors duration-300 ${
          active ? "text-orange-500" : "text-black"
        }`}
      />
    </button>
  );
};

export default BookmarkButton;
