import { Link, Outlet } from "@remix-run/react"

export default function PicoExample() {
    return (
        <div className="grid">    
            <aside className="col-2">
                <nav>
                    <ul>
                        <li><Link to="/elements/Typography">Typography</Link></li>
                        <li><Link to="/elements/Buttons">Buttons</Link></li>
                        <li><Link to="/elements/Forms">Forms</Link></li>
                        <li><Link to="/elements/Tables">Tables</Link></li>
                    </ul>
                </nav>
            </aside>
            <article className="col" style={{margin: 0}}>
                <Outlet />
            </article>        
        </div>
    )
}