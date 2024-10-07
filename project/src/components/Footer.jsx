import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-#2A3439-800 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Left Side: Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Newsletter and Links */}
          <div className="flex flex-col">
            {/* Sign up to the Newsletter */}
            <h4 className="text-lg font-bold mb-4">Sign up to the Newsletter</h4>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Your Email..."
                className="p-2 rounded text-gray-800 w-full mb-2"
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Sign Up
              </button>
            </form>

            {/* Links List */}
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">News & Events</a></li>
              <li><a href="#" className="hover:underline">Contact Foundation</a></li>
            </ul>

            {/* Privacy Policy Link */}
            <div className="mt-4">
              <a href="#" className="hover:underline text-sm">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} INEAA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
