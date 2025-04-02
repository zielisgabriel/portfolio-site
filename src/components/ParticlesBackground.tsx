"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { ISourceOptions, MoveDirection, OutMode, type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const options: ISourceOptions = useMemo(
        () => ({
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 180,
              enable: true,
              opacity: 0.3,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.02,
              }
            },
            move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                default: OutMode.out,
              },
              random: false,
              speed: 7,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 100,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1.5, max: 1.7 },
            },
          },
          detectRetina: true,
        }),
        [],
    );

    if (init) {
        return <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 -z-50"
        />
    }

    return <></>
}