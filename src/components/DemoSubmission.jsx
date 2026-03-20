import React, { useState } from 'react';
import { FaCloudUploadAlt, FaPaperPlane } from 'react-icons/fa';

const DemoSubmission = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const inputClasses = "w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 font-body text-sm text-offwhite placeholder-offwhite/30 focus:border-crimson focus:bg-white/[0.06] transition-all duration-300 outline-none";

  return (
    <section id="submit" className="min-h-screen flex items-center justify-center px-4 py-24 bg-dark">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12 reveal">
          <p className="font-body text-sm font-semibold tracking-widest text-gold mb-4">A&R</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-offwhite">
            DEMO SUBMISSIONS
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blood to-transparent mx-auto mt-6 mb-8"></div>
          <p className="font-display text-2xl sm:text-3xl text-crimson tracking-wide">
            Think you belong here? Prove it.
          </p>
        </div>

        {submitted ? (
          <div className="reveal text-center py-16 bg-white/[0.03] border border-gold/20 rounded-xl">
            <div className="font-display text-4xl sm:text-5xl text-gold mb-4">RECEIVED</div>
            <p className="font-body text-offwhite/60 text-lg">
              We listen to every submission. If your sound fits, we'll find you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal space-y-6 bg-white/[0.02] border border-white/[0.06] rounded-xl p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-xs font-semibold tracking-widest text-offwhite/50 mb-2">
                  ARTIST NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name or stage name"
                  className={inputClasses}
                  required
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-widest text-offwhite/50 mb-2">
                  GENRE
                </label>
                <select className={inputClasses} required>
                  <option value="" className="bg-dark">Select genre</option>
                  <option value="hip-hop" className="bg-dark">Hip-Hop</option>
                  <option value="afro-soul" className="bg-dark">Afro-Soul</option>
                  <option value="amapiano" className="bg-dark">Amapiano</option>
                  <option value="rnb" className="bg-dark">R&B</option>
                  <option value="other" className="bg-dark">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-body text-xs font-semibold tracking-widest text-offwhite/50 mb-2">
                SOUNDCLOUD / LINK TO YOUR MUSIC
              </label>
              <input
                type="url"
                placeholder="https://soundcloud.com/your-profile"
                className={inputClasses}
                required
              />
            </div>

            <div>
              <label className="block font-body text-xs font-semibold tracking-widest text-offwhite/50 mb-2">
                BRIEF BIO
              </label>
              <textarea
                rows={4}
                placeholder="Tell us your story in a few lines..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div>
              <label className="block font-body text-xs font-semibold tracking-widest text-offwhite/50 mb-2">
                UPLOAD DEMO (OPTIONAL)
              </label>
              <label className="flex items-center gap-3 cursor-pointer bg-white/[0.04] border border-dashed border-white/10 rounded-lg px-4 py-4 hover:border-crimson/50 transition-all duration-300">
                <FaCloudUploadAlt className="text-2xl text-offwhite/30" />
                <span className="font-body text-sm text-offwhite/40">
                  {fileName || 'Click to upload MP3, WAV, or FLAC'}
                </span>
                <input
                  type="file"
                  accept=".mp3,.wav,.flac"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gold text-dark font-display text-xl tracking-wider py-4 rounded-lg hover:bg-gold/80 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              <FaPaperPlane />
              SUBMIT DEMO
            </button>

            <p className="font-body text-xs text-center text-offwhite/30 italic">
              We listen to every submission. If your sound fits, we'll find you.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoSubmission;
