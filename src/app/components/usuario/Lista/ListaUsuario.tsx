import usuarios from "@/app/data/constants/usuarios";
import { LinhaUsuario } from "./LinhaUsuario";

export function ListaUsuario() {
    return (
        <div className="flex flex-col gap-3">
            {usuarios.map((usuario) => {
                return (
                    <LinhaUsuario key={usuario.id} usuario={usuario} />
                )
            })}
        </div>
    )
}