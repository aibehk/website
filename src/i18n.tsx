import i18next, {init} from "i18next";
import {initReactI18next} from "react-i18next";

import translationEnglish from "./translations/english.json";
import translationGerman from "./translations/german.json";

const resources = {
    en: {
        translation: translationEnglish
    },
    de: {
        translation: translationGerman
    }
}

i18next.use(initReactI18next).init({resources, lng: "de"}).then(r  =>{})

export default i18next;