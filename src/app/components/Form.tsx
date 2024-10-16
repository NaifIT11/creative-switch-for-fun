"use client"

import { useState } from "react"
import Switch from "./Switch"




export default function Form(){
    const [checked  , setChecked] = useState(false);
    return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Switch checked={checked} onCheckedChange={setChecked} />
    </div>
}