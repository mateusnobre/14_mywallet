CREATE TABLE transactions (
    id SERIAL,
    client_id INTEGER,
    "value" FLOAT,
    comment TEXT,
    created_at timestamp
)