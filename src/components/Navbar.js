export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 fixed w-full z-50">
      <div className="text-xl font-bold">MyPortfolio</div>
      <div className="space-x-4 hidden md:block">
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  );
}