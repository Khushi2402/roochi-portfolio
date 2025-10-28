import React from "react";

import port1 from "../../assets/1.jpg";
import port2 from "../../assets/11.jpg";
import port3 from "../../assets/3.jpg";
import port4 from "../../assets/4.jpg";
import port5 from "../../assets/2.jpg";
import port6 from "../../assets/5.jpg";

const Portfolio = () => {
  return (
    <div>
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="text-orange-700 font-bold sm:text-3xl text-2xl title-font lg:w-1/3 lg:mb-0 mb-4">
              PORTFOLIO
            </h1>
            <p class="text-orange-700 lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Welcome to my creative corner — a collection of projects,
              campaigns, and candid moments that blend structure with
              spontaneity. From corporate confidence to coastal calm, every
              photo reflects a different facet of me — thoughtful, curious, and
              always chasing the next bit of beautiful.
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-full lg:w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={port1}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={port3}
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={port2}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-full lg:w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={port4}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={port5}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={port6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
