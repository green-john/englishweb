import React, {useReducer, useRef} from "react";

import ReCAPTCHA from 'react-google-recaptcha';
import Layout from "../../../components/Layout";
import {CONTACT_US, FORM_EMAIL_LABEL, FORM_MSG_LABEL, FORM_NAME_LABEL, t} from "../../../services/languageService";
import InputWithLabel from "../../../components/InputWithLabel";
import ContactHeader from "../../../components/ContactHeader";
import {postForm} from "../../../services/form";

function formDataReducer(state, event) {
    const {name, value} = event;
    return {
        ...state,
        [name]: value
    }
}

export default function Contact({params}) {
    const {lang} = params;
    const captchaRef = useRef();

    const [formData, setFormData] = useReducer(formDataReducer, {
        'name': '',
        'email': '',
        'message': '',
        'bot-field': ''
    });

    const postTo = `/${lang}/contact`

    const submitForm = async (evt) => {
        evt.preventDefault();

        console.log(captchaRef.current);

        let fullData = {
            ...formData,
        }

        fullData['form-name'] = 'contact';
        fullData['g-recaptcha-response'] = await captchaRef.current.executeAsync();

        postForm(postTo, fullData).then((response) => {
            console.log('submitted', response)
        })
    }

    const onChangeInput = (evt) => setFormData({name: evt.target.name, value: evt.target.value});

    return <Layout>
        <div className="mt-14 w-screen flex justify-center">
            <div className="sm:w-5/6 md:w-4/6 lg:w-3/6">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  data-netlify-recaptcha="true"
                  onSubmit={submitForm}
                >
                    <ReCAPTCHA
                      rel={captchaRef}
                      size="invisible"
                      sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                    />
                    <fieldset>
                        <div className="overflow-hidden ">
                            <div className="px-4 py-5 sm:p-6 md:p-9">
                                <ContactHeader lang={lang}/>
                                <div className="grid grid-cols-6 gap-4 w-full">
                                    <p className="hidden">
                                        <label>
                                            Don't fill this out if you are human
                                            <input type="text" name="bot-field" onChange={onChangeInput}/>
                                        </label>
                                    </p>
                                    <InputWithLabel label={t(FORM_NAME_LABEL, lang)} fieldId="name"
                                                    value={formData.name} onChange={onChangeInput}/>
                                    <InputWithLabel label={t(FORM_EMAIL_LABEL, lang)} fieldId="email"
                                                    value={formData.email} onChange={onChangeInput}/>
                                    <InputWithLabel label={t(FORM_MSG_LABEL, lang)} fieldId="message"
                                                    value={formData.message} onChange={onChangeInput}
                                                    useTextArea={true}/>
                                </div>
                            </div>
                            <div className="px-4 py-3 sm:px-6">
                                <button
                                  type="submit"
                                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {t(CONTACT_US, lang)}
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </Layout>
}
