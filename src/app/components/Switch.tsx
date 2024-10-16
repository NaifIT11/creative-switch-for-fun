

type SwitchProps = {
    checked: boolean,
    onCheckedChange: (checked: boolean) => void
}


export default function Switch({checked , onCheckedChange}: SwitchProps){
    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        onCheckedChange(!checked);
    }
    return <button onClick={handleClick} data-checked={checked} className="data-[checked=true]:bg-green-300 w-[300px] h-[100px] rounded border rounded bg-gray-100" role="switch" aria-checked={checked} aria-label="Switch Control">
        <div data-checked={checked} className="data-[checked=true]:translate-x-[198px] transition w-[100px] h-[100px] bg-white"></div>
    </button>
}