"use client";

import { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Globe2, Hotel, MapPin, Phone, Users } from "lucide-react";

type Lang = "uz" | "ru" | "en";

const copy = {
  uz: {
    eyebrow: "SAMARQAND · IMOM BUXORIY MAJMUASI YONIDA",
    title: "Samimiy mehmondo‘stlik, xotirjam hordiq.",
    intro: "Imom Buxoriy ziyoratiga yaqin, qulay va shinam xonalarda dam oling.",
    booking: "Xonani band qilish", checkin: "Kelish sanasi", checkout: "Ketish sanasi",
    guests: "Mehmonlar", name: "Ism-familiya", phone: "Telefon raqami",
    room: "Xona turi", standard: "Standart — 2 kishilik", family: "Family — 4 kishilik",
    send: "Band qilish so‘rovini yuborish", note: "So‘rov yuborilgach, mehmonxona ma’muriyati siz bilan bog‘lanadi.",
    features: ["Har kuni nonushta", "Avtoturargoh", "Ziyoratgohga yaqin"],
    contact: "Aloqa", location: "Samarqand, Imom Buxoriy majmuasi yaqinida",
    success: "So‘rovingiz tayyorlandi. Telegram orqali yuborish uchun quyidagi tugmani bosing.",
    telegram: "Telegram orqali yuborish", required: "Iltimos, barcha maydonlarni to‘ldiring.",
    capacity: "Tanlangan xona sig‘imidan ko‘p mehmon kiritildi."
  },
  ru: {
    eyebrow: "САМАРКАНД · РЯДОМ С КОМПЛЕКСОМ ИМАМА БУХАРИ",
    title: "Тёплое гостеприимство и спокойный отдых.",
    intro: "Остановитесь в уютном отеле рядом с местом паломничества Имама Бухари.",
    booking: "Забронировать номер", checkin: "Дата заезда", checkout: "Дата выезда",
    guests: "Гостей", name: "Имя и фамилия", phone: "Номер телефона",
    room: "Тип номера", standard: "Стандарт — 2 места", family: "Family — 4 места",
    send: "Отправить заявку", note: "После отправки заявки администрация отеля свяжется с вами.",
    features: ["Завтрак каждый день", "Парковка", "Рядом с комплексом"],
    contact: "Контакты", location: "Самарканд, рядом с комплексом Имама Бухари",
    success: "Заявка подготовлена. Нажмите ниже, чтобы отправить её через Telegram.",
    telegram: "Отправить через Telegram", required: "Пожалуйста, заполните все поля.",
    capacity: "Количество гостей превышает вместимость выбранного номера."
  },
  en: {
    eyebrow: "SAMARKAND · NEXT TO THE IMAM BUKHARI COMPLEX",
    title: "Warm hospitality. A peaceful stay.",
    intro: "Enjoy a comfortable stay close to the Imam Bukhari pilgrimage complex.",
    booking: "Book a room", checkin: "Check-in", checkout: "Check-out",
    guests: "Guests", name: "Full name", phone: "Phone number",
    room: "Room type", standard: "Standard — 2 guests", family: "Family — 4 guests",
    send: "Send booking request", note: "Our hotel team will contact you after receiving your request.",
    features: ["Daily breakfast", "Parking", "Near the complex"],
    contact: "Contact", location: "Samarkand, near the Imam Bukhari complex",
    success: "Your request is ready. Tap below to send it via Telegram.",
    telegram: "Send via Telegram", required: "Please complete all fields.",
    capacity: "Guest count exceeds the selected room capacity."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("uz");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ arrival: "", departure: "", guests: "2", name: "", phone: "", room: "standard" });
  const t = copy[lang];
  const maxGuests = form.room === "family" ? 4 : 2;
  const message = useMemo(() => [
    "Imam Bukhari Grand Hotel — booking request",
    `Name: ${form.name}`, `Phone: ${form.phone}`, `Check-in: ${form.arrival}`,
    `Check-out: ${form.departure}`, `Guests: ${form.guests}`, `Room: ${form.room}`
  ].join("\n"), [form]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.arrival || !form.departure || !form.name.trim() || !form.phone.trim() || form.departure <= form.arrival) {
      alert(t.required);
      return;
    }
    if (Number(form.guests) > maxGuests) {
      alert(t.capacity);
      return;
    }
    setSent(true);
  }

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-mark"><Hotel size={21}/></span><span>IMAM BUKHARI <small>GRAND HOTEL</small></span></a>
        <div className="nav-right">
          <span className="lang-icon"><Globe2 size={16}/></span>
          {(["uz", "ru", "en"] as Lang[]).map((l) => <button key={l} className={lang === l ? "lang active" : "lang"} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          <a className="nav-phone" href="tel:+998557050122"><Phone size={16}/> +998 55 705 01 22</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-shade"/>
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <a className="primary-link" href="#booking">{t.booking}</a>
        </div>
        <div className="hero-caption">IMAM BUKHARI GRAND HOTEL <span>·</span> SAMARKAND</div>
      </section>

      <section className="features">
        {t.features.map((feature) => <div className="feature" key={feature}><CheckCircle2 size={19}/>{feature}</div>)}
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy">
          <p className="eyebrow dark">IMAM BUKHARI GRAND HOTEL</p>
          <h2>{t.booking}</h2>
          <p>{t.note}</p>
          <div className="location-line"><MapPin size={18}/>{t.location}</div>
          <div className="contact-line"><Phone size={18}/><a href="tel:+998557050122">+998 55 705 01 22</a></div>
        </div>
        <form className="booking-card" onSubmit={submit}>
          <div className="form-heading"><CalendarDays/><div><strong>{t.booking}</strong><small>ONLINE REQUEST</small></div></div>
          <div className="form-grid">
            <label>{t.checkin}<input type="date" min={new Date().toISOString().slice(0,10)} value={form.arrival} onChange={e=>setForm({...form,arrival:e.target.value})} required/></label>
            <label>{t.checkout}<input type="date" min={form.arrival || new Date().toISOString().slice(0,10)} value={form.departure} onChange={e=>setForm({...form,departure:e.target.value})} required/></label>
            <label>{t.guests}<span className="input-icon"><Users size={16}/><select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})}>{Array.from({length:maxGuests},(_,i)=><option key={i+1}>{i+1}</option>)}</select></span></label>
            <label>{t.room}<select value={form.room} onChange={e=>setForm({...form,room:e.target.value,guests:e.target.value==="family"?"4":"2"})}><option value="standard">{t.standard}</option><option value="family">{t.family}</option></select></label>
            <label className="full">{t.name}<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></label>
            <label className="full">{t.phone}<input type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+998" required/></label>
          </div>
          <button className="submit" type="submit">{t.send}</button>
          {sent && <div className="success"><p>{t.success}</p><a href={`https://t.me/share/url?url=&text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">{t.telegram} ↗</a></div>}
        </form>
      </section>
      <footer><span>© {new Date().getFullYear()} Imam Bukhari Grand Hotel</span><span>{t.contact} · +998 55 705 01 22</span></footer>
    </main>
  );
}
