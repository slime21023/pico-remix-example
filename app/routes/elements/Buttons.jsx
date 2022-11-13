export default function Buttons() {
    return (
        <div className="container">
            <article style={{margin: 0}}>
                <button>Button</button>
                <input type="submit"/>
                <br/><br/>
                <a href="#" role="button">Link</a>
            </article>
            <code>
                {`<button>Button</button>`}
                <br/>
                {`<input type="submit"/>`}
                <br/>
                {`<a href="#" role="button">Link</a>`}
                </code>
        </div>
    );
}