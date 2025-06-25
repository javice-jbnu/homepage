import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '홈', path: '/' },

    { name: '멤버', path: '/members' },
    { name: '활동 갤러리', path: '/activity-gallery' },
    { name: '동아리방', path: '/clubroom' },
    { name: '프로젝트', path: '/projects' },
    { name: '연락처', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-black to-gray-900 shadow-xl sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              {/* JAVICE 공식 로고 */}
              <img 
                src="/javice-logo-tp.png" 
                alt="JAVICE 로고" 
                className="w-10 h-10 object-contain filter drop-shadow-lg"
              />
              
              <span className="ml-3 text-xl font-bold text-white">
                자비스 JAVICE
              </span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'text-white bg-gradient-to-r from-gray-700 to-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
                          <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="모바일 메뉴 토글"
                className="text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md transition-colors duration-200"
              >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 네비게이션 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mt-2 border border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'text-white bg-gradient-to-r from-gray-700 to-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 