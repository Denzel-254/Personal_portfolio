import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-2xl z-70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
          {/* <img
            src="/logo1.png"
            alt="Artex designers Logo"
            className="w-10 h-10 object-contain"
          /> */}
          <h1 className="text-2xl font-bold text-green-500">Denzel</h1>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
