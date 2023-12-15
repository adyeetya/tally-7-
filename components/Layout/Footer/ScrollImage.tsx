'use client'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const ScrollFlashyImage: React.FC = () => {
  const [ref, inView] = useInView()

  const verticalBounce = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateY(0) scale(1)'
      : 'translateY(50px) scale(0.8)',
    from: { opacity: 0, transform: 'translateY(50px) scale(0.8)' },
    config: { tension: 280, friction: 20 },
  })

  return (
    <div
      ref={ref}
      style={{ height: '500px' /* add a height to create a scrollable area */ }}
    >
      <animated.img
        src="/images/footer-rock.png"
        width={200}
        style={{
          filter: 'invert(0)',
          marginTop: '40px',
          ...verticalBounce,
        }}
      />
    </div>
  )
}

export default ScrollFlashyImage
