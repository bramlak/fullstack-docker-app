CREATE TABLE IF NOT EXISTS reactions (
  emoji VARCHAR(10) PRIMARY KEY,
  count INT NOT NULL DEFAULT 0
);

INSERT INTO reactions (emoji, count) VALUES
  ('👍', 0),
  ('❤️', 0),
  ('😂', 0),
  ('😮', 0),
  ('😢', 0)
ON DUPLICATE KEY UPDATE count = count;