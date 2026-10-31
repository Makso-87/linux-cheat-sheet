import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.label}>Linux Cheat Sheet</p>
        <h1>React + TypeScript + Vite</h1>
        <p>Проект готов к разработке. Стили подключены через SCSS Modules.</p>
        <button className={styles.button} onClick={() => setCount((value) => value + 1)}>
          Счётчик: {count}
        </button>
      </section>
    </main>
  );
}

export default App;
