import React from "react"

import Layout from "../../../components/Layout";
import {CONTACT_US, FORM_EMAIL_LABEL, FORM_MSG_LABEL, FORM_NAME_LABEL, t} from "../../../services/languageService";
import InputWithLabel from "../../../components/InputWithLabel";
import ContactHeader from "../../../components/ContactHeader";

export default function Contact({params}) {
    const {lang} = params;
    return <Layout>
        <div className="mt-14 w-screen flex justify-center">
            <div className="sm:w-5/6 md:w-4/6 lg:w-3/6">
                <form name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      data-netlify-recaptcha="true"
                >
                    <div className="overflow-hidden ">
                        <div className="px-4 py-5 sm:p-6 md:p-9">
                            <ContactHeader lang={lang}/>
                            <div className="grid grid-cols-6 gap-4 w-full">
                                <div className="hidden"><input type="text" name="bot-field"/></div>
                                <InputWithLabel label={t(FORM_NAME_LABEL, lang)} fieldId="name"/>
                                <InputWithLabel label={t(FORM_EMAIL_LABEL, lang)} fieldId="email"/>
                                <InputWithLabel label={t(FORM_MSG_LABEL, lang)} fieldId="message" useTextArea={true}/>
                            </div>
                        </div>
                        <div className="px-4 py-3 sm:px-6">
                            <div data-netlify-recaptcha="true"/>
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {t(CONTACT_US, lang)}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
}
