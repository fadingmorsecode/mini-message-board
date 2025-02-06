const { Pool } = require('pg');

module.exports = new Pool({
  connectionString:
    'postgresql://neondb_owner:npg_QnPYFp9OTwk0@ep-billowing-star-a8zh0qp0-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
});
