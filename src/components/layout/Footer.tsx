
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-thrive-500 bg-clip-text text-transparent">
                Thrive
              </h1>
            </Link>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              Your personalized fitness journey starts here. Track workouts, 
              monitor nutrition, and achieve your health goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="text-sm font-semibold text-gray-800 uppercase mb-4">Features</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/dashboard" className="text-gray-600 hover:text-purple-600 text-sm">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/workouts" className="text-gray-600 hover:text-purple-600 text-sm">
                    Workouts
                  </Link>
                </li>
                <li>
                  <Link to="/nutrition" className="text-gray-600 hover:text-purple-600 text-sm">
                    Nutrition
                  </Link>
                </li>
                <li>
                  <Link to="/goals" className="text-gray-600 hover:text-purple-600 text-sm">
                    Goals
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-sm font-semibold text-gray-800 uppercase mb-4">Support</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-gray-600 hover:text-purple-600 text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-purple-600 text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-600 hover:text-purple-600 text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-sm font-semibold text-gray-800 uppercase mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-purple-600 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-purple-600 text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Thrive Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
