import { motion } from "framer-motion";

import "./landing.css";
import videoBg from "../../assets/mainVideo.mp4";
import land1 from "../../assets/1.jpg";
import port1 from "../../assets/2.jpg";
import port2 from "../../assets/3.jpg";
import port3 from "../../assets/4.jpg";

const stats = [
  { id: 1, name: "Followers", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

const Hero = () => {
  return (
    <div className="bg-rose-50">
      <section>
        <div className="main">
          <video className="heroVideo" src={videoBg} autoPlay loop muted />
          <div className="overlay"></div>
          <div className="content fadeIn">
            <h1 className="heroText lg:text-9xl text-white text-5xl font-light tracking-widest">
              Roochi
            </h1>
            {/* <h4 className="lg:text-3xl text-white leading-tight mt-4">
              IN ACTION
            </h4>
            <button
              href="/portfolio"
              className="heroBtn bg-black text-white px-24 py-4 tracking-widest mt-9 border"
            >
              GO TO PORTFOLIO
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
