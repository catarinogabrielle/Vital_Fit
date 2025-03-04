import Link from 'next/link';
import styles from "./bottomnav.module.css";
import { Home, User, Target } from 'lucide-react';

export default function BottomNav() {
    return (
        <div className={styles.container}>
            <nav className={styles.content}>
                <Link href="/" className={styles.link}>
                    <Home size={22} color='#fff' />
                    <h1>Home</h1>
                </Link>
                <Link href="/metas" className={styles.link}>
                    <Target size={22} color='#fff' />
                    <h1>Metas</h1>
                </Link>
                <Link href="/perfil" className={styles.link}>
                    <User size={22} color='#fff' />
                    <h1>Perfil</h1>
                </Link>
            </nav>
        </div>
    )
}
