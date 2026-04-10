import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '品牌故事', href: '#about' },
  { label: '服务介绍', href: '#services' },
  { label: '安全保障', href: '#safety' },
  { label: '加入我们', href: '#join' },
  { label: '联系我们', href: '#contact' },
  { label: '常见问题', href: '#faq' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shadow-soft transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo.jpg"
                  alt="倾心有约"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`font-semibold text-lg lg:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-[#0A5E4E]' : 'text-[#0A5E4E]'
              }`}>
                倾心有约
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-[#0DB294] hover:bg-[#E6F7F4]'
                      : 'text-gray-700 hover:text-[#0DB294] hover:bg-[#E6F7F4]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="px-6 py-2.5 bg-[#0DB294] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[#0A5E4E] hover:shadow-lg hover:shadow-[#0DB294]/30"
              >
                立即咨询
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-[#E6F7F4] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-card p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#E6F7F4] hover:text-[#0DB294] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="block w-full px-4 py-3 bg-[#0DB294] text-white text-center font-medium rounded-xl hover:bg-[#0A5E4E] transition-colors"
              >
                立即咨询
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
