import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function LoadSub() {
    let theme = useContext(ThemeContext)
    // console.log({ theme })s
    return (
        <p>This is sub component with {theme} theme</p>
    )
}