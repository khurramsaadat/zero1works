const http = require('http');

const routes = [
  '/', '/portfolio/', '/services/', '/process/', '/blog/',
  '/about/', '/privacy-policy/', '/terms-of-service/',
  '/cookie-policy/', '/careers/', '/sitemap-page/',
];

const BASE = 'http://localhost:3099';

(async () => {
  let allPassed = true;
  for (const route of routes) {
    const url = BASE + route;
    try {
      const status = await new Promise((resolve, reject) => {
        http.get(url, (res) => resolve(res.statusCode)).on('error', reject);
      });
      const mark = status === 200 ? 'OK' : 'FAIL';
      console.log(`${mark} ${status} ${route}`);
      if (status !== 200) allPassed = false;
    } catch (e) {
      console.log(`FAIL ERR ${route} - ${e.message}`);
      allPassed = false;
    }
  }
  console.log(allPassed ? '\nAll routes passed.' : '\nSome routes failed.');
  process.exit(allPassed ? 0 : 1);
})();
