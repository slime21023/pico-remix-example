import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async () => {
    const example = [
        {
            layout: 'container', code: `
            <body>
                <main className="container"></main>
            </body>
            `,
            href: "https://picocss.com/docs/containers.html"
        },
        {
            layout: 'grid', code: `
            <div className="grid">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>`,
            href: "https://picocss.com/docs/grid.html"
        },
        {
            layout: 'Horizontal scroller', code: `
            <figure>
                <table>
                    …
                </table>
            </figure>
            `,
            href: "https://picocss.com/docs/scroller.html"
        }
    ]

    return json(example)
}

function Example(item, index) {
    return (
        <article key={index}>
            <h1>{item.layout}</h1>
            <code>
                {item.code}
            </code>
            <br />
            <br />
            <a href={item.href} target="_blank">Detail</a>
        </article>
    )
}


export default function PicoLayout() {
    const examples = useLoaderData();
    return (
        <>
            {examples.map(Example)}
        </>
    );
}
