import ErrorStyles from '../styles/components/Error/Error.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
function Error() {
    const router = useRouter();
    const redirect = () => {
        router.push('/');
    }
    useEffect(() => {
        setTimeout(() => {
            redirect();
        }, 10 ** 4)
    }
        , [])
    return (
        <section className={ErrorStyles.container}>
            <div className={ErrorStyles.error}>
                <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
                <p>The page you are looking for might have been removed, had it’s name changed or currently unavailable.</p>
                <button onClick={redirect}>Back to home</button>
            </div>
        </section>

    )
}

export default Error
