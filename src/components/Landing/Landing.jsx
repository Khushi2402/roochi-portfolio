import "./landing.css";
import videoBg from "../../assets/modelVideo.mp4";
import land1 from "../../assets/land1.jpg";
import port1 from "../../assets/land11.jpg";
import port2 from "../../assets/land12.jpg";
import port3 from "../../assets/land13.jpg";

const Hero = () => {
  return (
    <>
      <section>
        <div className="main">
          <video className="heroVideo" src={videoBg} autoPlay loop muted />
          <div className="overlay"></div>
          <div className="content fadeIn">
            <h1 className="heroText lg:text-8xl text-white text-5xl font-light tracking-widest">
              JENNIE
            </h1>
            <h4 className="lg:text-3xl text-white leading-tight mt-4">
              IN ACTION
            </h4>
            <button href="/portfolio" className="heroBtn bg-black text-white px-24 py-4 tracking-widest mt-9 border">
              GO TO PORTFOLIO
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src={land1}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Hii, I'm Jennie
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <a
                  href="/contact"
                  className="mt-8 inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Portfolio
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
            <a
              href="/portfolio"
              className="mt-8 inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
            >
              Go to Portfolio
            </a>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="/portfolio" className="group relative block">
                <img
                  src={port1}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>

            <li>
              <a href="/portfolio" className="group relative block">
                <img
                  src={port2}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="/portfolio" className="group relative block">
                <img
                  src={port3}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>
          </ul>
        </div>
      </section> 
    </>
  );
};

export default Hero;
