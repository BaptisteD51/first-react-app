import { useEffect, useState } from "react"

function useDisplay() {
    const [displayMobile, updateDisplayMobile] = useState(
        window.innerWidth < 768
    )

    useEffect(function () {
        function handleResize() {
            let w = window.innerWidth
            updateDisplayMobile(w<768)
        }

        window.addEventListener("resize", handleResize)

        return () => {window.removeEventListener("resize", handleResize)}
    }, [])

    return [displayMobile]
}

export default useDisplay
