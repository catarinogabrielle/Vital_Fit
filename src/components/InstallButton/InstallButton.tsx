"use client";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

const InstallButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handler = (e: BeforeInstallPromptEvent) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setIsVisible(true)
        }

        window.addEventListener("beforeinstallprompt", handler as EventListener)

        return () => window.removeEventListener("beforeinstallprompt", handler as EventListener)
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        await deferredPrompt.prompt()

        const choiceResult = await deferredPrompt.userChoice
        if (choiceResult.outcome === "accepted") {
            console.log("Usuário aceitou a instalação")
        } else {
            console.log("Usuário recusou a instalação")
        }

        setDeferredPrompt(null)
        setIsVisible(false)
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