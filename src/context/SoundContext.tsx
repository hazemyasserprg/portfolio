"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';

interface SoundContextType {
    isMuted: boolean;
    toggleMute: () => void;
    playHover: () => void;
    playClick: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Initialize mute state from localStorage
    useEffect(() => {
        const savedMute = localStorage.getItem('soundMuted');
        if (savedMute === 'true') {
            setIsMuted(true);
        }

        const unlockAudio = () => {
            setHasInteracted(true);
            document.removeEventListener('mousedown', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
        };

        document.addEventListener('mousedown', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);

        return () => {
            document.removeEventListener('mousedown', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
        };
    }, []);

    const toggleMute = () => {
        const newState = !isMuted;
        setIsMuted(newState);
        localStorage.setItem('soundMuted', String(newState));
    };

    const [playHoverSfx] = useSound('/sounds/hover.wav', { volume: 0.1, soundEnabled: !isMuted && hasInteracted });

    const playHover = useCallback(() => {
        if (hasInteracted && !isMuted) {
            playHoverSfx();
        }
    }, [hasInteracted, isMuted, playHoverSfx]);

    // Global listener for all links and buttons
    useEffect(() => {
        if (!hasInteracted || isMuted) return;

        const handleGlobalHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactiveElement = target.closest('a, button');

            if (interactiveElement) {
                const fromElement = e.relatedTarget as HTMLElement;
                if (!fromElement || !interactiveElement.contains(fromElement)) {
                    playHover();
                }
            }
        };

        document.addEventListener('mouseover', handleGlobalHover);
        return () => document.removeEventListener('mouseover', handleGlobalHover);
    }, [hasInteracted, isMuted, playHover]);

    const playClick = () => { };

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSoundEffects = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSoundEffects must be used within a SoundProvider');
    }
    return context;
};
