"use client"

import * as motion from "motion/react-client"
import { animate, stagger } from "motion"
import { useRef, useEffect } from "react"
import { Button } from "@panda-ds-ui/primitives/button"
import { Box, Flex } from "@panda-ds-ui/primitives/layout"
import { Text } from "@panda-ds-ui/primitives/text"
import { css } from "@panda-ds-ui/styled-system/css"

export const Hero = () => {
    const constraintsRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Hide the container until the fonts are loaded
            containerRef.current.style.visibility = "visible"

            // Animate the first text (PrometheusUI)
            const titleElement = containerRef.current.querySelector(".hero-title")
            if (titleElement) {
                const words = titleElement.textContent?.split(' ') || []
                const wordElements = words.map((word, index) => {
                    const span = document.createElement('span')
                    span.textContent = word + ' '
                    span.style.opacity = '0'
                    span.style.transform = 'translateY(10px)'
                    span.style.display = 'inline-block'
                    span.style.willChange = 'transform, opacity'
                    return span
                })

                titleElement.innerHTML = ''
                wordElements.forEach(span => titleElement.appendChild(span))

                animate(
                    wordElements,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                        type: "spring",
                        duration: 2,
                        bounce: 0,
                        delay: stagger(0.05),
                    }
                )
            }

            // Animate the second text (Copy, Run & Get Started)
            const subtitle1Element = containerRef.current.querySelector(".hero-subtitle-1")
            if (subtitle1Element) {
                const words = subtitle1Element.textContent?.split(' ') || []
                const wordElements = words.map((word, index) => {
                    const span = document.createElement('span')
                    span.textContent = word + ' '
                    span.style.opacity = '0'
                    span.style.transform = 'translateY(10px)'
                    span.style.display = 'inline-block'
                    span.style.willChange = 'transform, opacity'
                    return span
                })

                subtitle1Element.innerHTML = ''
                wordElements.forEach(span => subtitle1Element.appendChild(span))

                animate(
                    wordElements,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                        type: "spring",
                        duration: 2,
                        bounce: 0,
                        delay: stagger(0.05, { startDelay: 0.3 }),
                    }
                )
            }

            // Animate the third text (With Prometheus)
            const subtitle2Element = containerRef.current.querySelector(".hero-subtitle-2")
            if (subtitle2Element) {
                const words = subtitle2Element.textContent?.split(' ') || []
                const wordElements = words.map((word, index) => {
                    const span = document.createElement('span')
                    span.textContent = word + ' '
                    span.style.opacity = '0'
                    span.style.transform = 'translateY(10px)'
                    span.style.display = 'inline-block'
                    span.style.willChange = 'transform, opacity'
                    return span
                })

                subtitle2Element.innerHTML = ''
                wordElements.forEach(span => subtitle2Element.appendChild(span))

                animate(
                    wordElements,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                        type: "spring",
                        duration: 2,
                        bounce: 0,
                        delay: stagger(0.05, { startDelay: 0.6 }),
                    }
                )
            }
        })
    }, [])

    return (
        <motion.div className={css({
            marginBlock: 'auto'
        })} ref={constraintsRef} style={constraints}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                style={heroContent}
            >
                <div className="container" ref={containerRef}>
                    <Box textAlign='left' my='auto'>
                        <Text className="hero-title" fontWeight='600' mb='-3'>PrometheusUI</Text>
                        <Text className="hero-subtitle-1" fontSize='xxx-large' color='text.app' fontWeight='700' mb='-4'>Copy, Run & Get Started</Text>
                        <Text className="hero-subtitle-2" fontSize='xxx-large' color='text.app' fontWeight='700'>With Prometheus</Text>
                        <Flex gap='2'>
                            <Button look="outline" colorPalette="brand.grayA">
                                Copy github repo to get started
                            </Button>
                            <Button look="solid" colorPalette="brand.primary" shadow='lg'>
                                Quick start
                            </Button>
                        </Flex>
                    </Box>
                    <Stylesheet />
                </div>
            </motion.div>
        </motion.div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                text-align: left;
                visibility: hidden;
            }
        `}</style>
    )
}

/**
 * ==============   Styles   ================
 */

const constraints = {
    width: 600,
    height: 400,
    backgroundColor: "transparent",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const heroContent = {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 10,
    cursor: "grab",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}