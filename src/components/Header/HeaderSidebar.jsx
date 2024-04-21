
import { SignInButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export default function HeaderSidebar({ isOpen, onClose }) {
    return (
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={onClose} className="absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="py-8 px-4 shadow-lg shadow-slate-500 h-full">
          <ul>
            <li className="mb-4">
              <Link exact to="/" onClick={onClose} className="font-semibold text-lg text-gray-800 hover:text-blue-700">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/about" onClick={onClose} className="font-semibold text-lg text-gray-800 hover:text-blue-700">
                About us
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/contact" onClick={onClose} className="font-semibold text-lg text-gray-800 hover:text-blue-700">
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-8 bg-red-400 rounded-lg p-2 w-20">
            <SignInButton mode="modal" redirectUrl="/dashboard" />
          </div>
        </div>
      </div>
    );
  }