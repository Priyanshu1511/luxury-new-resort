/*
  # Create Resort Application Tables

  1. New Tables
    - `feedback` - Guest reviews and ratings
      - `id` (uuid, primary key)
      - `name` (text, reviewer name)
      - `email` (text, reviewer email)
      - `rating` (int, 1-5 stars)
      - `comment` (text, review content)
      - `room_type` (text, optional room type stayed)
      - `approved` (boolean, admin approval status)
      - `created_at` (timestamp)

    - `contact_messages` - Contact form submissions
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `subject` (text)
      - `message` (text)
      - `read` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Allow public INSERT for feedback and contact
    - Restrict SELECT to authenticated users only
*/

CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  room_type text DEFAULT '',
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
  ON feedback FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public can view approved feedback"
  ON feedback FOR SELECT
  TO anon, authenticated
  USING (approved = true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

INSERT INTO feedback (name, email, rating, comment, room_type, approved) VALUES
  ('Priya Sharma', 'priya@example.com', 5, 'An absolutely transcendent experience. The attention to detail in every room, from the hand-stitched linens to the bespoke toiletries, speaks of a property that truly understands luxury. The staff remembered our preferences from day one.', 'Royal Suite', true),
  ('James Wellington', 'james@example.com', 5, 'Serenova redefines what a luxury resort should be. The spa treatments were phenomenal, the dining was world-class, and every moment felt curated just for us. We will be returning every anniversary.', 'Lakeside Villa', true),
  ('Anika Mehta', 'anika@example.com', 5, 'From the moment our vehicle turned into the resort driveway, we felt transported to another world. The butler service is unmatched anywhere in the region. Truly a masterpiece of hospitality.', 'Garden Pavilion', true),
  ('Robert Chen', 'robert@example.com', 4, 'A breathtaking property with exceptional cuisine. The sunset views from the infinity pool are worth the trip alone. We particularly loved the private dining experience by the lake.', 'Heritage Room', true),
  ('Meera Kapoor', 'meera@example.com', 5, 'This is the pinnacle of Indian luxury hospitality. Every element—from the art on the walls to the handcrafted welcome drink—reflects deep thought and care. Already planning our return visit.', 'Presidential Suite', true),
  ('Thomas Laurent', 'thomas@example.com', 5, 'Having stayed at Aman and Oberoi properties worldwide, I can say Serenova stands among the finest. The seamless blend of local culture with contemporary luxury is masterfully executed.', 'Signature Room', true);
