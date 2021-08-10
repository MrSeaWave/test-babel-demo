require('@babel/register');
require('@babel/polyfill');

require('./test');

const sleep = () => new Promise((resolve) => setTimeout(resolve, 3000));
(async function () {
  await sleep();
  console.log('start');
  require('./puppeteerTest');
})();
