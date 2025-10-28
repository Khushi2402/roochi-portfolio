import "./about.css";
import about1 from "../../assets/1.jpg";
import about2 from "../../assets/2.jpg";

const About = () => {
  return (
    <>
      <section>
        <div className="mx-auto  max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    About Me
                  </h2>

                  <p className="mt-4 text-gray-500 text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt odio ea illum quam error dolorem officia, facere
                    corrupti facilis. Sunt vero doloremque ipsa quod culpa,
                    accusamus deleniti provident necessitatibus officia earum
                    laboriosam in accusantium! Maiores blanditiis hic
                    repudiandae, suscipit ex fugit nostrum perspiciatis.
                    Nesciunt iure nobis maxime facere totam obcaecati quis modi
                    officiis, nemo qui excepturi non ullam distinctio corrupti
                    optio assumenda illo explicabo expedita repellendus, quidem
                    omnis in. Labore.
                  </p>
                </header>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <img
                    src={about1}
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />
                </li>

                <li>
                  <img
                    src={about2}
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">Measurement</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h2 className="mt-2 font-bold">Height</h2>
                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  5"10"
                </p>
              </div>
              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h2 className="mt-2 font-bold">Weight</h2>
                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  140
                </p>
              </div>
              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h2 className="mt-2 font-bold">Eyes</h2>
                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Blue
                </p>
              </div>
              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h2 className="mt-2 font-bold">Waist</h2>
                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  26"
                </p>
              </div>
              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h2 className="mt-2 font-bold">Inseam</h2>
                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  32"
                </p>
              </div>
              <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h2 className="mt-2 font-bold">Hair</h2>
                <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Brown
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
