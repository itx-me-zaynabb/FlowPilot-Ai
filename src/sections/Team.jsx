/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const team = [
  { name: "Emma R.", role: "CEO & Founder", image: "/team/emma.jpg" },
  { name: "Liam S.", role: "CTO", image: "/team/liam.jpg" },
  { name: "Olivia P.", role: "Lead Designer", image: "/team/olivia.jpg" },
  { name: "Noah M.", role: "AI Engineer", image: "/team/noah.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0B0F19] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Meet Our Team
      </h2>
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-80 transition duration-500 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
