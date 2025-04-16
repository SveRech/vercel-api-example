module.exports = async (req, res) => {
  console.log('Запрос на /api/test получен');
  try {
    // Логика работы с базой данных
    res.status(200).json({ message: "Запрос прошел успешно" });
  } catch (err) {
    console.error('Ошибка в db-test:', err);
    res.status(500).json({ error: "Ошибка на сервере" });
  }
};