// src/data/menu.ts

export const headerMenu = [
    { name: 'Blog', link: '/blog' },
    { name: 'Courses', link: '/theme-info' },
    { name: 'Services', link: '/theme-info',
        children: [
            { name: 'Start Your Trucking Business', link: '/services#support' },
            { name: 'Factoring', link: '/services#consulting' },
            { name: 'Drug & Alcohol Testing', link: '/services#training' },
        ]
     },
    { name: 'Our Team', link: '/team' },
    { name: 'Style-Guide', link: '/style-guide', showArrow: false,
        children: [
            { name: 'Typography', link: '/style-guide#typography' },
            { name: 'Colors', link: '/style-guide#colors' },
            { name: 'Links', link: '/style-guide#links' },
            { name: 'Buttons', link: '/style-guide#buttons' },
            { name: 'Forms', link: '/style-guide#forms' },
            { name: 'Lists', link: '/style-guide#lists' },
        ]
    }
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

