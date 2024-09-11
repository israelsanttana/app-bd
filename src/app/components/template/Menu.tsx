import { IconHome, IconUserPlus } from "@tabler/icons-react";
import { MenuItem } from "./MenuItem";

export function Menu() {

    return (
        <aside className="w-40 bg-zinc-900 h-screen md:w-72">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icone={IconHome} texto="Início" url="/" />
                <MenuItem icone={IconUserPlus} texto="Cadastro Usuário" url="/usuarios" />
            </nav>
        </aside>
    )
}