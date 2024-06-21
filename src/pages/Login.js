//

import NavBar from "../components/NavBar"

function Login() {
    return (
        <>
            <header>
<NavBar/>
            </header>
            <main>
                <h1>Login</h1>
                <form>
                    <div>
                        <label for='username'>Username:</label>
                        <input type="text" id="username" name="username" placeholder="username" />
                    </div>
                    <br />
                    <div>
                        <label for='password'>Pssword</label>
                        <input type="password" id="password" placeholder="password" name="password" />
                    </div>
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login