import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
    icone: ElementType
    texto: string
    url: string
}

export function MenuItem(props: MenuItemProps) {
    return (
        <Link className="flex gap-2 px-4 py-2 hover:bg-black" href={props.url}>
            <props.icone className="text-zinc-200" size={24} stroke={1} />
            <span className="text-zinc-200">{props.texto}</span>
        </Link>
    )
}