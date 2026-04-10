import { useEffect, useRef } from 'react';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.8 }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 1,
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.3 }
      );

      // Continuous floating animation for image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: '5万+', label: '注册用户' },
    { icon: Heart, value: '98%', label: '好评率' },
    { icon: Shield, value: '10+', label: '覆盖城市' },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full bg-gradient-hero overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D6F5EE] rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#E6F7F4] rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#D6F5EE] rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-12rem)]">
          {/* Left content */}
          <div className="flex flex-col gap-6 lg:gap-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft w-fit">
              <span className="w-2 h-2 bg-[#0DB294] rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">2025年创立于重庆</span>
            </div>

            {/* Main title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A5E4E] leading-tight"
            >
              倾心有约
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-600 mt-2 lg:mt-4">
                一见倾心
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              高品质上门陪伴与生活服务平台，以按摩理疗和城市玩伴为基础，
              运用互联网技术为您第一时间提供高品质的产品和服务。
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={() => scrollToSection('#services')}
                className="group flex items-center gap-2 px-8 py-4 bg-[#0DB294] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#0A5E4E] hover:shadow-lg hover:shadow-[#0DB294]/30"
              >
                了解服务
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="px-8 py-4 bg-white text-[#0DB294] font-medium rounded-full border-2 border-[#0DB294] transition-all duration-300 hover:bg-[#E6F7F4] hover:border-[#0A5E4E]"
              >
                品牌故事
              </button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-6 lg:gap-10 mt-4 lg:mt-8 pt-6 lg:pt-8 border-t border-[#D6F5EE]"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#E6F7F4] rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#0DB294]" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-[#0A5E4E]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div ref={imageRef} className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main image container */}
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0DB294]/20 to-[#D6F5EE]/40 rounded-[3rem] transform rotate-6 scale-95" />
              
              {/* Main image */}
              <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-card">
                <img
                  src="/images/logo.jpg"
                  alt="倾心有约"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0DB294]/10 to-transparent" />
              </div>

              {/* Floating card - QR Code */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 animate-float">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden">
                  <img
                    src="/images/qrcode.jpg"
                    alt="扫码关注"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-center text-gray-500 mt-2">扫码关注公众号</p>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#0DB294] text-white px-4 py-2 rounded-full shadow-lg animate-pulse-soft">
                <span className="text-sm font-medium">O2O模式</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
