import React, { useContext, useState } from "react";

import HERO_IMG from "../assets/hero-img.png";
import { useNavigate } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I create a resume?",
      answer:
        "Click 'Get Started' and follow the guided form. It helps you fill in sections like education, experience, and skills step-by-step.",
    },
    {
      question: "Can I download my resume as a PDF?",
      answer:
        "Yes, once you're done editing, click on the export button to instantly download a professional-quality PDF.",
    },
    {
      question: "Is this resume builder free to use?",
      answer:
        "Yes, our core features are completely free. Premium templates and features may be available later.",
    },
    {
      question: "Can I edit my resume after saving?",
      answer:
        "Absolutely. Just log into your account and access your dashboard to edit any of your saved resumes.",
    },
    {
      question: "Do you offer resume templates?",
      answer:
        "Yes, we offer a variety of modern, clean, and professional templates that suit different industries.",
    },
    {
      question: "Is my data safe with ResuMate?",
      answer:
        "Your privacy is our priority. We store your data securely and never share it with third parties.",
    },
  ];

  const statsData = [
    { number: "50K+", label: "Resumes Created" },
    { number: "10K+", label: "Happy Users" },
    { number: "25+", label: "Templates" },
    { number: "98%", label: "Success Rate" },
  ];

  const howItWorksData = [
    {
      step: "01",
      title: "Create Account",
      description: "Sign up in seconds with your email or social accounts",
    },
    {
      step: "02",
      title: "Fill Your Details",
      description: "Add your experience, education, skills, and achievements",
    },
    {
      step: "03",
      title: "Choose Template",
      description: "Pick from our collection of professional, modern templates",
    },
    {
      step: "04",
      title: "Download & Apply",
      description: "Export your polished resume as PDF and land your dream job",
    },
  ];

  const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "ResuMate helped me land my dream job! The templates are stunning and the interface is so intuitive.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've tried many resume builders, but ResuMate is by far the best. Clean, professional, and easy to use.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "UX Designer at Meta",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The attention to detail in the templates is amazing. Got multiple interview calls within a week!",
      rating: 5,
    },
  ];

  const featuresData = [
    {
      title: "Easy Editing",
      description: "Update your resume sections with live preview and instant formatting.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Beautiful Templates",
      description: "Choose from modern, professional templates that are easy to customize.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "One-Click Export",
      description: "Download your resume instantly as a high-quality PDF with one click.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "AI-Powered Suggestions",
      description: "Get smart recommendations to improve your resume content and keywords.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "ATS Friendly",
      description: "Our templates are optimized to pass Applicant Tracking Systems.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Cloud Storage",
      description: "Access your resumes from anywhere, anytime with secure cloud storage.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  // Icons as separate component functions to avoid JSX in data
  const UserIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const EditIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );

  const TemplateIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );

  const stepIcons = [UserIcon, EditIcon, TemplateIcon, DownloadIcon];

  const featureIcons = [
    // Easy Editing
    <svg key="edit" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>,
    // Beautiful Templates
    <svg key="template" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>,
    // One-Click Export
    <svg key="export" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    // AI-Powered
    <svg key="ai" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    // ATS Friendly
    <svg key="ats" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // Cloud Storage
    <svg key="cloud" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>,
  ];

  return (
    <div className="w-full min-h-full bg-gradient-to-b from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          style={{ animation: 'blob 7s infinite' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          style={{ animation: 'blob 7s infinite 2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ animation: 'blob 7s infinite 4s' }}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-2.5 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                ResuMate
              </span>
            </div>

            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="group relative px-6 py-2.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                onClick={() => setOpenAuthModal(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-105"></div>
                <span className="relative text-white flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login / Sign Up
                </span>
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-sm font-medium text-purple-700">
                  #1 Resume Builder for 2026
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Build Your{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Dream Resume
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8.5C50 2 150 2 198 8.5" stroke="url(#underlineGradient)" strokeWidth="4" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underlineGradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#9333ea" />
                        <stop offset="1" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                <span className="text-gray-800">Effortlessly</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Craft a standout resume in minutes with our smart and intuitive
                resume builder. Trusted by professionals worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%]"
                  onClick={handleCTA}
                  style={{ animation: 'shimmer 3s linear infinite' }}
                >
                  <span className="relative flex items-center gap-2">
                    Get Started Free
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                <button className="group px-8 py-4 rounded-2xl font-semibold border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 bg-white">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${20 + i}.jpg`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">From 10,000+ reviews</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-80"
                  style={{ animation: 'float 3s ease-in-out infinite' }}
                />
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60"
                  style={{ animation: 'float 3s ease-in-out infinite 1s' }}
                />
                <img
                  src={HERO_IMG}
                  alt="Resume Builder Preview"
                  className="relative w-full rounded-3xl shadow-2xl shadow-purple-500/20 border border-white/50"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <section className="mb-24">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-1">
              <div className="bg-white rounded-[22px] p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {statsData.map((stat, index) => (
                    <div key={index} className="text-center group cursor-default">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                POWERFUL FEATURES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Features That Make You{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Shine
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to create a professional resume that stands out from the crowd
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {featureIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4">
                SIMPLE PROCESS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How It{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Create your perfect resume in just 4 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksData.map((item, index) => {
                const IconComponent = stepIcons[index];
                return (
                  <div key={index} className="relative group">
                    {index < howItWorksData.length - 1 && (
                      <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
                    )}
                    <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {item.step}
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                TESTIMONIALS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Loved by{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Professionals
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See what our users have to say about their experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 right-8">
                    <svg className="w-12 h-12 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-purple-100 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Got questions? We&apos;ve got answers
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openFAQ === index
                      ? "border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg"
                      : "border-gray-200 bg-white hover:border-purple-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left p-6"
                  >
                    <span className="font-semibold text-gray-800 text-lg pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFAQ === index
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                      style={{
                        transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openFAQ === index ? '200px' : '0px',
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-24">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-12 md:p-16">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Your Perfect Resume?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of professionals who have already landed their dream jobs with ResuMate.
                </p>
                <button
                  onClick={handleCTA}
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-purple-600 font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Start Building Now
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2.5 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold">ResuMate</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Build professional resumes that get you hired. Simple, fast, and effective.
                </p>
                <div className="flex gap-4">
                  {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Product</h4>
                <ul className="space-y-3">
                  {["Features", "Templates", "Pricing", "Examples"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Resources</h4>
                <ul className="space-y-3">
                  {["Blog", "Resume Guide", "Career Tips", "Help Center"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Company</h4>
                <ul className="space-y-3">
                  {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col items-center gap-2 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 ResuMate. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Developed By : 2020/ICTS/68_ULH
            </p>
          </div>
          </div>
        </footer>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>

      {/* Global Keyframe Styles - Add this to your index.css or App.css */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
