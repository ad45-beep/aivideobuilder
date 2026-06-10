const axios = require('axios');
const COUPON_URL = 'https://paykstrt.com/49246/162974';

(async () => {
  try {
    const res = await axios.head(COUPON_URL, { maxRedirects: 0, validateStatus: () => true });
    console.log(`Deal page status: ${res.status}`);
    if (res.headers.location) console.log(`Redirect: ${res.headers.location}`);
  } catch (e) {
    if (e.response) console.log(`Deal page status: ${e.response.status}`);
    else console.log('Deal page check skipped (expected redirect).');
  }

  console.log('\n--- AI Video Builder API Simulation ---');
  console.log('Use cases: script-to-video, short-form ads, explainer video rendering');
  if (process.env.AIVIDEOBUILDER_API_KEY) {
    console.log('API key detected. Ready for video generation.');
  } else {
    console.log('Set AIVIDEOBUILDER_API_KEY env var to enable live API calls.');
  }
})();
