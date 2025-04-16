export default function handler(req, res) {
    res.status(200).json({ message: 'Привет с серверной функции на Vercel!' });
  }