const dotenv = require('dotenv');

let path = '.env';

if (process.env.NODE_ENV === 'staging') path = '.env.staging';

if (process.env.NODE_ENV === 'production') path = '.env.production';

dotenv.config({ path });
