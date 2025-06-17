
-- 00-schema.sql

CREATE TABLE IF NOT EXISTS cars (
    id SERIAL PRIMARY KEY,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INT NOT NULL,
    color TEXT,
    owner_id INT,
    image_url TEXT
);

CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    date DATE NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS sponsors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    logo_url TEXT,
    website_url TEXT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL
);
