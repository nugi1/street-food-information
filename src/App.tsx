// App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { translations, getNestedTranslation } from './Translations';
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import AboutUsScreen from "./screens/AboutUsScreen";

type Language = 'en' | 'ka';

function Navigation() {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language as Language];

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to='/about-us'>
                    {t.nav.aboutUs}
                </Link>
                <Link to='/support'>
                    {t.nav.support}
                </Link>
                <Link to='/privacy-policy'>
                    {t.nav.privacy}
                </Link>
            </div>
            <button onClick={toggleLanguage} className="lang-button">
                {language === 'en' ? 'ქართული' : 'English'}
            </button>
        </nav>
    );
}

function Support() {
    const { language } = useLanguage();
    const t = translations[language as Language].support;

    return (
        <div className="page-container">
            <div className="support-header">
                <h1>{t.title}</h1>
            </div>

            <div className="contact-section">
                <h2>{t.contactTitle}</h2>
                <div className="contact-info">
                    <div>
                        <strong>{t.email}:</strong>{' '}
                        <a href={`mailto:${t.contactInfo.email}`}>{t.contactInfo.email}</a>
                        <p className="small-text">{t.responseTime}</p>
                    </div>
                    <div>
                        <strong>{t.location}:</strong> {t.locationText}
                        <p className="small-text">{t.serviceArea}</p>
                    </div>
                    <div className="contact-details">
                        <p><strong>{language === 'en' ? 'Company' : 'კომპანია'}:</strong> {t.contactInfo.company}</p>
                        <p><strong>{language === 'en' ? 'Phone' : 'ტელეფონი'}:</strong> {t.contactInfo.phone}</p>
                        <p><strong>{language === 'en' ? 'Address' : 'მისამართი'}:</strong> {t.contactInfo.address}</p>
                        <p><strong>ID:</strong> {t.contactInfo.id}</p>
                    </div>
                </div>
            </div>

            <div className="faq-section">
                <h2>{t.faqTitle}</h2>
                {t.faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Wrapper components to pass translation function
function AboutUsWrapper() {
    const { language } = useLanguage();

    // Create translation function that works with the component
    const t = (key: string, params?: Record<string, any>) => {
        let value = getNestedTranslation(translations[language as Language], key);

        // Handle parameter replacement for things like {{version}}
        if (params) {
            Object.keys(params).forEach(param => {
                value = value.replace(`{{${param}}}`, params[param]);
            });
        }

        return value;
    };

    return <AboutUsScreen t={t} />;
}

function PrivacyPolicyWrapper() {
    const { language } = useLanguage();

    // Create translation function that works with the component
    const t = (key: string) => {
        return getNestedTranslation(translations[language as Language], key);
    };

    return <PrivacyPolicyScreen t={t} />;
}

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <div className="app">
                    <Navigation />

                    <Routes>
                        <Route path='/' element={<AboutUsWrapper />}/>
                        <Route path='/about-us' element={<AboutUsWrapper />}/>
                        <Route path='/privacy-policy' element={<PrivacyPolicyWrapper />} />
                        <Route path='/support' element={<Support />}/>
                    </Routes>

                    <footer className="footer">
                        <p>© 2025 SPS 20 Kvadrati. All rights reserved.</p>
                    </footer>
                </div>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;