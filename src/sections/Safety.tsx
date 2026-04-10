import { useEffect, useRef } from 'react';
import { Shield, CheckCircle, UserCheck, FileCheck, Phone, Lock, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Safety() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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

      // Pillars animation
      gsap.fromTo(
        pillarsRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Process animation
      gsap.fromTo(
        processRef.current?.children || [],
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: UserCheck,
      number: '01',
      title: '实名认证',
      description: '所有服务人员必须通过官方渠道核验身份证信息，确保身份真实可追溯。',
      items: ['身份证核验', '健康证审核', '资格证书验证'],
    },
    {
      icon: FileCheck,
      number: '02',
      title: '合规约束',
      description: '签署服务承诺书，建立完善的违规处罚机制，确保服务规范。',
      items: ['签署承诺书', '违规处罚机制', '平台承担责任'],
    },
    {
      icon: Eye,
      number: '03',
      title: '品牌保护',
      description: '明确标注服务来源，保护合作方品牌形象，传递合规理念。',
      items: ['正规服务标识', '品牌清晰标注', '形象保护机制'],
    },
    {
      icon: Lock,
      number: '04',
      title: '资质齐全',
      description: '平台具备完整合法资质，可在官方渠道查询验证。',
      items: ['营业执照', 'ICP备案', '税务登记'],
    },
  ];

  const processes = [
    { icon: Phone, title: '24小时客服', desc: '全天候在线支持' },
    { icon: CheckCircle, title: '投诉快速响应', desc: '及时处理反馈' },
    { icon: Shield, title: '紧急情况介入', desc: '第一时间处理' },
    { icon: Lock, title: '隐私保护', desc: '严格保密机制' },
  ];

  return (
    <section
      id="safety"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#E6F7F4] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#D6F5EE] rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7F4] rounded-full mb-6">
            <Shield className="w-4 h-4 text-[#0DB294]" />
            <span className="text-sm text-[#0A5E4E] font-medium">安全保障</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A5E4E] mb-6">
            四位一体防护体系
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            从源头到过程、从人员到平台、从法律到品牌，
            构建完整的安全防线，让您安心享受服务。
          </p>
        </div>

        {/* Four pillars */}
        <div
          ref={pillarsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20"
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-[#E6F7F4] card-hover overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-[#E6F7F4] group-hover:text-[#D6F5EE] transition-colors duration-300">
                {pillar.number}
              </div>
              
              {/* Icon */}
              <div className="relative w-14 h-14 bg-[#E6F7F4] rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#0DB294]">
                <pillar.icon className="w-7 h-7 text-[#0DB294] transition-colors duration-300 group-hover:text-white" />
              </div>
              
              {/* Content */}
              <h3 className="relative text-xl font-semibold text-[#0A5E4E] mb-3">
                {pillar.title}
              </h3>
              <p className="relative text-sm text-gray-600 leading-relaxed mb-4">
                {pillar.description}
              </p>
              
              {/* Items */}
              <ul className="relative space-y-2">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-[#0DB294] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Hover decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0DB294] to-[#0A5E4E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Safety promise banner */}
        <div className="bg-gradient-to-r from-[#0A5E4E] to-[#0DB294] rounded-3xl p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                安全承诺
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                四大保障支柱相互支撑、层层递进，从源头到过程、从技师到平台、
                从法律到品牌，构建起完整的安全防线。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>零风险</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>零责任</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span>零顾虑</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Process section */}
        <div>
          <h3 className="text-2xl font-bold text-[#0A5E4E] text-center mb-8">
            完善的保障机制
          </h3>
          <div
            ref={processRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processes.map((process, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl transition-all duration-300 hover:bg-[#E6F7F4]"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft transition-all duration-300 group-hover:bg-[#0DB294]">
                  <process.icon className="w-6 h-6 text-[#0DB294] transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A5E4E]">{process.title}</h4>
                  <p className="text-sm text-gray-500">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
