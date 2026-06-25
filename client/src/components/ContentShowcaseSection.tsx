import { motion } from "framer-motion";
import { goToBooking } from "@/lib/utils";
import video1 from "@assets/hf_20260621_232122_6dcf3781-7da3-4bb2-aa60-7e9800e4c158_1782410390690.mp4";
import video2 from "@assets/hf_20260622_020930_70a10484-478b-4104-a3b7-6d2da1429625_1782410390690.mp4";
import video3 from "@assets/hf_20260622_042959_380f7bb6-4762-4fee-9cd3-3eaaeb909af6_1782410390691.mp4";
import video4 from "@assets/hf_20260625_174058_3bc7fd96-055b-4d39-b603-6a08046ebcce_1782410390691.mp4";

const videos = [
  { src: video1, orientation: "landscape" as const },
  { src: video2, orientation: "landscape" as const },
  { src: video3, orientation: "portrait" as const },
  { src: video4, orientation: "portrait" as const },
];

export default function ContentShowcaseSection() {
  return (
    <section id="our-work" className="bg-ivoire-navy-deep py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-ivoire-gold/10 text-ivoire-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Our Work
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Content We Create for <span className="text-ivoire-gold">Businesses Like Yours</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From scroll-stopping social videos to full social media management and content
            generation — here's a taste of the work we produce for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              className="group bg-ivoire-navy-card rounded-xl overflow-hidden border border-white/5 hover:border-ivoire-gold/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
            >
              <video
                src={video.src}
                className={`w-full h-auto ${
                  video.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
                } object-cover bg-black`}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/60 mb-6">
            Want content like this for your business? We handle the strategy, creation, and posting.
          </p>
          <button onClick={goToBooking} className="btn-gold rounded-lg px-8 py-4 text-base">
            Get Content Made for Your Brand
          </button>
        </motion.div>
      </div>
    </section>
  );
}
