import Head from 'next/head';
import Menu from './componentes/Menu';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title> 
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu /> 
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1> 
      </main>
    </div>
  );
};

export default Home;
