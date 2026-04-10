import { useEffect, useRef, useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      // FAQ items animation
      gsap.fromTo(
        faqRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: '倾心有约提供哪些服务？',
      answer: '倾心有约主要提供三大类服务：放松按摩（专业理疗按摩服务）、情感陪伴（城市玩伴服务）、生活协助（家务整理、购物代办等生活服务）。所有服务均由经过专业培训的服务人员提供，确保服务质量。',
    },
    {
      question: '如何预约服务？',
      answer: '您可以通过关注"倾心有约"微信公众号进行服务预约。在公众号内选择您需要的服务类型、预约时间和服务地址，系统会为您匹配最合适的服务人员。预约成功后，您将收到确认通知。',
    },
    {
      question: '服务人员是否经过专业培训？',
      answer: '是的，所有服务人员都经过严格筛选和专业培训。我们开设了专业化养生按摩课程培训指导服务，以及服务人员礼仪培训课程。每位服务人员都需要通过考核才能上岗服务，确保为用户提供专业、优质的服务体验。',
    },
    {
      question: '如何保障服务安全？',
      answer: '我们建立了四位一体防护体系：实名认证（身份证、健康证、资格证核验）、合规约束（签署承诺书、违规处罚机制）、品牌保护（正规服务标识）、资质齐全（营业执照、ICP备案）。同时提供24小时客服支持和投诉快速响应机制。',
    },
    {
      question: '服务不满意可以退款吗？',
      answer: '我们重视每一位用户的服务体验。如果您对服务不满意，可以在服务完成后24小时内联系客服反馈。经核实后，我们将根据具体情况提供重新服务或退款处理，确保您的权益得到保障。',
    },
    {
      question: '如何成为倾心有约的服务人员？',
      answer: '欢迎加入我们的服务团队！您可以通过关注"倾心有约"公众号，在"加入我们"栏目提交申请。我们需要您提供身份证、健康证等相关资料，通过审核后将安排专业培训。培训合格后即可上岗服务，享受灵活的工作时间和稳定的收入来源。',
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F5] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E6F7F4] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6F5EE] rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7F4] rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-[#0DB294]" />
            <span className="text-sm text-[#0A5E4E] font-medium">常见问题</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A5E4E] mb-6">
            您可能想知道的
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            我们整理了用户最关心的问题，希望能帮助您更好地了解倾心有约。
            如有其他疑问，欢迎随时联系我们。
          </p>
        </div>

        {/* FAQ items */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-card' : 'shadow-soft'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    openIndex === index ? 'bg-[#0DB294]' : 'bg-[#E6F7F4]'
                  }`}>
                    <span className={`text-sm font-bold transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-[#0DB294]'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <span className={`font-semibold transition-colors duration-300 ${
                    openIndex === index ? 'text-[#0DB294]' : 'text-[#0A5E4E]'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pl-18">
                  <p className="text-gray-600 leading-relaxed pl-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 lg:p-8 bg-white rounded-2xl shadow-card">
            <div className="w-12 h-12 bg-[#E6F7F4] rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-[#0DB294]" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-[#0A5E4E] mb-1">
                还有其他问题？
              </h4>
              <p className="text-sm text-gray-500">
                我们的客服团队随时为您解答
              </p>
            </div>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-[#0DB294] text-white font-medium rounded-xl transition-all duration-300 hover:bg-[#0A5E4E] hover:shadow-lg whitespace-nowrap"
            >
              联系客服
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
