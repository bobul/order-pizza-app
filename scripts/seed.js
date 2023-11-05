const { db, sql} = require('@vercel/postgres');
const { restaurants, menu} = require('../lib/placeholder-data');
async function seedRestaurants(client) {
  try {
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS restaurants (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255),
        street VARCHAR(255),
        description TEXT
        );
    `;
    console.log(`Created "restaurants" table`);
    const insertedRestaurants = await Promise.all(
      restaurants.map(async (restaurant) => {
        return client.sql`
        INSERT INTO restaurants (name, image_url, street, description) \
        VALUES (${restaurant.name}, ${restaurant.image_url}, ${restaurant.street}, ${restaurant.description});
        `;
      }),
    );
    console.log(`Seeded ${insertedRestaurants.length} restaurants`);
    return {
      createTable,
      restaurants: insertedRestaurants,
    };
  } catch (error) {
    console.error('Error seeding restaurants:', error);
    throw error;
  }
}

async function seedMenu(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS menu (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        category VARCHAR(255) NOT NULL,
        restaurantId INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        topping TEXT[] NOT NULL,
        rank INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        pizza_image_url VARCHAR(255) NOT NULL
    );
`;
    console.log(`Created "menu" table`);
    const insertedMenu = await Promise.all(
      menu.map(
        (menuItem) => client.sql`
        INSERT INTO menu (category, restaurantId, name, topping, rank, price, pizza_image_url)
        VALUES (${menuItem.category}, ${menuItem.restaurantId}, ${menuItem.name}, ${menuItem.topping}, ${menuItem.rank}, ${menuItem.price}, ${menuItem.pizza_image_url})
        ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
    console.log(`Seeded ${insertedMenu.length} menu items`);
    return {
      createTable,
      menu: insertedMenu,
    };
  } catch (error) {
    console.error('Error seeding menu:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedRestaurants(client);
  await seedMenu(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});