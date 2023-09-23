import {useTranslation} from "react-i18next";

function Footer() {
    const {t,i18n} = useTranslation()
    const changeLanguage = (e:any) => {
        let language = e.target.value;
        i18n.changeLanguage(language).then(r => {})
    }
    return <div>
        <select onChange={changeLanguage}>
            <option value={"en"}>Englisch</option>
            <option value="de">Deutsch</option>
        </select>
        {t("a")}
    </div>
}

export default Footer;