import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const AboutUsScreen: React.FC<{ t: (key: string, params?: Record<string, any>) => string }> = ({ t }) => {
    const handleEmailPress = () => {
        window.location.href = 'mailto:20kvadratistreetfood@gmail.com';
    };

    const handlePhonePress = () => {
        window.location.href = 'tel:+995595291552';
    };

    const handleAddressPress = () => {
        const address = "Rustavi's Park";
        const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="page-container">
            {/* Contact Information */}
            <div className="contact-section">
                <h2>{t('aboutUs.contactInfo')}</h2>

                <div style={{ marginBottom: '20px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px',
                        backgroundColor: '#FFF8F2',
                        borderRadius: '8px',
                        borderLeft: '4px solid #FF8C00',
                        marginBottom: '15px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                         onClick={handleEmailPress}
                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFE5CC'}
                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFF8F2'}>
                        <Mail size={24} style={{ color: '#FF8C00', marginRight: '15px', flexShrink: 0 }} />
                        <div>
                            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 5px 0' }}>
                                {t('aboutUs.email')}
                            </p>
                            <p style={{ fontSize: '16px', color: '#333', fontWeight: '500', margin: 0 }}>
                                20kvadratistreetfood@gmail.com
                            </p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px',
                        backgroundColor: '#FFF8F2',
                        borderRadius: '8px',
                        borderLeft: '4px solid #FF8C00',
                        marginBottom: '15px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                         onClick={handlePhonePress}
                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFE5CC'}
                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFF8F2'}>
                        <Phone size={24} style={{ color: '#FF8C00', marginRight: '15px', flexShrink: 0 }} />
                        <div>
                            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 5px 0' }}>
                                {t('aboutUs.phone')}
                            </p>
                            <p style={{ fontSize: '16px', color: '#333', fontWeight: '500', margin: 0 }}>
                                +995 595 29 15 52
                            </p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px',
                        backgroundColor: '#FFF8F2',
                        borderRadius: '8px',
                        borderLeft: '4px solid #FF8C00',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                         onClick={handleAddressPress}
                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFE5CC'}
                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFF8F2'}>
                        <MapPin size={24} style={{ color: '#FF8C00', marginRight: '15px', flexShrink: 0 }} />
                        <div>
                            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 5px 0' }}>
                                {t('aboutUs.address')}
                            </p>
                            <p style={{ fontSize: '16px', color: '#333', fontWeight: '500', margin: 0 }}>
                                Rustavi's Park
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Information */}
            <div className="contact-section">
                <h2>{t('aboutUs.companyInfo')}</h2>
                <div className="contact-details">
                    <p><strong>{t('aboutUs.companyName')}:</strong> შპს 20 კვადრატი</p>
                    <p><strong>{t('aboutUs.identificationNumber')}:</strong> 445750456</p>
                </div>
            </div>

            {/* What We Do Section */}
            <div className="contact-section">
                <h2>{t('aboutUs.whatWeDo')}</h2>
                <p style={{ color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                    {t('aboutUs.serviceDescription')}
                </p>
            </div>

            {/* Version Info */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p className="small-text">
                    {t('profile.appVersion', { version: '1.0.0' })}
                </p>
            </div>
        </div>
    );
};

export default AboutUsScreen;