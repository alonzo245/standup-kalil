import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalizationState } from './context/useLocalizationState';
import IndexRouter from './routes';
import { parseQueryString } from './utils';

const App: FC = () => {
  const { locale, setLocale } = useLocalizationState();

  useEffect(() => {
    const existInQsUrl: any = parseQueryString(window.location.search);
    if (existInQsUrl?.locale) {
      document.body.style.direction = existInQsUrl?.locale === 'eng' ? 'ltr' : 'rtl';
      setLocale(existInQsUrl?.locale);
      localStorage.setItem('locale', existInQsUrl?.locale === 'eng' ? 'eng' : 'heb');
    } else {
      document.body.style.direction = localStorage.getItem('locale') === 'eng' ? 'ltr' : 'rtl';
    }
  }, [locale]);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <img className='main-image' src='/standup-kalil/images/1.jpg' alt='' />

      <button
        style={{ backgroundColor: 'green', marginBlock: '30px', fontSize: '30px', color: 'yellow' }}
        onClick={() => (window.location.href = 'https://chat.whatsapp.com/KCkmzHBNDyNL8xnUYSE5Up')}
      >
        לחצו כאן והצטרפו לקבוצת הוואטסאפ שלנו
      </button>

      <p className='main-text' style={{ color: 'white', direction: 'rtl', marginBottom: '10px' }}>
        הצטרפו לקבוצת הוואטסאפ הרשמית של הסטנדאפ הקליל! 🎤😂
        <br />
        כאן תישארו מעודכנים בכל מה שקשור למופעי סטנדאפ הכי מצחיקים.
        <br />
        מה תקבלו כאן?
        <br />
        🗓️ עדכונים על התאריכים הבאים 🎭
        <br />
        פרטים על אמנים חדשים שיעלו לבמה 📍
        <br />
        מידע על המקום והאווירה חוקים פשוטים:
        <br />
        1.⁠ ⁠תהיו קלילים, זה כל הקטע פה.
        <br />
        2.⁠ ⁠שמרו על הומור.
        <br />
        3.⁠ ⁠שתפו קישור לקבוצה עם חברים – צחוק זה מדבק! אז אם אתם בעניין של הופעות קורעות ואווירה
        קלילה בטירוף – אתם במקום הנכון! קישור להצטרפות: ‏‎
      </p>

      <button
        style={{ backgroundColor: 'green', marginBlock: '30px', fontSize: '30px', color: 'yellow' }}
        onClick={() => (window.location.href = 'https://chat.whatsapp.com/KCkmzHBNDyNL8xnUYSE5Up')}
      >
        לחצו כאן והצטרפו לקבוצת הוואטסאפ שלנו
      </button>
      <br />
    </div>
  );
};

export default App;
