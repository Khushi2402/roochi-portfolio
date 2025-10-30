import { motion } from "framer-motion";

import "./landing.css";
import img1 from "../../assets/1.jpg";
import img11 from "../../assets/11.jpg";
import img3 from "../../assets/3.jpg";
import img33 from "../../assets/33.jpg";
import img333 from "../../assets/333.jpg";
import img4 from "../../assets/4.jpg";

import bgVideo from "../../assets/mainVideo.mp4";

import { carouselData } from "../../data/carouselData";

const Hero = () => {
  return (
    <div className="bg-orange-50">
<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
  {/* 🔹 Background Video */}
  <motion.video
    src={bgVideo} // 👉 place your video in public/videos folder
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.8, ease: 'easeOut' }}
  />

  {/* 🔹 Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* 🔹 Centered Hero Text */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    className="relative z-10 text-center text-white px-6"
  >
    <h1 className="font-pinyon text-6xl sm:text-7xl lg:text-8xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
      Roochi
    </h1>
  </motion.div>

  {/* 🔹 Scroll Hint */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    className="absolute bottom-6 right-8 text-white text-sm tracking-widest opacity-80"
  >
    scroll ↓
  </motion.div>
</section>


      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src={img4}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-orange-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-orange-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-orange-700">
                  Hii, I'm Roochi!
                </h2>

                <p className="mt-4 text-md text-gray-600">
                  By day: I’m navigating board-rooms, spreadsheets and
                  deadlines. By night (or when the waves call): you’ll find me
                  chasing golden hour at the beach, packing in photo-shoots, and
                  turning outfits into stories. I believe style isn’t just what
                  you wear—it’s how you{" "}
                  <span className="heroText text-orange-700 font-semibold">
                    live, love and laugh
                  </span>{" "}
                  in it. Expect OOTDs, sunlit portraits, behind-the-scenes fun
                  and my best girlfriends keeping it real. Follow along for the
                  corporate-chic meets seaside-dream vibe—because life’s better
                  when you’re dressed to impress and barefoot in the sand.
                </p>

                {/* <motion.a
                  href="/contact"
                  className="mt-8 inline-block rounded border border-orange-700 bg-orange-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-orange-700 focus:outline-none focus:ring active:text-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 15px rgba(234, 88, 12, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in Touch
                </motion.a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* 🔹 Background Auto-Scrolling Gallery */}
        <div className="carousel-wrapper absolute inset-0 overflow-hidden">
          <div className="carousel-track flex h-full animate-scroll">
            {carouselData.concat(carouselData).map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={`carousel-${item.id}`}
                className="h-full object-cover flex-shrink-0 w-[60vw] sm:w-[33vw] md:w-[25vw] lg:w-[20vw]"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-50"></div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-orange-700 sm:text-3xl">
              Portfolio
            </h2>

            <p className="mx-auto mt-4 max-w-md text-orange-950">
              A glimpse into some of my favorite shots and projects.
            </p>
            {/* <motion.button
              href="/portfolio"
              className="heroBtn bg-orange-700 text-white px-24 py-4 tracking-widest mt-9 border border-orange-700 hover:bg-transparent hover:text-orange-700 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(234, 88, 12, 0.4)", // soft orange glow
              }}
              whileTap={{ scale: 0.97 }}
            >
              GO TO PORTFOLIO
            </motion.button> */}
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="/portfolio" className="group relative block">
                <img
                  src={img3}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>

            <li>
              <a href="/portfolio" className="group relative block">
                <img
                  src={img33}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="/portfolio" className="group relative block">
                <img
                  src={img333}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
