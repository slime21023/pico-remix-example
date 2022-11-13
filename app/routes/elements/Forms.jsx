export default function Forms() {
    return (
        <div className="container">
            <article style={{margin: 0}}>
                <form>

                <div class="grid">

                <label for="firstname">
                    First name
                    <input type="text" id="firstname" name="firstname" placeholder="First name" required />
                </label>

                <label for="lastname">
                    Last name
                    <input type="text" id="lastname" name="lastname" placeholder="Last name" required />
                </label>

                </div>

                <label for="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="Email address" required />
                <small>We'll never share your email with anyone else.</small>

                <button type="submit">Submit</button>

                </form>
            </article>
            <code>
                {`<form>`}
                <br/>
                {`<div class="grid">`}
                <br/>
                {`   
                <label for="firstname">
                    First name
                    <input type="text" id="firstname" name="firstname" placeholder="First name" required />
                </label>
                `}
                <br/>
                {`     
                    <label for="lastname">
                        Last name
                        <input type="text" id="lastname" name="lastname" placeholder="Last name" required />
                    </label>
                `}
                <br/> 
                {`</div>`}
                <br/>
                {`  <label for="email">Email address</label> `}
                {`  <input type="email" id="email" name="email" placeholder="Email address" required /> `}
                {`  <small>We'll never share your email with anyone else.</small> `}
                <br/>
                {`    <button type="submit">Submit</button> `}
                <br/>
                {`</form>`}
                <br/>
            </code>
        </div>
    )
}