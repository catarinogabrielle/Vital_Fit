import Link from 'next/link';
import styles from './page.module.css';
import InstallButton from '@/components/InstallButton/InstallButton'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InstallButton />
        <div className={styles.box_card}>
          {[
            { title: 'Desafio dos 30 Dias', href: '/Challenge' },
            { title: 'Minha Dieta', href: '/Diet' },
            { title: 'Meus Treinos', href: '/Workouts' },
            { title: 'Receitas', href: '/Revenues' },
            { title: 'Controle de Saúde', href: '/Health' },
            { title: 'Detox', href: '/Detox' },
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
  )
}
