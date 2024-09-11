import { Usuario } from "@/core/model/usuarios"
import { IconUser } from "@tabler/icons-react"

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex items-center gap-3 p-4 bg-zinc-900 rounded-md">
            <div className="w-34 h-34 rounded-full bg-black p-2">
                <IconUser size={26} />
            </div>
            <div className="flex flex-col">

                <span>{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>

        </div>
    )
}