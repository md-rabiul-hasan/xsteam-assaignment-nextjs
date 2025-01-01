import Image from 'next/image';

// The Navbar component serves as the header of the application.
// It includes branding, navigation links, a search bar, and a user avatar.
export default async function Navbar() {
  return (
    // Header container with flexbox for alignment and spacing
    <header className="flex justify-between items-center mb-8">
      {/* Left section: Logo and navigation */}
      <div className="flex items-center space-x-8">
        {/* Application logo using Next.js Image component */}
        <Image
          src="/assets/logo.svg"
          alt="LWS Xstream Logo"
          className="h-6"
          height={60}
          width={100}
        />
        
        {/* Navigation links, visible only on medium screens and above */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-color-purple font-semibold">
            TOP STREAMING
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            GAMES
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            TEAMS
          </a>
        </nav>
      </div>

      {/* Right section: Search bar and user avatar */}
      <div className="flex items-center space-x-4">
        {/* Search bar with placeholder and focus styling */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
          />
          {/* Search icon positioned inside the input field */}
          <svg
            className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* User avatar - using a placeholder image */}
        <img
          src="/assets/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
