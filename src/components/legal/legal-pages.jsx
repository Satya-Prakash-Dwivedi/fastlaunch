import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function PrivacyPolicyPage() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex-grow scheme-1 bg-scheme-background text-scheme-text">
      <div className="container px-[5%] py-24 md:py-32 mx-auto max-w-3xl">
        <h1 className="text-h1 font-bold mb-8">{t('legal.privacy.title', 'Privacy Policy')}</h1>
        <p className="text-medium text-scheme-text/75 mb-6">{t('legal.privacy.lastUpdated', 'Last updated: June 2026')}</p>
        <div className="prose prose-invert max-w-none text-scheme-text/90 leading-relaxed space-y-6">
          <p>{t('legal.privacy.p1', 'This is a placeholder for your Privacy Policy. You should replace this text with your actual privacy policy content.')}</p>
          <p>{t('legal.privacy.p2', 'We take your privacy seriously and are committed to protecting your personal information. This policy describes how we collect, use, and handle your data when you use our services.')}</p>
          
          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.privacy.s1Title', '1. Information We Collect')}</h2>
          <p>{t('legal.privacy.s1Text', 'We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.privacy.s2Title', '2. How We Use Your Information')}</h2>
          <p>{t('legal.privacy.s2Text', 'We process your personal information for a variety of reasons, depending on how you interact with our services, including:')}</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>{t('legal.privacy.s2List1', 'To facilitate account creation and authentication and otherwise manage user accounts.')}</li>
            <li>{t('legal.privacy.s2List2', 'To respond to user inquiries and offer support to users.')}</li>
            <li>{t('legal.privacy.s2List3', 'To fulfill and manage your orders, payments, returns, and exchanges.')}</li>
            <li>{t('legal.privacy.s2List4', 'To evaluate and improve our services, products, marketing, and your experience.')}</li>
          </ul>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.privacy.s3Title', '3. Sharing Your Information')}</h2>
          <p>{t('legal.privacy.s3Text', 'We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. We do not sell your personal information to third parties.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.privacy.s4Title', '4. Data Security')}</h2>
          <p>{t('legal.privacy.s4Text', 'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.privacy.s5Title', '5. Contact Us')}</h2>
          <p>
            {t('legal.privacy.s5Text', 'If you have questions or comments about this notice, you may email us at ')}<a href="mailto:contact@fastlaunch.live" className="font-medium underline hover:text-scheme-text transition-colors">contact@fastlaunch.live</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export function TermsOfServicePage() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex-grow scheme-1 bg-scheme-background text-scheme-text">
      <div className="container px-[5%] py-24 md:py-32 mx-auto max-w-3xl">
        <h1 className="text-h1 font-bold mb-8">{t('legal.terms.title', 'Terms of Service')}</h1>
        <p className="text-medium text-scheme-text/75 mb-6">{t('legal.terms.lastUpdated', 'Last updated: June 2026')}</p>
        <div className="prose prose-invert max-w-none text-scheme-text/90 leading-relaxed space-y-6">
          <p>{t('legal.terms.p1', 'This is a placeholder for your Terms of Service. You should replace this text with your actual terms and conditions.')}</p>
          <p>{t('legal.terms.p2', 'By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.terms.s1Title', '1. Agreement to Terms')}</h2>
          <p>{t('legal.terms.s1Text', 'By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing our website and services.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.terms.s2Title', '2. Intellectual Property Rights')}</h2>
          <p>{t('legal.terms.s2Text', 'Unless otherwise indicated, the website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Fastlaunch, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.terms.s3Title', '3. User Representations')}</h2>
          <p>{t('legal.terms.s3Text', 'By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.terms.s4Title', '4. Limitation of Liability')}</h2>
          <p>{t('legal.terms.s4Text', 'In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.terms.s5Title', '5. Governing Law')}</h2>
          <p>{t('legal.terms.s5Text', 'These terms and conditions are governed by and construed in accordance with the laws of our jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.terms.s6Title', '6. Contact Us')}</h2>
          <p>
            {t('legal.terms.s6Text', 'In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: ')}<a href="mailto:contact@fastlaunch.live" className="font-medium underline hover:text-scheme-text transition-colors">contact@fastlaunch.live</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsPage() {
  const { t } = useTranslation();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  return (
    <div className="w-full flex-grow scheme-1 bg-scheme-background text-scheme-text">
      <div className="container px-[5%] py-24 md:py-32 mx-auto max-w-3xl">
        <h1 className="text-h1 font-bold mb-8">{t('legal.cookies.title', 'Cookie Policy & Settings')}</h1>
        <p className="text-medium text-scheme-text/75 mb-6">{t('legal.cookies.lastUpdated', 'Last updated: June 2026')}</p>
        <div className="prose prose-invert max-w-none text-scheme-text/90 leading-relaxed">
          <p className="mb-6">{t('legal.cookies.p1', 'This Cookie Policy explains how Fastlaunch ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.')}</p>
          
          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.cookies.s1Title', 'What are cookies?')}</h2>
          <p className="mb-6">{t('legal.cookies.s1Text', 'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.')}</p>

          <h2 className="text-h4 font-bold mt-12 mb-4 text-scheme-text">{t('legal.cookies.s2Title', 'Manage your preferences')}</h2>
          <p className="mb-8">{t('legal.cookies.s2Text', 'You can review and change your cookie preferences below. Please note that blocking some types of cookies may impact your experience of the site and the services we are able to offer.')}</p>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="p-6 border border-scheme-border/50 rounded-xl bg-scheme-surface/50 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-h5 font-bold mb-2 text-scheme-text">{t('legal.cookies.essentialTitle', 'Strictly Necessary Cookies')}</h3>
                  <p className="text-sm text-scheme-text/75 leading-relaxed">{t('legal.cookies.essentialText', 'These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. Without these cookies, services you have asked for cannot be provided.')}</p>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <span className="inline-block px-3 py-1.5 bg-scheme-text/10 text-scheme-text rounded-full text-xs font-bold whitespace-nowrap shadow-inner">{t('legal.cookies.alwaysActive', 'Always Active')}</span>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="p-6 border border-scheme-border/50 rounded-xl bg-scheme-surface/50 shadow-sm transition-colors hover:border-scheme-border">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-h5 font-bold mb-2 text-scheme-text">{t('legal.cookies.analyticsTitle', 'Analytics & Performance Cookies')}</h3>
                  <p className="text-sm text-scheme-text/75 leading-relaxed">{t('legal.cookies.analyticsText', 'These cookies collect information about how you use a website, like which pages you visited and which links you clicked on. None of this information can be used to identify you. It is all aggregated and, therefore, anonymized.')}</p>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={analyticsEnabled}
                      onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
                    />
                    <div className="w-14 h-7 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:shadow-sm after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-scheme-text shadow-inner"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="p-6 border border-scheme-border/50 rounded-xl bg-scheme-surface/50 shadow-sm transition-colors hover:border-scheme-border">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-h5 font-bold mb-2 text-scheme-text">{t('legal.cookies.marketingTitle', 'Marketing & Targeting Cookies')}</h3>
                  <p className="text-sm text-scheme-text/75 leading-relaxed">{t('legal.cookies.marketingText', 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. They can share that information with other organizations or advertisers.')}</p>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={marketingEnabled}
                      onChange={() => setMarketingEnabled(!marketingEnabled)}
                    />
                    <div className="w-14 h-7 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:shadow-sm after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-scheme-text shadow-inner"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button title="Save Preferences" className="px-6 py-3" onClick={() => alert(t('legal.cookies.savedMsg', 'Preferences saved!'))}>
              {t('legal.cookies.saveBtn', 'Save Preferences')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
