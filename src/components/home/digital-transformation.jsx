import React from "react";
import { useTranslation } from "react-i18next";

export function DigitalTransformation() {
  const { t } = useTranslation();
  return (
    <section className="px-[5%] pb-16 md:pb-24 lg:pb-28 pt-0 md:pt-0 scheme-1">
      <div className="container">
        <hr className="w-full border-t-2 border-black/60 mb-12 md:mb-20" />
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter leading-[1.1] text-scheme-text">
            {t('dt.label', 'Digital Transformation')}
          </h2>
          <p className="mb-8 font-medium text-scheme-text/60 text-lg md:text-xl">
            {t('dt.title', 'Eliminate Outdated Infrastructure.')}
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-light text-scheme-text/70 leading-relaxed max-w-4xl mx-auto mb-8">
            {t('dt.description', 'Transform your legacy and inactive systems into modern, highly secure, AI-native cloud environments.')}
          </p>
          <div className="text-left max-w-4xl mx-auto space-y-6 mt-8">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-scheme-text/5 border border-scheme-border">
              <div className="mt-1">
                <svg className="w-6 h-6 text-scheme-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-scheme-text">{t('dt.d2cTitle', 'D2C Brands')}</h3>
                <p className="text-scheme-text/70 text-lg">{t('dt.d2cDesc', 'As we make and scale your social commerce business into D2C.')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-scheme-text/5 border border-scheme-border">
              <div className="mt-1">
                <svg className="w-6 h-6 text-scheme-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-scheme-text">{t('dt.startupsTitle', 'Startups')}</h3>
                <p className="text-scheme-text/70 text-lg">{t('dt.startupsDesc', 'As we support fast delivery for custom developments, which help to launch startups fast into the desired region or jurisdiction.')}</p>
              </div>
            </div>
          </div>

          <style>
            {`
              @keyframes marquee-ltr {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(-25%); }
              }
              .animate-marquee-ltr {
                animation: marquee-ltr 15s linear infinite;
              }
            `}
          </style>
          <div className="mt-16 w-full overflow-hidden">
            <h4 className="text-sm font-bold tracking-widest text-scheme-text/50 uppercase mb-8 text-center">{t('dt.poweringSocialCommerce', 'Powering Social Commerce')}</h4>

            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-marquee-ltr items-center">
                {/* SET 1 */}
                <div className="flex gap-6 items-center pr-6">
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Facebook</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.51 3.23-1.47 4.52-1.39 1.86-3.6 3-5.91 3-2.07 0-4.07-.84-5.46-2.31-1.35-1.43-2.12-3.37-2.12-5.4 0-1.97.74-3.86 2.05-5.3 1.31-1.43 3.19-2.34 5.2-2.45v4.06c-.84.05-1.68.39-2.3.97-.6.55-.98 1.32-.98 2.14 0 1.15.65 2.22 1.66 2.72.93.47 2.05.5 3.03.11 1-.41 1.77-1.22 2.07-2.26.15-.51.21-1.04.21-1.56V.02z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">TikTok</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">X</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Pinterest</span>
                  </div>
                </div>
                {/* SET 2 */}
                <div className="flex gap-6 items-center pr-6">
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Facebook</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.51 3.23-1.47 4.52-1.39 1.86-3.6 3-5.91 3-2.07 0-4.07-.84-5.46-2.31-1.35-1.43-2.12-3.37-2.12-5.4 0-1.97.74-3.86 2.05-5.3 1.31-1.43 3.19-2.34 5.2-2.45v4.06c-.84.05-1.68.39-2.3.97-.6.55-.98 1.32-.98 2.14 0 1.15.65 2.22 1.66 2.72.93.47 2.05.5 3.03.11 1-.41 1.77-1.22 2.07-2.26.15-.51.21-1.04.21-1.56V.02z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">TikTok</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">X</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Pinterest</span>
                  </div>
                </div>
                {/* SET 3 */}
                <div className="flex gap-6 items-center pr-6">
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Facebook</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.51 3.23-1.47 4.52-1.39 1.86-3.6 3-5.91 3-2.07 0-4.07-.84-5.46-2.31-1.35-1.43-2.12-3.37-2.12-5.4 0-1.97.74-3.86 2.05-5.3 1.31-1.43 3.19-2.34 5.2-2.45v4.06c-.84.05-1.68.39-2.3.97-.6.55-.98 1.32-.98 2.14 0 1.15.65 2.22 1.66 2.72.93.47 2.05.5 3.03.11 1-.41 1.77-1.22 2.07-2.26.15-.51.21-1.04.21-1.56V.02z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">TikTok</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">X</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Pinterest</span>
                  </div>
                </div>
                {/* SET 4 */}
                <div className="flex gap-6 items-center pr-6">
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Facebook</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.51 3.23-1.47 4.52-1.39 1.86-3.6 3-5.91 3-2.07 0-4.07-.84-5.46-2.31-1.35-1.43-2.12-3.37-2.12-5.4 0-1.97.74-3.86 2.05-5.3 1.31-1.43 3.19-2.34 5.2-2.45v4.06c-.84.05-1.68.39-2.3.97-.6.55-.98 1.32-.98 2.14 0 1.15.65 2.22 1.66 2.72.93.47 2.05.5 3.03.11 1-.41 1.77-1.22 2.07-2.26.15-.51.21-1.04.21-1.56V.02z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">TikTok</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">X</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 border border-scheme-border px-6 py-3 rounded-xl bg-scheme-text/5 shadow-sm">
                    <svg className="w-6 h-6 text-scheme-text" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" /></svg>
                    <span className="font-semibold text-scheme-text whitespace-nowrap">Pinterest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
