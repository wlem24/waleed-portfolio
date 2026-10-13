// Single source of truth for personal details and links.
// Update here once — Hero, Contact and Footer all read from this file.
// Pre-filled WhatsApp message (Arabic + English).
const WHATSAPP_MESSAGE =
  'السلام عليكم وليد، شفت ملف أعمالك وأحب أتواصل معك.\nHello Waleed, I saw your portfolio and I would like to get in touch.'

export const PROFILE = {
  name: 'Waleed Albarakati',
  role: 'Full-Stack Software Engineer',
  location: 'Riyadh, Saudi Arabia',
  email: 'albrkati9@gmail.com',
  phone: '+966 59 705 5755',
  phoneHref: 'tel:+966597055755',
  whatsapp: `https://wa.me/966597055755?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  github: 'https://github.com/wlem24',
  linkedin: 'https://linkedin.com/in/waleed-albarakati',
  cv: `${import.meta.env.BASE_URL}Waleed_Albarakati_CV.pdf`,
}

export const NAV_LINKS = [
  ['about', 'About'],
  ['tech-stack', 'Tech Stack'],
  ['projects', 'Projects'],
  ['certifications', 'Certifications'],
  ['contact', 'Contact'],
]
