const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 15 түрлі әртүрлі қалалардағы вакансиялар тізімі
let vacancies = [
    { id: 1, title: 'Frontend Developer', company: 'IT Solutions', city: 'Алматы', salary: '350 000 ₸', description: 'React және JavaScript білу қажет.' },
    { id: 2, title: 'Официант', company: 'Café Central', city: 'Алматы', salary: '180 000 ₸', description: 'Қонақтарға қызмет көрсету, қазақ және орыс тілдерін білу.' },
    { id: 3, title: 'Жүргізуші (Курьер)', company: 'Wolt Express', city: 'Астана', salary: '250 000 ₸', description: 'Жеке көлігі бар немесе мопедпен жеткізу.' },
    { id: 4, title: 'Бала оқытушы (Репетитор)', company: 'Bilim Center', city: 'Шымкент', salary: '200 000 ₸', description: 'Бастауыш сынып оқушыларына үй тапсырмасына көмектесу.' },
    { id: 5, title: 'Бариста', company: 'Coffee Boom', city: 'Алматы', salary: '190 000 ₸', description: 'Кофе қайнату және клиенттермен қарым-қатынас жасау.' },
    { id: 6, title: ' Accountant (Бухгалтер)', company: 'Finance Group', city: 'Астана', salary: '400 000 ₸', description: '1С бағдарламасымен жұмыс істей білу тәжірибесі.' },
    { id: 7, title: 'Сату менеджері', company: 'TechnoDom', city: 'Қарағанды', salary: '220 000 ₸', description: 'Электроника тауарларын сату және кеңес беру.' },
    { id: 8, title: 'Слагай (Қойма жұмысшысы)', company: 'Magnum Cash&Carry', city: 'Алматы', salary: '210 000 ₸', description: 'Тауарларды сректеу және қабылдау.' },
    { id: 9, title: 'Ағылшын тілі оқытушысы', company: 'Speak Easy', city: 'Астана', salary: '280 000 ₸', description: 'Интенсивті курс бойынша балалар мен ересектерге сабақ беру.' },
    { id: 10, title: 'Асхана аспазы (Повар)', company: 'Lғman House', city: 'Шымкент', salary: '300 000 ₸', description: 'Ұлттық тағамдар мен фастфуд дайындау.' },
    { id: 11, title: 'Охранник (Күзетші)', company: 'Security Plus', city: 'Атырау', salary: '170 000 ₸', description: 'Нысанды күзету, ауысымды жұмыс кестесі.' },
    { id: 12, title: 'Шаштараз (Барбер)', company: 'Black Chic', city: 'Алматы', salary: '350 000 ₸', description: 'Ерлер шаш үлгілерін жасау тәжірибесі.' },
    { id: 13, title: 'Администратор', company: 'Fitness Palace', city: 'Астана', salary: '230 000 ₸', description: 'Клиенттерді қарсы алу және қоңырауларға жауап беру.' },
    { id: 14, title: 'Тігінші', company: 'Aقم Style', city: 'Тараз', salary: '190 000 ₸', description: 'Киім тігу және жөндеу жұмыстары.' },
    { id: 15, title: 'SMM менеджер', company: 'Digital Agency', city: 'Алматы', salary: '270 000 ₸', description: 'Инстаграм мен TikTok парақшаларын жүргізу, контент түсіру.' }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Қала бойынша сүзгілеу мүмкіндігі бар API
app.get('/api/vacancies', (req, res) => {
    const city = req.query.city;
    if (city && city !== 'Барлығы') {
        const filtered = vacancies.filter(v => v.city === city);
        return res.json(filtered);
    }
    res.json(vacancies);
});

app.listen(port, () => {
    console.log('Сервер жұмыс істеп тур');
});