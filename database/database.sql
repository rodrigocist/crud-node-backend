CREATE DATABASE nodeapi;
CREATE TABLE users(
                      id SERIAL PRIMARY KEY,
                      name VARCHAR(255),
                      email TEXT
);

INSERT INTO users (name, email) VALUES
                                    ('rodrigo', 'rodrigo@gmail.com'),
                                    ('jose', 'jose@gmail.com');