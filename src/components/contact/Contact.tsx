// src/components/contact/Contact.tsx
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import './contact.css'

const COOLDOWN_MS = 60000;
const STORAGE_KEY = 'lastEmailSentAt';
const TOAST_DURATION = 4000;

type ToastType = 'success' | 'error' | 'warning';

interface ToastState {
    message: string;
    type: ToastType;
}

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [toast, setToast] = useState<ToastState | null>(null);
    const [isToastLeaving, setIsToastLeaving] = useState(false);

    const showToast = (message: string, type: ToastType) => {
        setToast({ message, type });
        setIsToastLeaving(false);
    };

    const closeToast = () => {
        setIsToastLeaving(true);
        setTimeout(() => setToast(null), 300);
    };

    useEffect(() => {
        if (!toast) return;
        const timer = setTimeout(() => {
            closeToast();
        }, TOAST_DURATION);
        return () => clearTimeout(timer);
    }, [toast]);

    const getRemainingCooldown = (): number => {
        const lastSent = localStorage.getItem(STORAGE_KEY);
        if (!lastSent) return 0;
        const elapsed = Date.now() - parseInt(lastSent, 10);
        return Math.max(0, COOLDOWN_MS - elapsed);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current?.checkValidity()) {
            form.current?.reportValidity();
            return;
        }

        const remaining = getRemainingCooldown();
        if (remaining > 0) {
            const secondsLeft = Math.ceil(remaining / 1000);
            showToast(t('contact.toast.cooldown', { seconds: secondsLeft }), 'warning');
            return;
        }

        if (isSending) return;

        setIsSending(true);

        emailjs
            .sendForm(
                "service_b5j5d3g",
                "template_z9ujzei",
                form.current!,
                { publicKey: "tCjIdcDMW79_BDXV5" }
            )
            .then(() => {
                localStorage.setItem(STORAGE_KEY, Date.now().toString());
                (e.target as HTMLFormElement).reset();
                showToast(t('contact.toast.success'), 'success');
            })
            .catch((error) => {
                console.error("Gagal mengirim email:", error);
                showToast(t('contact.toast.error'), 'error');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const toastIcon = {
        success: 'bx-check-circle',
        error: 'bx-error-circle',
        warning: 'bx-time-five',
    };

  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>{t('contact.title')}</h2>
        <span className="section__subtitle">{t('contact.subtitle')}</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">{t('contact.talkToMe')}</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">{t('contact.email')}</h3>
                        <span className="contact__card-data">iqbalbagussatriawan@gmail.com</span>
                        <a href="mailto:iqbalbagussatriawan@gmail.com" className="contact__button">{t('contact.writeMe')} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">{t('contact.whatsapp')}</h3>
                        <span className="contact__card-data">+62-8233-5490-445</span>
                        <a href="https://wa.me/+6282335490445" className="contact__button">{t('contact.writeMe')} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">{t('contact.formTitle')}</h3>
                <form ref={form} onSubmit={sendEmail} noValidate>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">{t('contact.nameLabel')}</label>
                        <input
                            type="text"
                            name='name'
                            className='contact__form-input'
                            placeholder={t('contact.namePlaceholder')}
                            required
                            minLength={2}
                        />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">{t('contact.emailLabel')}</label>
                        <input
                            type="email"
                            name='email'
                            className='contact__form-input'
                            placeholder={t('contact.emailPlaceholder')}
                            required
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">{t('contact.projectLabel')}</label>
                        <textarea
                            name="project"
                            cols={30}
                            rows={10}
                            className="contact__form-input"
                            placeholder={t('contact.projectPlaceholder')}
                            required
                            minLength={10}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="button button-flex"
                        disabled={isSending}
                        style={{ opacity: isSending ? 0.6 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
                    >
                        {isSending ? t('contact.sending') : t('contact.sendButton')}
                        <svg
                            className="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                            fill="var(--container-color)"
                            ></path>
                            <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>

        {toast && (
            <div className={`toast toast--${toast.type} ${isToastLeaving ? 'toast--leaving' : ''}`}>
                <i className={`bx ${toastIcon[toast.type]} toast__icon`}></i>
                <span className="toast__message">{toast.message}</span>
                <button className="toast__close" onClick={closeToast} aria-label={t('contact.toast.closeAria')}>
                    <i className="bx bx-x"></i>
                </button>
                <div className="toast__progress"></div>
            </div>
        )}
    </section>
  )
}

export default Contact