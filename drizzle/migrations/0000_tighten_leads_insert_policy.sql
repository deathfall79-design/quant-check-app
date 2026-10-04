DROP POLICY IF EXISTS "Anyone can submit an inquiry" ON public.leads;

CREATE POLICY "Anyone can submit an inquiry"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL AND length(btrim(name)) BETWEEN 2 AND 100
  AND phone IS NOT NULL AND length(btrim(phone)) BETWEEN 7 AND 20
  AND source IN ('contact_form', 'chatbot')
  AND (email IS NULL OR length(email) <= 255)
  AND (practice_area IS NULL OR length(practice_area) <= 150)
  AND (message IS NULL OR length(message) <= 1000)
);