const { Pool } = require('pg');

async function testConnection() {
  // Test with password "postgres"
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'udiblog',
    user: 'postgres',
    password: 'postgres',
  });

  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Connection successful!');
    console.log('Server time:', result.rows[0].now);

    // Test User table
    const users = await pool.query('SELECT id, email, name, role FROM "User"');
    console.log('\n📋 Users in database:');
    console.table(users.rows);

    await pool.end();
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('\nTrying without password...');

    // Try without password
    const pool2 = new Pool({
      host: 'localhost',
      port: 5432,
      database: 'udiblog',
      user: 'postgres',
      password: '',
    });

    try {
      const result2 = await pool2.query('SELECT NOW()');
      console.log('✅ Connection without password successful!');
      console.log('Server time:', result2.rows[0].now);
      await pool2.end();
    } catch (error2) {
      console.error('❌ Connection without password also failed:', error2.message);
    }
  }
}

testConnection();
