export default function Footer() {
  return (
    <footer className="py-12 bg-[#0A0D17] text-gray-400 text-center">
      <p className="text-sm md:text-base">
        © 2026 FlowPilot AI. All rights reserved.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4">
        <a
          href="#"
          className="relative text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-110 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          Twitter
        </a>
        <a
          href="#"
          className="relative text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="relative text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-500 before:transition-all before:duration-300 hover:before:w-full"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
