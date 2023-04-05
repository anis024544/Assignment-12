import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Assets/Banner/banner 1.PNG";
import banner2 from "../../Assets/Banner/banner 2.PNG";

const Banner = () => {
  const bannerimg = "https://cdn.shopify.com/s/files/1/0633/7098/5728/files";

  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={banner} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={banner2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={
                bannerimg +
              "/S2_5626b6f8-70da-4849-ae8d-bd2fd7c79bdf.png?v=1647241219"
            }
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src={bannerimg + "/Sliding-Banner.png?v=1663246740"}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2" style={{marginTop:'-35px'}}>
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
