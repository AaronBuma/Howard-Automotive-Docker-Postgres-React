
-- 01-sample-data.sql

-- Cars
INSERT INTO cars (make, model, year, color, owner_id, image_url) VALUES
('Honda', 'Civic', 2010, 'Red', 1, 'http://example.com/civic.jpg'),
('Ford', 'Mustang', 2018, 'dusguistang red', 2, 'https://lh3.googleusercontent.com/pw/AP1GczPC35WEsEPCnhs05WCGVAuexjrhOaawDDPhXLZ1v6J0QKRguIi4q0CmgkrS1LD3rJjv6g8VubcLTVsoLMfmAVj0DBpmptdsYDi9YhjJiS9xe0ppQiY7S1ybHYNTTUkpAjqKZ1uN7lGXfCFxOlZ3w_pEKQ=w959-h432-s-no-gm'),
('Toyota', 'Corolla', 2015, 'catbus', 3, 'https://photos.google.com/share/AF1QipMWqnGMl7Y7J1-W5MGAlYgOXBgGnTYYo8raJ6b_rnbvioZwPWZDE5l6y0BWEOQnSg/photo/AF1QipOcMbt3KepmHC_bgwnwatT-8oJGhREn21MOI2jN?key=eHBxQjUyUEJyX1lQSXQ2T1VDYWViQ3BrMmw5Qk13');

-- Events
INSERT INTO events (name, location, date, description) VALUES
('Chuckanut Autocross', 'Bellingham', '2023-06-15', 'Season event'),
('Autocross Championship', 'Seattle', '2024-09-15', 'Annual autocross event'),
('Track Day', 'Portland', '2024-07-10', 'Casual track day for all members');

-- Sponsors
INSERT INTO sponsors (name, logo_url, website_url, description) VALUES
('SpeedParts', 'http://example.com/logo1.png', 'http://speedparts.com', 'Performance parts supplier.'),
('TrackTools', 'http://example.com/logo2.png', 'http://tracktools.com', 'Tools for motorsports.');

-- Services
INSERT INTO services (name, description, price) VALUES
('Oil Change', 'Complete synthetic oil change', 79.99),
('Tire Rotation', 'Front to back rotation', 49.99),
('Brake Inspection', 'Comprehensive brake system check', 39.99);
