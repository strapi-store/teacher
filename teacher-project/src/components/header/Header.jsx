import {headerItems} from "../../const";

export function Header() {
    return (
        <header className="bg-dark-blue p-2">
            <div className="container max-w-7xl mx-auto p-4">
                <ul className="flex gap-6 text-white justify-center" >
                    {
                        headerItems.map((item) => {
                            return (
                                <li key={item.title}>
                                    <a className="text-white uppercase" href={item.link}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    )
}