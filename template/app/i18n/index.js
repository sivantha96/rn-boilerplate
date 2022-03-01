export const translationGetters = {
    en: () =>
        Object.assign(
            require('./general/en.json'),
            require('./components/en.json'),
            require('./features/Home/en.json'),
        ),
};
