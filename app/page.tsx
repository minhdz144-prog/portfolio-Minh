"use client";
import Image from "next/image";
import { 
  Building, 
  MapPin, 
  Calendar, 
  Award, 
  Monitor, 
  PenTool, 
  ShoppingCart,
  Phone,
  Mail,
  Globe
} from "lucide-react";
import { profileData, skillsData, projectsData } from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-blue-600">
          Minh<span className="text-slate-800">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center text-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-white/70 z-0"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4">
            I'm Giang Văn Minh <br /> A Front-end Developer
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto">
            {profileData.bio}
          </p>
          <a href="#about" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg">
            Khám phá thêm
          </a>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/image-1.jpg" 
              alt="Giang Văn Minh" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">My Bio</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Xin chào! Mình là Giang Văn Minh, một Front-end Developer đam mê với việc xây dựng các giao diện web đẹp mắt, tối ưu và mang lại trải nghiệm người dùng tuyệt vời. 
              Mình luôn tìm tòi và cập nhật những công nghệ mới nhất để áp dụng vào các dự án.
            </p>
            
            <div className="space-y-6 mt-8">
              {skillsData.map((skill, index) => {
                const percentage = skill.level.includes("Advanced") ? 90 : skill.level.includes("Intermediate") ? 75 : 85;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-slate-800">
                      <span>{skill.name}</span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#contact" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg">Hire Me</a>
              <a href={profileData.githubUrl} target="_blank" className="px-8 py-3 bg-slate-100 text-slate-800 font-bold rounded-full hover:bg-slate-200 transition">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">My Portfolio</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Một số dự án nổi bật mình đã thực hiện trong quá trình học tập và làm việc.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <a href={project.link} target="_blank" key={idx} className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white h-[300px]">
                <Image 
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&sig=${idx}`} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <div className="text-blue-300 text-sm font-medium">{project.tech.join(", ")}</div>
                </div>
              </a>
            ))}
            
            <div className="group block relative rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <Image src="/images/image-2.jpg" alt="Gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"; }}/>
            </div>
            <div className="group block relative rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <Image src="/images/image-3.jpg" alt="Gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"; }}/>
            </div>
            <div className="group block relative rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <Image src="/images/image-4.jpg" alt="Gallery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"; }}/>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Monitor size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Web Development</h3>
            <p className="text-slate-600">Xây dựng ứng dụng web hiện đại, mượt mà và tối ưu hiệu suất sử dụng React, Next.js.</p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <PenTool size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
            <p className="text-slate-600">Thiết kế giao diện người dùng thân thiện, logic và mang tính thẩm mỹ cao với Tailwind CSS.</p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">eCommerce</h3>
            <p className="text-slate-600">Phát triển các trang thương mại điện tử chuyên nghiệp, tích hợp giỏ hàng và thanh toán.</p>
          </div>
        </div>
      </section>

      {/* --- RESUME SECTION --- */}
      <section id="resume" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Resume</h2>
          </div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div className="hidden md:block">
              <div className="relative h-[800px] rounded-2xl overflow-hidden shadow-xl sticky top-24">
                <Image src="/images/image-1.jpg" alt="Profile" fill className="object-cover" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80"; }}/>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Work Experience</h3>
              
              <div className="space-y-12 mb-16">
                <div className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-xl font-bold text-slate-900">Front-end Developer</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium my-3">
                    <span className="flex items-center gap-1"><Building size={16}/> Laztar Peep Internship</span>
                    <span className="flex items-center gap-1"><MapPin size={16}/> Remote</span>
                    <span className="flex items-center gap-1 text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Fulltime</span>
                    <span className="flex items-center gap-1"><Calendar size={16}/> 09/2026 - Present</span>
                  </div>
                  <p className="text-slate-600">Thực tập sinh lập trình Front-end. Xây dựng SaaS Landing Page, Portfolio cá nhân bằng Next.js và Tailwind CSS.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Education</h3>
              
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-slate-900">Bachelor of Software Engineering</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium my-3">
                    <span className="flex items-center gap-1"><Award size={16}/> University XYZ</span>
                    <span className="flex items-center gap-1"><Calendar size={16}/> 2022 - 2026</span>
                  </div>
                  <p className="text-slate-600">Chuyên ngành kỹ thuật phần mềm, tập trung vào phát triển ứng dụng web và hệ thống thông tin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Contact Me</h2>
        </div>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <form className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">First name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Last name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2">Email address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"></textarea>
            </div>
            <button type="button" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg w-full md:w-auto">
              Send Message
            </button>
          </form>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" />
                <span className="text-slate-600">Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-blue-600 mt-1" />
                <span className="text-slate-600">+84 123 456 789</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-blue-600 mt-1" />
                <span className="text-slate-600">{profileData.email}</span>
              </li>
              <li className="flex items-start gap-4">
                <Globe className="text-blue-600 mt-1" />
                <a href={profileData.githubUrl} className="text-blue-600 hover:underline">{profileData.githubUrl}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">About Orbit<span className="text-blue-500">.</span></h3>
            <p className="max-w-md">Một mẫu giao diện lấy cảm hứng từ template Orbit của Colorlib, được xây dựng lại bằng Next.js và Tailwind CSS.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-sm font-bold">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-sm font-bold">TW</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-sm font-bold">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-sm font-bold">IN</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>Copyright ©2026 All rights reserved | This template is inspired by Colorlib and made by {profileData.name}</p>
        </div>
      </footer>

    </main>
  );
}