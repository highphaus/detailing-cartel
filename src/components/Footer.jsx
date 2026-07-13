import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            <img
              src="/images/detailing cartel_nav.png"
              alt="Detailing Cartel"
              className="h-32 object-contain"
              
            />


            <p className="mt-3 max-w-xs text-sm leading-7 text-white/50">
              Premium ceramic coating, paint protection,
              detailing and automotive surface care built for
              enthusiasts who demand perfection.
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center lg:items-start">

            <h3 className="text-xs uppercase tracking-[0.35em] text-white/40 mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                  Email
                </p>

                <a
                  href="mailto:detailingcarteltvm@gmail.com"
                  className="text-white hover:text-emerald-400 transition"
                >
                  detailingcarteltvm@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/917306533407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition"
                >
                  +91 73065 33407
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                  Service Area
                </p>

                <p className="text-white/70">
                  Opposite True Value Cars, Thiruvallom, Trivandrum, Kerala
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center lg:items-start">

            <h3 className="text-xs uppercase tracking-[0.35em] text-white/40 mb-6">
              Connect
            </h3>

            <div className="flex gap-4">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/detai.lingcartel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E9001A] to-[#ff5b6d] transition hover:scale-110"
              >
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.402a4.92 4.92 0 0 1 1.675 1.09 4.92 4.92 0 0 1 1.09 1.675c.162.457.347 1.257.402 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.402 2.427a4.92 4.92 0 0 1-1.09 1.675 4.92 4.92 0 0 1-1.675 1.09c-.457.162-1.257.347-2.427.402-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.427-.402a4.92 4.92 0 0 1-1.675-1.09 4.92 4.92 0 0 1-1.09-1.675c-.162-.457-.347-1.257-.402-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.402-2.427a4.92 4.92 0 0 1 1.09-1.675 4.92 4.92 0 0 1 1.675-1.09C5.98 2.403 6.78 2.218 7.95 2.163 9.216 2.105 9.596 2.093 12 2.093m0-2.093C8.737 0 8.332.013 7.052.072 5.773.13 4.812.29 4.05.607c-.784.323-1.447.756-2.11 1.42C1.288 2.69.855 3.353.532 4.137.215 4.9.056 5.86-.002 7.139-.061 8.42-.074 8.825-.074 12s.013 3.58.072 4.861c.058 1.279.217 2.24.534 3.003.323.784.756 1.447 1.42 2.11.663.664 1.326 1.097 2.11 1.42.763.317 1.724.476 3.003.534C8.332 23.987 8.737 24 12 24s3.668-.013 4.948-.072c1.279-.058 2.24-.217 3.003-.534.784-.323 1.447-.756 2.11-1.42.664-.663 1.097-1.326 1.42-2.11.317-.763.476-1.724.534-3.003.059-1.281.072-1.686.072-4.948s-.013-3.668-.072-4.948c-.058-1.279-.217-2.24-.534-3.003-.323-.784-.756-1.447-1.42-2.11-.663-.664-1.326-1.097-2.11-1.42C19.188.29 18.227.13 16.948.072 15.668.013 15.263 0 12 0z"/>
                  <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.124A3.962 3.962 0 0 1 8.038 12 3.962 3.962 0 0 1 12 8.038 3.962 3.962 0 0 1 15.962 12 3.962 3.962 0 0 1 12 15.962z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
 
              {/* WhatsApp */}
 
              <a
                href="https://wa.me/917306533407"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on WhatsApp"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#20B358] transition hover:scale-110"
              >
                <svg className="h-8 w-8 text-white" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>

            </div>

            

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">
            © 2026 Detailing Cartel. All Rights Reserved.
          </p>

          <p className="text-white/20 text-xs uppercase tracking-[0.2em]">
            Built for Automotive Excellence
          </p>

        </div>

      </div>
    </footer>
  );
}