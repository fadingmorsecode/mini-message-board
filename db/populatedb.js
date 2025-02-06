const { Client } = require('pg');
const dotenv = require('dotenv').config();
const { format } = require('date-fns');

const currentDate = new Date();
const formattedDate = format(currentDate, 'PP');

const SQL = `CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR(255), message VARCHAR( 255 ), date  VARCHAR
);

INSERT INTO messages (name, message, date)
VALUES
    ('drake', 'Hey! Just a quick reminder to check your email when you get a chance. I sent over the details for our meeting tomorrow. Let me know if you need anything!', '${formattedDate}'),
    ('mimi', 'howdy there partner', '${formattedDate}'),
    ('atlas', 'I like to play. I am a cat. Meeeeeeow.', '${formattedDate}'),
    ('athena', 'I''m probably under the bed right now.', '${formattedDate}'),
    ('barbie', 'woof', '${formattedDate}');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.NEON,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
