import React from 'react';

export default function BookingForm({ formData, setFormData, isSubmitted, onSubmit }) {
  return (
    <section id="booking" className="max-w-3xl mx-auto px-6 py-24 border-t border-white/5 font-sans">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden reveal-scale">
        <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-[#E9001A]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="text-center space-y-2">
          <span className="text-[#E9001A] text-[10px] font-bold uppercase tracking-widest block">SECURE SYSTEM DEPLOYMENT</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white">RESERVE WORKSHOP BAY</h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">Operator Name</label>
              <input 
                type="text" required placeholder="e.g., Arjun Nair" value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-[#E9001A] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">Secure Comms (Phone)</label>
              <input 
                type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} 
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-[#E9001A] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">Vehicle Designation</label>
              <input 
                type="text" required placeholder="e.g., Porsche GT3 / Thar" value={formData.vehicle} 
                onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-[#E9001A] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest font-bold text-[#9E9EA7]">Calibrated Protocol</label>
              <select 
                value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-[#0C0C0E] border border-white/10 focus:border-[#E9001A] rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="Standard Shield">Standard Shield</option>
                <option value="Pro Crystalline">Pro Crystalline</option>
                <option value="Diamond Matrix">Diamond Matrix</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full bg-[#E9001A] hover:bg-white text-white hover:text-black font-bold uppercase text-xs tracking-widest py-4 rounded-xl transition-all duration-300 transform active:scale-[0.99] shadow-[0_4px_12px_rgba(233,0,26,0.15)] hover:shadow-[0_4px_20px_rgba(233,0,26,0.3)]">
            INITIALIZE PROTOCOL
          </button>
        </form>

        {isSubmitted && (
          <div className="bg-[#E9001A]/10 border border-[#E9001A]/30 text-[#E9001A] text-center p-4 rounded-xl text-xs font-bold tracking-wide animate-fade-in">
            // SYSTEM SECURED: Workshop bay hold confirmed. Diagnostics supervisor will reach out shortly.
          </div>
        )}
      </div>
    </section>
  );
}