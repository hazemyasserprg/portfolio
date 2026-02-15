"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
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

    // Initialize mute state from localStorage
    useEffect(() => {
        const savedMute = localStorage.getItem('soundMuted');
        if (savedMute === 'true') {
            setIsMuted(true);
        }
    }, []);

    const toggleMute = () => {
        const newState = !isMuted;
        setIsMuted(newState);
        localStorage.setItem('soundMuted', String(newState));
    };

    const [playHoverSfx] = useSound('/sounds/hover.wav', { volume: 0.3, soundEnabled: !isMuted });
    const [playClickSfx] = useSound('/sounds/click.wav', { volume: 0.2, soundEnabled: !isMuted });

    const playHover = () => playHoverSfx();
    const playClick = () => playClickSfx();

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
