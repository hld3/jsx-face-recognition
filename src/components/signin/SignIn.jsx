import '../box.css'

export default function signIn({ setPage }) {

    return (
        <article className='article'>
            <fieldset id='fieldset'>
                <legend id='legend-text'>Sign In</legend>
                <label htmlFor="email">Email</label>
                <input type="email" id='email'/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password'/>
            </fieldset>
            <button onClick={() => setPage('home')}>Sign In</button>
            <p onClick={() => setPage('register')}>Register</p>
        </article>
    )
}
