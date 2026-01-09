import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f3ee] via-[#f1ebe3] to-[#ebe3d9] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center"
      >
        {/* Badge */}
        <span className="inline-block mb-6 px-6 py-2 rounded-full border border-[#c8a24a] text-sm tracking-wide text-[#5c4b32] font-serifSoft">
          We’re Building Something Special
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serifSoft leading-tight">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#5c4b32] leading-relaxed font-serifSoft mb-10">
          Our page is currently under development. We’re thoughtfully crafting
          an experience that’s meaningful, elegant, and worth the wait.
        </p>

        {/* Divider */}
        <div className="flex justify-center mb-10">
          <span className="w-24 h-[2px] bg-[#c8a24a] rounded-full"></span>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-500 font-serifSoft">
          Stay tuned — launching soon ✨
        </p>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
