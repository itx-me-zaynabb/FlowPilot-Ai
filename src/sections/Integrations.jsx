import { motion } from "framer-motion";

const tools = ["Slack", "Notion", "Google Drive", "Trello", "Asana"];

export default function Integrations() {
  return (
    <section className="py-24 bg-[#0B0F19] text-center">
      <h2 className="text-4xl font-bold mb-12">
        Integrates With Your Favorite Tools
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-4 bg-white/10 rounded-2xl backdrop-blur-xl hover:scale-105 transition-transform"
          >
            <span className="text-2xl font-bold">{tool}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
