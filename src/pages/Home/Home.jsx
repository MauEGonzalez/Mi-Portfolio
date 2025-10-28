import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Desarrollador Web", "React Developer", "Apasionado por la Tecnología"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainText}>
          Hola, soy Mauro González
        </h1>
        <p className={styles.subText}>
          {`Soy `} 
          <span className={styles.wrap}>{text}</span>
        </p>
        <p className={styles.description}>
          Convierto ideas en experiencias web interactivas y funcionales. Explora mi trabajo y conoce más sobre mi pasión por el desarrollo.
        </p>
        <Link to="/projects" className={styles.ctaButton}>
          Ver mis Proyectos
        </Link>
      </div>
    </section>
  );
};

export default Home;