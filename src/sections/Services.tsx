import { useEffect, useRef, useState } from 'react';
import { Sparkles, Users, Home, ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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

  const services = [
    {
      icon: Sparkles,
      title: '放松按摩',
      subtitle: '专业理疗服务',
      description: '通过舒缓的按摩技巧帮助您放松身心，缓解疲劳。我们的技师经过专业培训，掌握多种按摩手法，为您提供个性化的理疗方案。',
      scenes: ['居家放松', '办公减压', '运动后恢复'],
      audience: '上班族、运动爱好者、需要放松的人群',
      features: ['专业技师上门服务', '多种按摩手法可选', '个性化定制方案', '安全卫生保障'],
      color: 'from-[#0DB294] to-[#0A5E4E]',
      bgColor: 'bg-[#E6F7F4]',
    },
    {
      icon: Users,
      title: '情感陪伴',
      subtitle: '城市玩伴服务',
      description: '提供温暖的陪伴与交流，让您在繁忙的都市生活中找到心灵的慰藉。我们的玩伴伙伴经过严格筛选，真诚友善。',
      scenes: ['城市漫步', '咖啡聊天', '文化活动'],
      audience: '独居人士、社交需求者、需要陪伴的人群',
      features: ['严格筛选的玩伴伙伴', '多样化的活动选择', '安全可靠的陪伴', '尊重隐私保护'],
      color: 'from-[#0A5E4E] to-[#0DB294]',
      bgColor: 'bg-[#D6F5EE]',
    },
    {
      icon: Home,
      title: '生活协助',
      subtitle: '贴心生活服务',
      description: '为您解决日常生活中的各种琐事，让您有更多时间享受生活。从家务整理到 errands 代办，我们都能帮您处理。',
      scenes: ['家务整理', '购物代办', '临时看护'],
      audience: '忙碌人士、老年人、需要帮助的家庭',
      features: ['灵活的服务时间', '专业的服务团队', '贴心的服务态度', '透明的收费标准'],
      color: 'from-[#0DB294] to-[#0A5E4E]',
      bgColor: 'bg-[#E6F7F4]',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F5] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-[#E6F7F4] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#D6F5EE] rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7F4] rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0DB294]" />
            <span className="text-sm text-[#0A5E4E] font-medium">服务介绍</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A5E4E] mb-6">
            三大核心服务
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            我们提供全方位的上门陪伴与生活服务，满足您在不同场景下的需求，
            让专业与温暖触手可及。
          </p>
        </div>

        {/* Service cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-card transition-all duration-500 ${
                activeCard === index ? 'lg:scale-105 shadow-card-hover' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Header gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              
              <div className="p-6 lg:p-8">
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-7 h-7 text-[#0DB294]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A5E4E]">{service.title}</h3>
                    <p className="text-sm text-[#0DB294] font-medium">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scenes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">适用场景</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.scenes.map((scene, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F5F5F5] text-gray-600 text-sm rounded-full"
                      >
                        {scene}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Audience */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">适用人群</h4>
                  <p className="text-sm text-gray-500">{service.audience}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0DB294] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#E6F7F4] text-[#0DB294] font-medium rounded-xl transition-all duration-300 group-hover:bg-[#0DB294] group-hover:text-white">
                  了解详情
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 lg:p-8 bg-white rounded-2xl shadow-card">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-[#0A5E4E] mb-1">
                不确定需要哪种服务？
              </h4>
              <p className="text-sm text-gray-500">
                我们的客服团队将为您推荐最适合的服务方案
              </p>
            </div>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-[#0DB294] text-white font-medium rounded-xl transition-all duration-300 hover:bg-[#0A5E4E] hover:shadow-lg whitespace-nowrap"
            >
              咨询客服
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
