import { useEffect, useRef } from 'react';
import { UserPlus, Briefcase, Building2, ArrowRight, Check, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Join() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

  const joinOptions = [
    {
      icon: UserPlus,
      title: '成为用户',
      subtitle: '享受专业服务',
      description: '注册成为倾心有约用户，即可享受我们提供的高品质上门陪伴与生活服务。新用户注册即享专属优惠。',
      benefits: [
        '便捷的服务预约',
        '专业的服务团队',
        '安全的保障体系',
        '专属的会员权益',
      ],
      cta: '立即注册',
      ctaAction: () => {
        const qrSection = document.querySelector('#contact');
        if (qrSection) {
          qrSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
      color: 'from-[#0DB294] to-[#0A5E4E]',
      bgColor: 'bg-[#E6F7F4]',
      featured: false,
    },
    {
      icon: Briefcase,
      title: '成为服务人员',
      subtitle: '开启职业新篇章',
      description: '加入我们的专业服务团队，获得系统培训和稳定收入。我们提供灵活的工作时间和完善的职业发展通道。',
      benefits: [
        '专业的技能培训',
        '灵活的工作时间',
        '稳定的收入来源',
        '清晰的晋升通道',
      ],
      cta: '申请加入',
      ctaAction: () => {
        const qrSection = document.querySelector('#contact');
        if (qrSection) {
          qrSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
      color: 'from-[#0A5E4E] to-[#0DB294]',
      bgColor: 'bg-[#D6F5EE]',
      featured: true,
    },
    {
      icon: Building2,
      title: '企业合作',
      subtitle: '携手共创未来',
      description: '与倾心有约建立战略合作关系，共同开拓大健康上门服务市场。我们提供多种合作模式和全方位的支持。',
      benefits: [
        '多元化的合作模式',
        '完善的培训体系',
        '强大的品牌支持',
        '持续的技术升级',
      ],
      cta: '洽谈合作',
      ctaAction: () => {
        const qrSection = document.querySelector('#contact');
        if (qrSection) {
          qrSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
      color: 'from-[#0DB294] to-[#0A5E4E]',
      bgColor: 'bg-[#E6F7F4]',
      featured: false,
    },
  ];

  return (
    <section
      id="join"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-[#F5F5F5] to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-[#E6F7F4] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#D6F5EE] rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7F4] rounded-full mb-6">
            <Star className="w-4 h-4 text-[#0DB294]" />
            <span className="text-sm text-[#0A5E4E] font-medium">加入我们</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A5E4E] mb-6">
            与倾心有约同行
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            无论您是想享受服务的用户、寻求发展的服务人员，
            还是希望合作的企业伙伴，我们都期待与您携手。
          </p>
        </div>

        {/* Join cards */}
        <div
          ref={cardsRef}
          className="grid lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {joinOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-card transition-all duration-500 card-hover ${
                option.featured ? 'lg:scale-105 shadow-card-hover' : ''
              }`}
            >
              {/* Featured badge */}
              {option.featured && (
                <div className="absolute top-0 right-0 bg-[#0DB294] text-white px-4 py-1 text-sm font-medium rounded-bl-xl z-10">
                  热门选择
                </div>
              )}
              
              {/* Header gradient */}
              <div className={`h-2 bg-gradient-to-r ${option.color}`} />
              
              <div className="p-6 lg:p-8">
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${option.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                    <option.icon className="w-7 h-7 text-[#0DB294]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A5E4E]">{option.title}</h3>
                    <p className="text-sm text-[#0DB294] font-medium">{option.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {option.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {option.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#E6F7F4] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#0DB294]" />
                      </div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={option.ctaAction}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-medium rounded-xl transition-all duration-300 ${
                    option.featured
                      ? 'bg-[#0DB294] text-white hover:bg-[#0A5E4E] hover:shadow-lg'
                      : 'bg-[#E6F7F4] text-[#0DB294] hover:bg-[#0DB294] hover:text-white'
                  }`}
                >
                  {option.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-card">
            <span className="text-gray-600">已有疑问？</span>
            <button 
              onClick={() => document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#0DB294] font-medium hover:text-[#0A5E4E] transition-colors"
            >
              查看常见问题
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
