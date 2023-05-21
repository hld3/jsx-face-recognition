import './Navigation.css';

// prettier-ignore
export default function navigation({ page, setPage, setInput }) {       
    
    return (
        <>
            {page === 'register' && <p onClick={() => setPage('signin')}>Sign In</p>}
            {page === 'signin' && <p onClick={() => setPage('register')}>Register</p>}
            {page === 'home' && <p onClick={() => { setPage('signin'); setInput('') }}>Sign Out</p>}
        </>
    )
}
