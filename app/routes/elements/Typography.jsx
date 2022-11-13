export default function Typography() {
    return (
        <div className="container">
            <article style={{margin: 0}}>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </article>
            <code>
                {`<h1>Heading 1</h1>`}
                <br/>
                {`<h2>Heading 2</h2>`}
                <br/>
                {`<h3>Heading 3</h3>`}
                <br/>
                {`<h4>Heading 4</h4>`}
                <br/>
                {`<h5>Heading 5</h5>`}
                <br/>
                {`<h6>Heading 6</h6>`}
                </code>
        </div>
    );
}