/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Zap, 
  BarChart3, 
  Clock, 
  Menu, 
  X,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#about' },
    { name: 'Usługi', href: '#services' },
    { name: 'Jak działamy', href: '#how-it-works' },
    { name: 'Zespół', href: '#team' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              FIN<span className="text-accent">REAL</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:222908181" 
              className="flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              <Phone size={18} />
              22 290 81 81
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="tel:222908181" 
                  className="flex items-center justify-center gap-2 bg-accent text-white w-full py-3 rounded-lg font-bold"
                >
                  <Phone size={20} />
                  22 290 81 81
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/finance/1920/1080?blur=2" 
          alt="Background" 
          className="w-full h-full object-cover brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wide uppercase mb-6 border border-accent/30">
              Ponad 91% skuteczności
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Konsolidacja chwilówek <br />
              <span className="text-accent">bez zdolności kredytowej</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              W Finreal wiemy, w jakich instytucjach finansowych jest największa szansa na uzyskanie kredytu. Zła historia w BIK to nie problem. Zawsze staramy się o jak najlepsze finansowanie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                Sprawdź swoją ofertę
                <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                Nasze usługi
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-2 rounded-full">
                  <CheckCircle2 className="text-accent" size={20} />
                </div>
                <span className="text-white font-medium">Bez BIK/KRD</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-2 rounded-full">
                  <CheckCircle2 className="text-accent" size={20} />
                </div>
                <span className="text-white font-medium">Szybka decyzja</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-2 rounded-full">
                  <CheckCircle2 className="text-accent" size={20} />
                </div>
                <span className="text-white font-medium">Minimum formalności</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Kredyt Konsolidacyjny',
      description: 'Połącz wszystkie swoje zobowiązania w jedną, niską ratę. Pomagamy skonsolidować chwilówki i kredyty bankowe.',
      icon: <BarChart3 className="text-primary" size={32} />,
      link: '#'
    },
    {
      title: 'Kredyt dla Firm',
      description: 'Finansowanie dla nowych i istniejących firm. Kredyty obrotowe, inwestycyjne oraz leasingi na atrakcyjnych warunkach.',
      icon: <ShieldCheck className="text-primary" size={32} />,
      link: '#'
    },
    {
      title: 'Konsolidacja Chwilówek',
      description: 'Specjalizujemy się w trudnych przypadkach. Pomagamy wyjść z pętli zadłużenia nawet przy negatywnych wpisach w bazach.',
      icon: <Zap className="text-primary" size={32} />,
      link: '#'
    },
    {
      title: 'Kredyt Gotówkowy',
      description: 'Szybka gotówka na dowolny cel. Dopasujemy ofertę do Twoich możliwości finansowych i potrzeb.',
      icon: <Clock className="text-primary" size={32} />,
      link: '#'
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">W czym możemy Ci pomóc?</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Oferujemy szeroki wachlarz produktów finansowych dopasowanych do Twojej indywidualnej sytuacji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: "group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href={service.link} className="text-primary font-bold flex items-center gap-2 group-hover:text-accent transition-colors">
                Dowiedz się więcej
                <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Dlaczego warto współpracować <br /> z <span className="text-primary">Finreal</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Jesteśmy zespołem doradców kredytowych z wieloletnim doświadczeniem. Naszą misją jest pomaganie klientom w najtrudniejszych sytuacjach finansowych.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Indywidualne podejście</h4>
                    <p className="text-gray-600">Każda sprawa jest inna. Analizujemy Twoją sytuację i szukamy rozwiązania tam, gdzie inni odmówili.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Bezpieczeństwo i dyskrecja</h4>
                    <p className="text-gray-600">Twoje dane są u nas bezpieczne. Działamy zgodnie z najwyższymi standardami etyki zawodowej.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Wysoka skuteczność</h4>
                    <p className="text-gray-600">Ponad 91% naszych klientów otrzymuje pozytywną decyzję kredytową.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://picsum.photos/seed/consulting/800/600" 
                alt="Finreal Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-gray-600 font-medium">Lat doświadczenia</div>
              </div>
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Analiza',
      description: 'Bezpłatnie analizujemy Twoją sytuację finansową i historię w bazach BIK, KRD.'
    },
    {
      number: '02',
      title: 'Dopasowanie',
      description: 'Wybieramy instytucje finansowe, które mają najlepszą ofertę dla Ciebie.'
    },
    {
      number: '03',
      title: 'Realizacja',
      description: 'Kompletujemy dokumenty i przeprowadzamy Cię przez cały proces aż do wypłaty środków.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak działamy?</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Nasz proces jest prosty, przejrzysty i nastawiony na Twój sukces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-6xl font-black text-white/10 absolute -top-10 left-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="text-accent/40" size={40} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    {
      name: 'Krystian',
      role: 'Ekspert Kredytowy',
      image: 'https://picsum.photos/seed/krystian/400/500'
    },
    {
      name: 'Filip',
      role: 'Doradca Biznesowy',
      image: 'https://picsum.photos/seed/filip/400/500'
    },
    {
      name: 'Dorota',
      role: 'Specjalista ds. Konsolidacji',
      image: 'https://picsum.photos/seed/dorota/400/500'
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Poznaj nasz zespół</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Jesteśmy ekspertami, którzy z pasją pomagają innym odzyskać spokój finansowy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <button className="bg-white text-primary px-6 py-2 rounded-full font-bold flex items-center gap-2">
                    Kontakt <MessageSquare size={18} />
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Wysyłanie...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Wystąpił błąd.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Błąd połączenia z serwerem.' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 md:p-16 bg-primary text-white">
            <h2 className="text-3xl font-bold mb-8">Skontaktuj się z nami</h2>
            <p className="text-blue-100 mb-12 text-lg">
              Masz pytania? Chcesz sprawdzić swoją zdolność? Zadzwoń lub napisz do nas – odpowiemy najszybciej jak to możliwe.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Phone className="text-accent" size={28} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold tracking-wider">Zadzwoń do nas</p>
                  <a href="tel:222908181" className="text-2xl font-bold hover:text-accent transition-colors">22 290 81 81</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Mail className="text-accent" size={28} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold tracking-wider">Napisz e-mail</p>
                  <a href="mailto:biuro@finreal.pl" className="text-2xl font-bold hover:text-accent transition-colors">biuro@finreal.pl</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-10 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Imię</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                    placeholder="Jan" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nazwisko</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                    placeholder="Kowalski" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                    placeholder="jan@kowalski.pl" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Numer telefonu (opcjonalnie)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                    placeholder="+48 000 000 000" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Wiadomość</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                  placeholder="W czym możemy Ci pomóc?"
                ></textarea>
              </div>
              
              {status.type !== 'idle' && (
                <div className={`p-4 rounded-lg text-sm font-medium ${
                  status.type === 'loading' ? 'bg-blue-50 text-blue-700' :
                  status.type === 'success' ? 'bg-green-50 text-green-700' :
                  'bg-red-50 text-red-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
              <p className="text-xs text-gray-500 text-center">
                Klikając przycisk, wyrażasz zgodę na przetwarzanie danych osobowych zgodnie z polityką prywatności.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tight mb-6 block">
              FIN<span className="text-accent">REAL</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-6">
              Profesjonalne doradztwo kredytowe i konsolidacja chwilówek. Pomagamy odzyskać płynność finansową nawet w najtrudniejszych sytuacjach.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Szybkie linki</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-accent transition-colors">O nas</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Usługi</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">Jak działamy</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Zespół</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Usługi</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Kredyt konsolidacyjny</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kredyt dla firm</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Konsolidacja chwilówek</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kredyt gotówkowy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Biuro</h4>
            <p className="text-gray-400 mb-4">
              ul. Przykładowa 123<br />
              00-001 Warszawa
            </p>
            <p className="text-gray-400">
              Pon - Pt: 9:00 - 18:00<br />
              Sob: 10:00 - 14:00
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10">
          <div className="bg-gray-800/50 p-6 rounded-xl mb-10">
            <h5 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">Przykład reprezentatywny</h5>
            <p className="text-xs text-gray-500 leading-relaxed">
              Dla kredytu konsolidacyjnego w kwocie 50 000 zł, na okres 120 miesięcy, z oprocentowaniem zmiennym 12,5% w skali roku, prowizją 5%, RRSO wynosi 14,8%. Całkowita kwota do spłaty: 89 450 zł. Rata miesięczna: 745,42 zł. Ostateczne warunki kredytowania zależą od wiarygodności kredytowej klienta, daty wypłaty kredytu oraz daty płatności pierwszej raty. Niniejsza informacja nie stanowi oferty w rozumieniu art. 66 Kodeksu Cywilnego.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Finreal. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Team />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="tel:222908181" 
          className="bg-accent text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
