import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
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

      // Info cards animation
      gsap.fromTo(
        infoRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: '公司地址',
      content: '重庆市渝北区',
      subContent: '倾心有约总部',
    },
    {
      icon: Phone,
      title: '联系电话',
      content: '请关注公众号咨询',
      subContent: '在线客服随时为您服务',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: 'contact@qingxinyouyue.com',
      subContent: '商务合作请邮件联系',
    },
    {
      icon: Clock,
      title: '服务时间',
      content: '周一至周日',
      subContent: '09:00 - 22:00',
    },
  ];

  const companyInfo = {
    name: '重庆易达汇润网络科技有限公司',
    founded: '2025年',
    brand: '倾心有约',
    icp: '渝ICP备2024019327号',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E6F7F4]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D6F5EE] rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div ref={contentRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7F4] rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-[#0DB294]" />
            <span className="text-sm text-[#0A5E4E] font-medium">联系我们</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A5E4E] mb-6">
            期待与您相遇
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            无论您有任何问题或建议，都欢迎与我们联系。
            我们将竭诚为您服务。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - QR Code and company info */}
          <div className="space-y-8">
            {/* QR Code card */}
            <div className="bg-gradient-to-br from-[#E6F7F4] to-white rounded-3xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-[#0A5E4E] mb-4 text-center">
                关注公众号
              </h3>
              <p className="text-gray-600 text-center mb-6">
                扫码关注"倾心有约"公众号，获取最新资讯和专属优惠
              </p>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-card">
                  <div className="w-48 h-48 rounded-xl overflow-hidden">
                    <img
                      src="images/qrcode.jpg"
                      alt="倾心有约公众号"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                微信扫描二维码，关注我的公众号
              </p>
            </div>

            {/* Company info */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E6F7F4]">
              <h3 className="text-lg font-bold text-[#0A5E4E] mb-4">企业信息</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">运营主体</span>
                  <span className="text-gray-700 font-medium">{companyInfo.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">成立时间</span>
                  <span className="text-gray-700 font-medium">{companyInfo.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">品牌名称</span>
                  <span className="text-gray-700 font-medium">{companyInfo.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">备案号</span>
                  <span className="text-gray-700 font-medium">{companyInfo.icp}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact info cards */}
          <div ref={infoRef} className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-[#E6F7F4] card-hover"
              >
                <div className="w-12 h-12 bg-[#E6F7F4] rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0DB294]">
                  <info.icon className="w-6 h-6 text-[#0DB294] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h4 className="text-sm text-gray-500 mb-1">{info.title}</h4>
                <p className="text-lg font-semibold text-[#0A5E4E]">{info.content}</p>
                <p className="text-sm text-gray-400 mt-1">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social media */}
        <div className="mt-16 lg:mt-20 text-center">
          <h3 className="text-lg font-semibold text-[#0A5E4E] mb-6">关注我们</h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-[#E6F7F4] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#0DB294] group"
            >
              <svg className="w-6 h-6 text-[#0DB294] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#E6F7F4] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#0DB294] group"
            >
              <svg className="w-6 h-6 text-[#0DB294] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#E6F7F4] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#0DB294] group"
            >
              <svg className="w-6 h-6 text-[#0DB294] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.096 0C4.976 0 .552 4.176.024 9.888c-.048.576.384 1.08.96 1.128h4.656c.48 0 .912-.336 1.008-.816.288-1.44 1.536-2.496 3.024-2.496 1.68 0 3.024 1.344 3.024 3.024 0 .72-.24 1.392-.672 1.92-.432.528-.48 1.296-.096 1.872l.528.768c.336.48.288 1.152-.144 1.536l-1.8 1.608c-.432.384-1.104.336-1.488-.096l-.528-.672c-.384-.48-1.104-.576-1.632-.24-1.2.768-2.64 1.2-4.176 1.2h-.384c-.576.048-1.056-.384-1.104-.96v-4.656c0-.48.336-.912.816-1.008 1.44-.288 2.496-1.536 2.496-3.024 0-1.68-1.344-3.024-3.024-3.024-1.488 0-2.736 1.056-3.024 2.496-.096.48-.528.816-1.008.816H.984c-.576-.048-1.008-.552-.96-1.128C.552 4.176 4.976 0 10.096 0zm3.888 12.912c.576 0 1.056.48 1.056 1.056 0 .576-.48 1.056-1.056 1.056-.576 0-1.056-.48-1.056-1.056 0-.576.48-1.056 1.056-1.056z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
