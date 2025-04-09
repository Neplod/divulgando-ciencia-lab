// src/middleware.ts
import { defineMiddleware } from 'astro/middleware';
import { languages } from './i18n/index';

export const onRequest = defineMiddleware(async (context, next) => {
    let lang = 'es';
    
    const cookies = context.cookies.get('divciencia-lang');
    const cookiesTheme = context.cookies.get('divciencia-theme');

    if (cookies?.value) {
        lang = cookies?.value ?? 'es';
    } else if (context.request.headers.get('accept-language')) {
        const acceptLanguage = context.request.headers.get('accept-language') ?? '';
        const langFromHeader = acceptLanguage.split(',')[0].split('-')[0];
        lang = langFromHeader;
    }
    
    lang = languages.includes(lang as any) ? lang : 'es';

    context.cookies.set('divciencia-lang', lang, { domain: '.divulgandociencia.com', sameSite: 'none', secure: true });
    
    context.locals.lang = lang;
    context.locals.theme = cookiesTheme?.value ?? '';

    return next();
});
