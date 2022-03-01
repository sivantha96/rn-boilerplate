import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import { translationGetters } from '../i18n';
import * as RNLocalize from 'react-native-localize';

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = selectedLanguageTag => {
    translate.cache.clear(); // clear translation cache

    let availableLanguages;
    if (selectedLanguageTag) {
        // for force language change
        // or when the saved language in the persisted state is passed
        availableLanguages = [selectedLanguageTag];
    } else {
        // when initialized without any saved language
        availableLanguages = Object.keys(translationGetters);
    }
    const systemLanguage = RNLocalize.findBestAvailableLanguage(availableLanguages);
    const languageTag = systemLanguage?.languageTag || 'en';
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
};
