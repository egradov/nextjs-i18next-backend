const I18nextChainedBackend = require("i18next-chained-backend/dist/cjs/i18nextChainedBackend");
const I18NextHttpBackend = require("i18next-http-backend/cjs");

/** @type {import('i18next-http-backend').BackendOptions} */
const httpBackendOptions = {
    loadPath: (lng, ns) => {
        const url = `http://localhost:3009/locales/${lng}/${ns}.json`
        console.log('Generate Url for localization', url)
        return url
    },
    crossDomain: true,
    requestOptions: {
        mode: 'cors'
    },
    addPath: "http://localhost:3009/locales/{{lng}}/{{ns}}"
}

/** @type {import('next-i18next').UserConfig} */
module.exports = {
    debug: true,
    lng: "ru",
    i18n: {
        defaultLocale: "ru",
        locales: ["ru", "en"]
    },
    ns: ['common','footer'],

    fallbackLng: "ru",
    serializeConfig: false,
    use: [I18nextChainedBackend],
    backend: {
        backends: [I18NextHttpBackend],
        backendOptions: [
            httpBackendOptions
        ]
    }
};
