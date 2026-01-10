import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Wifi, ShieldCheck, Globe } from 'lucide-react';
import MagneticButton from './antigravity/MagneticButton';
import TiltCard from './antigravity/TiltCard';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f90fb044-e241-44f3-bfc8-ef86d722ad2e',
          ...formData,
          from_name: 'Portfolio Comms Link',
          to_email: 'chamikakasun33635@gmail.com',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Transmission Failed. Signal lost.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network Error. check local connection.');
    }
  };

  return (
    <section id="contact" className="relative py-32 container mx-auto px-6 overflow-visible">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4 text-primary-400">
          <Wifi size={16} className="animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase">Uplink Established</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-slate-900">Initiate</span> <span className="gradient-text">Protocol</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

        {/* LEFT: Coordinates / Info Terminal */}
        <div className="space-y-6">

          {/* Status Card */}
          <div className="bg-slate-100/20 border border-slate-300 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Globe size={100} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 text-green-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-lg">Secure Connection</h4>
                <p className="text-xs text-green-700 font-mono font-bold">ENCRYPTION: AES-256 // ACTIVE</p>
              </div>
            </div>
            <div className="h-px bg-slate-300 w-full mb-6" />
            <div className="space-y-2 font-mono text-sm text-slate-600 font-medium">
              <p>LAT: 6.840 N <span className="text-slate-400">|</span> LNG: 80.099 E</p>
              <p>LOC: PADUKKA, SECTOR 01</p>
              <p>FREQ: +94 70 327 4701</p>
            </div>
          </div>

          {/* Coordinates Grid */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Mail, label: 'COMMS_CHANNEL', value: 'chamikakasun33635@gmail.com', href: 'mailto:chamikakasun33635@gmail.com' },
              { icon: Phone, label: 'AUDIO_LINK', value: '+94 70 327 4701', href: 'tel:+94703274701' },
              { icon: MapPin, label: 'BASE_STATION', value: 'Padukka, Sri Lanka', href: 'https://maps.google.com' }
            ].map((item) => (
              <TiltCard key={item.label} className="w-full">
                <a
                  href={item.href}
                  className="block p-5 bg-slate-100/20 border border-slate-300 rounded-xl hover:bg-slate-200/20 transition-all group shadow-sm hover:border-blue-400"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-700 group-hover:text-slate-900 transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-600 mb-1">{item.label}</div>
                      <div className="text-slate-900 font-bold group-hover:text-blue-700 transition-colors">{item.value}</div>
                    </div>
                  </div>
                </a>
              </TiltCard>
            ))}
          </div>

        </div>

        {/* RIGHT: Transmission Form */}
        <TiltCard className="h-full">
          <div className="h-full bg-slate-100/20 backdrop-blur-xl border border-slate-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-start relative overflow-hidden">

            {/* Decorative Corner Markers */}
            <div className="absolute top-4 left-4 w-2 h-2 border-l-2 border-t-2 border-primary-500" />
            <div className="absolute top-4 right-4 w-2 h-2 border-r-2 border-t-2 border-primary-500" />
            <div className="absolute bottom-4 left-4 w-2 h-2 border-l-2 border-b-2 border-primary-500" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-r-2 border-b-2 border-primary-500" />

            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-blue-700 font-bold" htmlFor="name">AGENT_ID</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-100/20 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:outline-none focus:bg-slate-100/30 transition-all placeholder:text-slate-400 font-medium shadow-sm"
                    placeholder="Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-blue-700 font-bold" htmlFor="email">RETURN_ADDR</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-100/20 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:outline-none focus:bg-slate-100/30 transition-all placeholder:text-slate-400 font-medium shadow-sm"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-blue-700 font-bold" htmlFor="subject">DATA_HEADER</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-100/20 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:outline-none focus:bg-slate-100/30 transition-all placeholder:text-slate-400 font-medium shadow-sm"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-blue-700 font-bold" htmlFor="message">PAYLOAD</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-100/20 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:outline-none focus:bg-slate-100/30 transition-all placeholder:text-slate-400 resize-none font-medium shadow-sm"
                  placeholder="Enter your message..."
                />
              </div>

              {status === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm font-mono text-center">
                  TRANSMISSION_SUCCESSFUL
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm font-mono text-center">
                  ERROR: {errorMessage}
                </div>
              )}

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Wifi className="animate-ping w-4 h-4" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      TRANSMIT DATA
                    </>
                  )}
                </button>
              </MagneticButton>

            </form>
          </div>
        </TiltCard>

      </div>
    </section>
  );
};

export default ContactSection;