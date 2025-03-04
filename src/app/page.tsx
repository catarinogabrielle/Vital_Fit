import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box_card}>
          {[
            { title: 'Desafio dos 30 Dias', href: '/desafio' },
            { title: 'Minha Dieta', href: '/dieta' },
            { title: 'Meus Treinos', href: '/treinos' },
            { title: 'Receitas', href: '/receitas' },
            { title: 'Controle de Saúde', href: '/saude' },
            { title: 'Detox', href: '/detox' },
          ].map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className={styles.card}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
