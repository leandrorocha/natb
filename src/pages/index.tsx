import Link from 'next/link';

import { FormEvent, useState } from 'react';
import styles from './home.module.scss';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            email,
            password
        }

        console.log(data);
    }

    return (
        <div className={styles.contentContainer}>
            <h1>Vamos treinar?</h1>

            <form onSubmit={handleSubmit} className="container">

                <input
                    className="containerInput"
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    className="containerInput"
                    type="password"
                    value={password}
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="containerButton">
                    <button type="submit">Login</button>
                </div>
            </form>

            <p>
                <Link href="/user/new">
                    <a>Sou novo por aqui</a>
                </Link>
            </p>
        </div>
    )
}
