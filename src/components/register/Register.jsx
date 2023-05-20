import '../box.css'

export default function register({ setPage }) {
    
    return (
        <article className='article'>
            <fieldset id='fieldset'>
                <legend id='legend-text'>Register</legend>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name'/>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'/>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password'/>
            </fieldset>
            <button onClick={() => setPage('home')}>Sign Up</button>
        </article>
    )
}