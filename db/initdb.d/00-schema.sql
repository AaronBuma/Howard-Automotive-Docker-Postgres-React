
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    make VARCHAR(100),
    model VARCHAR(100),
    year INT,
    photo_url TEXT
);

INSERT INTO cars (make, model, year, photo_url) VALUES
('Mazda', 'MX-5 Miata', 1999, 'https://example.com/miata.jpg'),
('Subaru', 'BRZ', 2017, 'https://example.com/brz.jpg'),
('Honda', 'Civic Si', 2008, 'https://example.com/civic.jpg');

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    date DATE,
    location VARCHAR(200),
    description TEXT
);

INSERT INTO events (name, date, location, description) VALUES
('Local Autocross #1', '2025-03-15', 'Everett, WA', 'First event of the season!'),
('Spring Shootout', '2025-04-20', 'Spokane, WA', 'Competitive spring event'),
('Summer Slam', '2025-07-10', 'Portland, OR', 'Annual summer autocross meetup');

CREATE TABLE sponsors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    logo_url TEXT,
    website TEXT
);

INSERT INTO sponsors (name, logo_url, website) VALUES
('Tire Rack', 'https://example.com/tirerack-logo.png', 'https://tirerack.com'),
('AutoZone', 'https://example.com/autozone-logo.png', 'https://autozone.com');

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    description TEXT,
    price DECIMAL(10, 2)
);

INSERT INTO services (name, description, price) VALUES
('Tire Mounting', 'Mounting performance tires to your wheels', 40.00),
('Brake Bleed', 'Flush and bleed your braking system', 60.00),
('Alignment', 'Track-focused wheel alignment', 100.00);
