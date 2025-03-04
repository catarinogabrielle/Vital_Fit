"use client"
import styles from "./installbutton.module.css";
import { useEffect, useState } from "react";

const InstallButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setIsVisible(true)
        }

        window.addEventListener("beforeinstallprompt", handler)
        return () => window.removeEventListener("beforeinstallprompt", handler)
    }, [])

    const handleInstallClick = () => {
        if (!deferredPrompt) return
        deferredPrompt.prompt()
        deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === "accepted") {
                console.log("Usuário aceitou a instalação")
            } else {
                console.log("Usuário recusou a instalação")
            }
            setDeferredPrompt(null)
            setIsVisible(false)
        })
    }

    return (
        isVisible && (
            <button onClick={handleInstallClick}>
                📥 Clique aqui para baixar
            </button>
        )
    )
}

export default InstallButton