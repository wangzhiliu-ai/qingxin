import { useEffect, useRef } from 'react';
import { Target, Heart, TrendingUp, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: '我们的使命',
      description: '打造高品质上门陪伴与生活服务平台，让专业服务触手可及，为用户创造更美好的生活体验。',
    },
    {
      icon: Heart,
      title: '我们的理念',
      description: '以用户为中心，用心服务每一位客户。我们相信，真诚与专业是赢得信任的根本。',
    },
    {
      icon: TrendingUp,
      title: '发展历程',
      description: '2025年创立于重庆，经过一年多的精心筹备，倾心有约正式上线，开启大健康上门服务新篇章。',
    },
    {
      icon: Award,
      title: '品牌愿景',
      description: '成为行业领先的综合性服务平台，覆盖更多元化的生活服务领域，服务千万家庭。',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E6F7F4]/50 to-transparent pointer-events-none" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div ref={contentRef} className="max-w-4xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7F4] rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#0DB294]" />
            <span className="text-sm text-[#0A5E4E] font-medium">关于我们</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A5E4E] mb-6">
            品牌故事
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            现如今，当我们在各大社交网络平台或者是电商APP上搜索"上门按摩，城市玩伴"时，
            已经能看到大量立足于本地的上门按摩和城市玩伴入口，但更多的品牌在标准化、品牌化、
            专业化、正规化等角度有太多欠缺。经过一年多时间，我们创立了倾心有约。
          </p>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="leading-relaxed">
              倾心有约采用互联网+大健康及玩伴服务的新兴运营模式，开展全国大健康及陪伴板块业务，
              以按摩理疗和城市玩伴为基础，运用互联网技术为客户第一时间提供高品质的产品和服务。
            </p>
            <p className="leading-relaxed mt-4">
              我们在做好平台研发的同时，不断优化平台机制，前端品牌的立意和后端服务培训同生共济，
              始终将产品服务于品牌生命力紧紧相连。总部位于重庆市渝北区，品牌对全国城市进行总控规范流程管理，
              制定标准化城市商家与加盟商运营流程，开设了专业化养生按摩专业课程培训指导服务。
            </p>
          </div>
        </div>

        {/* Value cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-[#E6F7F4] card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#E6F7F4] rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#0DB294]">
                <value.icon className="w-7 h-7 text-[#0DB294] transition-colors duration-300 group-hover:text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-[#0A5E4E] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
              
              {/* Hover decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0DB294] to-[#0A5E4E] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Brand layout section */}
        <div className="mt-16 lg:mt-24 bg-gradient-to-br from-[#E6F7F4] to-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0A5E4E] mb-4">
                品牌布局
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                倾心有约以O2O模式开展上门按摩和城市玩伴一站式服务业务，运用三体架构：
                线上+线下+CRM为发展基础，打造数字化信息服务平台。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0DB294] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A5E4E]">线上平台</h4>
                    <p className="text-sm text-gray-600">便捷的预约系统，实时服务追踪</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0DB294] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A5E4E]">线下服务</h4>
                    <p className="text-sm text-gray-600">专业技师团队，标准化服务流程</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0DB294] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A5E4E]">CRM系统</h4>
                    <p className="text-sm text-gray-600">精准用户管理，个性化服务推荐</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0DB294]/20 to-[#D6F5EE]/40 rounded-full animate-pulse-soft" />
                <div className="absolute inset-4 bg-white rounded-full shadow-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-soft">
                      <img
                        src="images/logo.jpg"
                        alt="倾心有约"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-[#0A5E4E]">倾心有约</h4>
                    <p className="text-sm text-gray-500 mt-1">一见倾心</p>
                  </div>
                </div>
                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-card">
                  <span className="text-sm font-medium text-[#0DB294]">线上</span>
                </div>
                <div className="absolute bottom-8 left-0 bg-white px-4 py-2 rounded-full shadow-card">
                  <span className="text-sm font-medium text-[#0DB294]">线下</span>
                </div>
                <div className="absolute bottom-8 right-0 bg-white px-4 py-2 rounded-full shadow-card">
                  <span className="text-sm font-medium text-[#0DB294]">CRM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
