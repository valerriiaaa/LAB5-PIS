#                   LAB_5 
# 🥗 Nutrition API Example

Цей репозиторій демонструє простий сценарій використання зовнішнього API сервісу API Ninjas – Nutrition API, який надає поживну інформацію про продукти харчування.


---

## 📌 Сценарій використання

Завдання:
Отримати поживну інформацію (калорії, жири, білки, вуглеводи тощо) для заданого продукту (наприклад, "banana") за допомогою Nutrition API та вивести результат у консоль.

Цей сценарій можна застосовувати у:

- Фітнес-додатках для підрахунку калорій
- Застосунках для планування раціону
- Програмах з контролю харчування
- Додатках персонального дієтолога або нутриціолога

---

## 🔗 Використаний API

Ендпоінт:  
GET  https://api.api-ninjas.com/v1/nutrition?query=banana

Приклад відповіді:
```
[
  {
    "name": "banana",
    "calories": 88.7,
    "serving_size_g": 100,
    "fat_total_g": 0.3,
    "protein_g": 1.1,
    "carbohydrates_total_g": 22.8,
    "sugar_g": 12.2,
    "fiber_g": 2.6,
    "sodium_mg": 1
  }
]
```

# 🛠 Інструкції по запуску

🔧 Вимоги
- Node.js 18+
- npm
- API ключ з api-ninjas.com

# 📥 Установка

```bash
git clone  https://github.com/your-username/nutrition-api-example.git
cd nutrition-api-example
npm install
```

# 📄 Код прикладу (index.js)

```
const axios = require('axios');

async function getNutritionInfo(food) {
  try {
    const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${food}`, {
      headers: {
        'X-Api-Key': 'YOUR_API_KEY'
      }
    });

    const data = response.data[0];
    console.log(`Продукт: ${data.name}`);
    console.log(`Калорії: ${data.calories}`);
    console.log(`Білки: ${data.protein_g} г`);
    console.log(`Жири: ${data.fat_total_g} г`);
    console.log(`Вуглеводи: ${data.carbohydrates_total_g} г`);
  } catch (error) {
    console.error('Помилка при отриманні інформації:', error.message);
  }
}

getNutritionInfo("banana");
```

# 🔐 Авторизація
У випадку, якщо API потребує ключ доступу, додайте його до заголовків:
headers: {
  'Authorization': 'Bearer YOUR_API_KEY'
}

# 👩 Авторка опису
Темко Валерія ІС-32
