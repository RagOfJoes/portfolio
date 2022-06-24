// Before defining your Security Headers
// add Content Security Policy directives using a template string.
const ContentSecurityPolicy = `
  default-src https://ragofjoes.dev;
  script-src 'self';
  child-src ragofjoes.dev;
  style-src 'self' ragofjoes.dev;
  font-src 'self';  
`;

const securityHeaders = [
  {
    key: 'X-XSS-PROTECTION',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  swcMinify: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,

  headers: async () => {
    if (process.env.NODE_ENV === 'development') {
      return [];
    }
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
