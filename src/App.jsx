import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-success" href="#">worktap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Специалисты</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Вход</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success ms-2 px-3" href="#">Регистрация</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="fw-bold mb-3">Получайте фриланс-услуги в два клика</h1>
              <p className="mb-4 text-muted">
                Найдите нужного специалиста за минуты, начните работу сразу!
              </p>
              <div className="d-flex gap-2 justify-content-center justify-content-md-start">
                <button className="btn btn-success">Найти специалиста</button>
                <button className="btn btn-outline-secondary">Стать исполнителем</button>
              </div>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
            <img className="super img-fluid" src="./img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
{/* 3. Актуальные ворки Section */}
<section className="py-5">
  <div className="container">
    <h2 className="fw-bold mb-4">Актуальные ворки</h2>
    <div className="row g-4">
      {[
        {
          title: "Сделать дизайн интернет-магазина",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim.",
          img: "https://i.imgur.com/wvxPV9S.png",
        },
        {
          title: "Верстка landing page",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim.",
          img: "https://i.imgur.com/AZlQ9l5.png",
        },
        {
          title: "Сделать дизайн сайта-каталога...",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim.",
          img: "https://i.imgur.com/2yAf1.jpg",
        },
        {
          title: "Продвижение instagram",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim.",
          img: "https://placehold.co/420x270", // Temporary
        },
        {
          title: "Срочно! Нужен веб дизайнер!",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim.",
          img: "https://i.imgur.com/OZaT7jl.png",
        },
      ].map((work, idx) => (
        <div className="col-md-4" key={idx}>
          <div
            className={`p-4 h-100 bg-white rounded border ${
              work.highlight ? "border-primary shadow-sm" : "border-light"
            }`}
            style={{ transition: "0.3s", borderWidth: work.highlight ? "2px" : "1px" }}
          >
            <div className="d-flex align-items-center mb-3">
              <img
                src={work.img}
                alt="user"
                className="rounded-circle me-3"
                width="40"
                height="40"
                style={{ objectFit: "cover" }}
              />
              <h6 className="fw-bold m-0">{work.title}</h6>
            </div>
            <p className="text-muted mb-4">{work.desc}</p>
            <button
              className={`btn ${
                work.highlight ? "btn-outline-primary" : "btn-outline-success"
              } w-100`}
            >
              Посмотреть
            </button>
          </div>
        </div>
      ))}

      {/* Last Card: Смотреть все ворки */}
      <div className="col-md-4">
        <div className="p-4 bg-light rounded h-100 d-flex align-items-center justify-content-center text-center">
          <a href="#" className="text-success fw-bold fs-5 text-decoration-none">
            Смотреть все ворки
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Top Freelancers Section (without map) */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-4">Топ фрилансеров</h3>
          <div className="row g-4">
            {/* Freelancer 1 */}
   <div className="col-md-4 col-lg-4">
              <div className="p-3 bg-white d-flex align-items-center justify-content-between rounded shadow-sm h-100 text-center position-relative">
             <div>
                 <img src="./img/odam.png" alt="Наталья Захарова" className="rounded-circle mb-3" width="150" height="150" />
             </div>
              <div>
                  <h6 className="fw-bold mb-1">Наталья Захарова</h6>
                  <p className="text-warning mb-1" style={{ fontSize: "0.95rem" }}>Motion дизайнер</p>
                  <p className="text-muted" style={{ fontSize: "0.85rem" }}>Выполнено проектов: 71</p>
                  <div className="mb-2 text-warning">★★★★★</div>
                  <button className="btn btn-outline-success btn-sm">Написать</button>
              </div>
              </div>
            </div>

            {/* Freelancer 2 */}
          <div className="col-md-4 col-lg-4">
              <div className="p-3 bg-white d-flex align-items-center justify-content-between rounded shadow-sm h-100 text-center position-relative">
             <div>
                 <img src="./img/odam.png" alt="Наталья Захарова" className="rounded-circle mb-3" width="150" height="150" />
             </div>
              <div>
                  <h6 className="fw-bold mb-1">Наталья Захарова</h6>
                  <p className="text-warning mb-1" style={{ fontSize: "0.95rem" }}>Motion дизайнер</p>
                  <p className="text-muted" style={{ fontSize: "0.85rem" }}>Выполнено проектов: 71</p>
                  <div className="mb-2 text-warning">★★★★★</div>
                  <button className="btn btn-outline-success btn-sm">Написать</button>
              </div>
              </div>
            </div>

            {/* Freelancer 3 */}
   <div className="col-md-4 col-lg-4">
              <div className="p-3 bg-white d-flex align-items-center justify-content-between rounded shadow-sm h-100 text-center position-relative">
             <div>
                 <img src="./img/odam.png" alt="Наталья Захарова" className="rounded-circle mb-3" width="150" height="150" />
             </div>
              <div>
                  <h6 className="fw-bold mb-1">Наталья Захарова</h6>
                  <p className="text-warning mb-1" style={{ fontSize: "0.95rem" }}>Motion дизайнер</p>
                  <p className="text-muted" style={{ fontSize: "0.85rem" }}>Выполнено проектов: 71</p>
                  <div className="mb-2 text-warning">★★★★★</div>
                  <button className="btn btn-outline-success btn-sm">Написать</button>
              </div>
              </div>
            </div>

            {/* Freelancer 4 */}
             <div className="col-md-4 col-lg-4">
              <div className="p-3 bg-white d-flex align-items-center justify-content-between rounded shadow-sm h-100 text-center position-relative">
             <div>
                 <img src="./img/odam.png" alt="Наталья Захарова" className="rounded-circle mb-3" width="150" height="150" />
             </div>
              <div>
                  <h6 className="fw-bold mb-1">Наталья Захарова</h6>
                  <p className="text-warning mb-1" style={{ fontSize: "0.95rem" }}>Motion дизайнер</p>
                  <p className="text-muted" style={{ fontSize: "0.85rem" }}>Выполнено проектов: 71</p>
                  <div className="mb-2 text-warning">★★★★★</div>
                  <button className="btn btn-outline-success btn-sm">Написать</button>
              </div>
              </div>
            </div>

            {/* Freelancer 5 */}
            <div className="col-md-4 col-lg-4">
              <div className="p-3 bg-white d-flex align-items-center justify-content-between rounded shadow-sm h-100 text-center position-relative">
             <div>
                 <img src="./img/odam.png" alt="Наталья Захарова" className="rounded-circle mb-3" width="150" height="150" />
             </div>
              <div>
                  <h6 className="fw-bold mb-1">Наталья Захарова</h6>
                  <p className="text-warning mb-1" style={{ fontSize: "0.95rem" }}>Motion дизайнер</p>
                  <p className="text-muted" style={{ fontSize: "0.85rem" }}>Выполнено проектов: 71</p>
                  <div className="mb-2 text-warning">★★★★★</div>
                  <button className="btn btn-outline-success btn-sm">Написать</button>
              </div>
              </div>
            </div>

            {/* View All Block */}
            <div className="col-md-4 col-lg-4">
              <div className="h-100 d-flex justify-content-center align-items-center rounded text-center" style={{ backgroundColor: "#f7f5ff" }}>
                <p className="text-success fw-semibold">Посмотреть всех ТОП фрилансеров</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* How it works section */}
      <section className="py-5">
        <div className="container">
          <h4 className="fw-bold">Как решать задачи на WorkTap?</h4>
          <p className="text-muted">Идеально подходит для бизнеса и частных лиц</p>
          <div className="row text-center pt-4">
            <div className="col-md-4">
              <img src="./img/das.png" alt="Выберите услугу" width="60" className="mb-3" />
              <h6 className="fw-bold">Выберите услугу</h6>
              <p className="text-muted">В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
            </div>
            <div className="col-md-4">
              <img src="./img/das.png" alt="Оплатите" width="60" className="mb-3" />
              <h6 className="fw-bold">Оплатите</h6>
              <p className="text-muted">Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите.</p>
            </div>
            <div className="col-md-4">
              <img src="./img/das.png" alt="Получите результат" width="60" className="mb-3" />
              <h6 className="fw-bold">Получите результат</h6>
              <p className="text-muted">Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
            </div>
          </div>
        </div>
      </section>

         {/* How WorkTap Helps Businesses Section */}
      <section className="py-5" style={{ backgroundColor: '#FFC727' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-md-6">
              <h5 className="fw-bold text-white mb-4">Как WorkTap помогает бизнесу?</h5>

              <div className="bg-white d-flex align-items-center p-3 mb-3 rounded shadow-sm">
                <img src="./img/card.png" alt="card" width="32" className="me-3" />
                <p className="mb-0 small">Оплачивайте с р/с или карты компании</p>
              </div>

              <div className="bg-white d-flex align-items-center p-3 mb-3 rounded shadow-sm">
                <img src="./img/card.png" alt="budget" width="32" className="me-3" />
                <p className="mb-0 small">Экономьте до 87% бюджета на фрилансе</p>
              </div>

              <div className="bg-white d-flex align-items-center p-3 mb-4 rounded shadow-sm">
                <img src="./img/card.png" alt="clock" width="32" className="me-3" />
                <p className="mb-0 small">Экономьте до 75% времени на решении фриланс задач</p>
              </div>

              <p className="text-white mb-3">WorkTap — быстро, просто и безопасно!</p>
              <button className="btn btn-primary px-4 py-2">Начать!</button>
            </div>

            {/* Right Column */}
            <div className="col-md-6 text-center">
              <img src="./img/offic.png" alt="notepad" className="img-fluid" style={{ maxHeight: '350px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
          <footer className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">Топ категории</h6>
              <ul className="list-unstyled text-muted small">
                <li>Тексты и переводы</li>
                <li>Разработка</li>
                <li>Дизайн</li>
                <li>Аудио, видео монтаж</li>
                <li>Сочиня и реклама</li>
                <li>Бизнес и жизнь</li>
                <li>SEO и оптимизация</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">О Проекте</h6>
              <ul className="list-unstyled text-muted small">
                <li>О Нас</li>
                <li>Как Это Работает</li>
                <li>Политика Приватности</li>
                <li>Правила Пользования</li>
                <li>Пресса о нас</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">Поддержка</h6>
              <ul className="list-unstyled text-muted small">
                <li>Контакты</li>
                <li>Политика Безопасности</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">Follow</h6>
              <div className="d-flex gap-3">
                <i className="bi bi-facebook fs-4"></i>
                <i className="bi bi-twitter fs-4"></i>
                <i className="bi bi-instagram fs-4"></i>
                <i className="bi bi-linkedin fs-4"></i>
              </div>
            </div>
          </div>
          <div className="text-center text-muted small">
            Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

