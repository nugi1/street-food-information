import React from 'react';

const PrivacyPolicyScreen: React.FC<{ t: (key: string) => string }> = ({ t }) => {
    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="page-container">
            <div className="support-header">
                <h1>{t('privacyPolicy.title')}</h1>
            </div>

            {/* Information We Collect */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.informationWeCollect.title')}</h2>

                <h3>{t('privacyPolicy.informationWeCollect.personalInfo.title')}</h3>
                <ul className="bullet-list">
                    <li>{t('privacyPolicy.informationWeCollect.personalInfo.name')}</li>
                    <li>{t('privacyPolicy.informationWeCollect.personalInfo.email')}</li>
                    <li>{t('privacyPolicy.informationWeCollect.personalInfo.phone')}</li>
                    <li>{t('privacyPolicy.informationWeCollect.personalInfo.address')}</li>
                </ul>

                <h3>{t('privacyPolicy.informationWeCollect.orderInfo.title')}</h3>
                <ul className="bullet-list">
                    <li>{t('privacyPolicy.informationWeCollect.orderInfo.history')}</li>
                    <li>{t('privacyPolicy.informationWeCollect.orderInfo.preferences')}</li>
                    <li>{t('privacyPolicy.informationWeCollect.orderInfo.payment')}</li>
                </ul>

                <h3>{t('privacyPolicy.informationWeCollect.deviceInfo.title')}</h3>
                <ul className="bullet-list">
                    <li>{t('privacyPolicy.informationWeCollect.deviceInfo.location')}</li>
                </ul>
            </div>

            {/* How We Use Information */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.howWeUse.title')}</h2>
                <ul className="bullet-list">
                    <li>{t('privacyPolicy.howWeUse.processOrders')}</li>
                    <li>{t('privacyPolicy.howWeUse.customerService')}</li>
                    <li>{t('privacyPolicy.howWeUse.improvements')}</li>
                    <li>{t('privacyPolicy.howWeUse.communications')}</li>
                    <li>{t('privacyPolicy.howWeUse.legal')}</li>
                </ul>
            </div>

            {/* Information Sharing */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.informationSharing.title')}</h2>
                <p>{t('privacyPolicy.informationSharing.description')}</p>
                <ul className="bullet-list">
                    <li>{t('privacyPolicy.informationSharing.delivery')}</li>
                    <li>{t('privacyPolicy.informationSharing.payment')}</li>
                    <li>{t('privacyPolicy.informationSharing.legal')}</li>
                    <li>{t('privacyPolicy.informationSharing.consent')}</li>
                </ul>
            </div>

            {/* Data Security */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.dataSecurity.title')}</h2>
                <p>{t('privacyPolicy.dataSecurity.description')}</p>
            </div>

            {/* Data Retention */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.dataRetention.title')}</h2>
                <p>{t('privacyPolicy.dataRetention.description')}</p>
            </div>

            {/* Your Rights */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.yourRights.title')}</h2>
                <ul className="bullet-list">
                    <li>{t('privacyPolicy.yourRights.access')}</li>
                    <li>{t('privacyPolicy.yourRights.correct')}</li>
                    <li>{t('privacyPolicy.yourRights.delete')}</li>
                    <li>{t('privacyPolicy.yourRights.restrict')}</li>
                </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.cookies.title')}</h2>
                <p>{t('privacyPolicy.cookies.description')}</p>
            </div>

            {/* Third Party Services */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.thirdParty.title')}</h2>
                <p>{t('privacyPolicy.thirdParty.description')}</p>
            </div>

            {/* Changes to Policy */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.changes.title')}</h2>
                <p>{t('privacyPolicy.changes.description')}</p>
            </div>

            {/* Contact Information */}
            <div className="policy-section">
                <h2>{t('privacyPolicy.contact.title')}</h2>
                <p>{t('privacyPolicy.contact.description')}</p>
                <div className="contact-info-box">
                    <p><strong>შპს 20 კვადრატი</strong></p>
                    <p>Email: 20kvadratistreetfood@gmail.com</p>
                    <p>Phone: +995 595 29 15 52</p>
                    <p>Address: Rustavi's Park</p>
                    <p>ID: 445750456</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyScreen;