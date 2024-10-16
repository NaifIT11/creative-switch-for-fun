

type SwitchProps = {
    checked: boolean,
    onCheckedChange: (checked: boolean) => void
}


export default function Switch({checked , onCheckedChange}: SwitchProps){
    return <button className="w-20 h-5 rounded-full border rounded" role="switch" aria-checked={checked} aria-label="Switch Control">
        <div data-checked={checked} className="w-5 h-4"></div>
    </button>
}