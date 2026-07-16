import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticleNetwork = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 w-full h-full z-0 opacity-35"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: ["grab", "repel"],
                        },
                    },
                    modes: {
                        grab: {
                            distance: 180,
                            links: {
                                opacity: 0.6,
                                color: "#fbbf24" // Matches brand-500 (orange) when grabbed
                            }
                        },
                        repel: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#fbbf24", // brand-500 Glowing Amber Points
                    },
                    links: {
                        color: "#ffffff", // Subtle white/grey lines normally
                        distance: 150,
                        enable: true,
                        opacity: 0.25,
                        width: 1.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1.2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 800,
                            height: 800
                        },
                        value: 120, // Number of nodes
                    },
                    opacity: {
                        value: 0.4,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.2
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.5
                        }
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
