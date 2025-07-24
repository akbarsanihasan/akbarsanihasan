// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    proseWrap: 'always',
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
