import { Menu } from "./Menu"

export interface PaginaProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}

export function Pagina(props: PaginaProps) {
    return (
        <div className="flex">
            <Menu />
            <main className="flex-1 p-7">
                {props.children}
            </main>
        </div>
    )
}