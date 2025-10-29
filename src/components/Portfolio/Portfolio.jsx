import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

const Portfolio = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentIndex(0);
  };

  const closeGallery = () => setSelectedGallery(null);

  const nextImage = () => {
    if (!selectedGallery) return;
    setCurrentIndex((prev) => (prev + 1) % selectedGallery.length);
  };

  const prevImage = () => {
    if (!selectedGallery) return;
    setCurrentIndex(
      (prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length
    );
  };

  return (
    <div>
      <section className="portfolio-bg body-font bg-orange-50">
        <div className="container px-5  mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <motion.h1
              className="text-orange-700 font-bold sm:text-3xl text-2xl title-font lg:w-1/3 lg:mb-0 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              PORTFOLIO
            </motion.h1>

            {/* <p className="text-orange-700 lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
             
Welcome to my creative corner — a collection of projects, campaigns, and candid moments that blend structure with spontaneity. From corporate confidence to coastal calm, every photo reflects a different facet of me — thoughtful, curious, and always chasing the next bit of beautiful.
            </p> */}
          </div>

          {/* --- SAME LAYOUT: dynamically render images --- */}
          <div className="flex flex-wrap md:-m-2 -m-1">
            {portfolioData.map((item, index) => (
              <div
                key={item.id}
                className={`md:p-2 p-1 ${item.size}`}
                onClick={() => openGallery(item.gallery)}
              >
                <motion.img
                  alt="gallery"
                  src={item.thumbnail}
                  className="w-full h-full object-cover object-center block cursor-pointer"
                  whileHover={{ scale: 1.03, filter: "brightness(1.05)" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <img
                src={selectedGallery[currentIndex]}
                alt="Expanded view"
                className="rounded-2xl max-h-[80vh] object-contain shadow-xl"
              />

              {/* Close Button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
              >
                <X className="text-white" />
              </button>

              {/* Navigation */}
              {selectedGallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Thank You Section ===== */}
      <section className="text-center py-20 bg-orange-50">
        <motion.h2
          className="font-bold text-orange-700 text-2xl sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Thank You for Visiting ♡
        </motion.h2>

        {/* <motion.p
          className="text-orange-600 text-base max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every project you’ve seen here is a small piece of my story — built
          with patience, passion, and purpose. Grateful for your time, your
          curiosity, and for being part of this creative journey.
        </motion.p> */}
      </section>
    </div>
  );
};

export default Portfolio;
