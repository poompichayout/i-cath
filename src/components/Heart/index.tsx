import { CSSProperties, MouseEventHandler, SVGProps, useRef } from 'react'

const PATH_STYLE: CSSProperties = { transition: '0.3s' }

export default function Heart(props: SVGProps<SVGSVGElement>) {
  const rightAtriumRef = useRef<SVGPathElement>(null)
  const rightVentricleRef = useRef<SVGPathElement>(null)
  const pulmonaryArteryRef = useRef<SVGPathElement>(null)
  const lungBedRef = useRef<SVGPathElement>(null)

  const onMouseOver: MouseEventHandler<SVGImageElement> = (e) => {
    const ref = [
      rightAtriumRef,
      rightVentricleRef,
      pulmonaryArteryRef,
      lungBedRef,
    ]
    const selectedRef = ref[Number(e.currentTarget.id) - 1]

    if (selectedRef.current) {
      selectedRef.current.style.opacity = '0.2'
    }
  }

  const onMouseOut: MouseEventHandler<SVGImageElement> = (e) => {
    const ref = [
      rightAtriumRef,
      rightVentricleRef,
      pulmonaryArteryRef,
      lungBedRef,
    ]
    const selectedRef = ref[Number(e.currentTarget.id) - 1]

    if (selectedRef.current) {
      selectedRef.current.style.opacity = '1'
    }
  }

  return (
    <svg width={266.45} height={320.39} viewBox="0 0 532.9 640.78" {...props}>
      <path
        fill="#ff7f7f"
        d="M238.18 546.53l65.1 7.44-7.44 52.08c-4.9 12.91-51.93 13.89-60.45 0z"
        strokeLinejoin="miter"
        strokeWidth={2.5}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#99f"
        d="M88.36 445.45l-.71 135.1c3.35 13.94 18.61 19.26 37.97 19.36 19.36.1 30.86-3.05 36.2-15.19l3.59-79.45"
        strokeWidth={2.65765262}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="#fc9"
        d="M45.5 253.75c14.51-5.91 126.89-13.93 183.87-14.44 58.1-.52 194.05-3.3 216.5 4.41l-4.49 38.61c-21.05-3.38-78.76-9.35-93.24-9.65-42.65.01-59.34-1.49-96.87-.68-42.03.88-129.8-12.4-191.63 18.32-9.68 1.85-15.33-8.18-17.33-15.92-3.6-14 3.18-20.63 3.18-20.63z"
        strokeWidth={2.5}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="#faa"
        d="M398.62 303.7c9.84 1.03 39.25 84.7 51.79 149.67-2.59 66.29-22.63 100.21-43.86 93.48-21.23-6.73-73.54-102.54-100.99-132.58-27.45-30.04-64.22-67.85-64.22-67.85z"
        strokeLinejoin="miter"
        strokeWidth="1.00000003pt"
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#fc9"
        d="M52.67 203.8c6.49-.09 83.51 9.04 104.24 12.51 44.06 7.38 48.25 12.34 87.45 11.46 57.63-1.31 135.57-32.02 201.02-28.09l-.29 34.39c-42.73-1.1-73.37 1.04-86.06 6.38-13.91 28.31-76.93-3.18-114.19-2.31-41.73.96-164.92 2.55-192.55-.45-5.39-5.43-7.56-5.02-8.54-18.32 1.19-7.68 2.41-11.93 8.93-15.56z"
        strokeWidth={2.5}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="#faa"
        d="M252.21 254.24c7.67-40.9 77.92-49.61 102.02-31.07 34.85 19.76 56.93 79.91 44.25 85.8 0 0-13.84-6.14-25.09 10.01-8.95 12.85-7.77 39.36-7.77 39.36s-9.32-25.89-24.86-31.07-28.48.52-39.36 4.14c-10.36-9.32-53.97-51.72-49.2-77.17z"
        strokeWidth="1.00000003pt"
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#fff"
        d="M308.12 322.5l89.01-24.79-.19 6.4c-39.73 6.56-25.5 31.68-32.69 49.92-11.37-21.14-26.29-28.7-51.25-25.14-2.4-6.54-2.57-3.34-4.89-6.39z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        ref={rightVentricleRef}
        fill="#b3b3ff"
        d="M237.19 347.98c40.4 25.38 51.09 81.07 70.79 128.8 29 39.36 85.42 84.81 77.29 97.02-10.88 16.34-104.16-5.65-156.95-33.68-49.86-26.47-104.03-63.7-104.03-63.7z"
        strokeLinejoin="miter"
        strokeWidth="1.00000003pt"
        fillRule="evenodd"
        strokeLinecap="butt"
        style={PATH_STYLE}
      />
      <path
        ref={rightAtriumRef}
        fill="#b3b3ff"
        d="M102.72 258.37c.52 15.54-30.83 50.03-27.11 128.97 6.73 64.22 59.04 105.65 68.36 110.83 2.07-6.73 3.11-39.36 21.75-48.17 18.64-8.8 41.95 4.14 41.95 4.14s-15.02-19.16-15.02-36.25 13.46-30.04 19.16-35.73c1.04-13.98 4.14-57.49-6.73-88.56-10.88-31.07-36.93-41.92-36.93-41.92z"
        strokeWidth="1.00000003pt"
        fillRule="evenodd"
		style={PATH_STYLE}
      />
      <path
        fill="none"
        d="M98.16 289.19l53.33-19.34c-45.84 46.25-28.28 134.24 6.13 175.79-7.86 9.18-15.29 26.02-22.88 38.36-1.79 2.91-7.11-1.45-8.41 1.83-32.14-15.2-83.14-130.22-28.16-196.64z"
        strokeWidth={2.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#fff"
        d="M135.17 484.75c17.12-35.84 43.02-68.16 65.76-101.75l9.46 9.19c-37.83 26.98-5.78 42.05-2.68 61.94-44.43-11.88-55.05 6.78-61.61 29.1z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#e5b3ff"
        d="M179.19 152.22c-33.15-1.04-107.15 5.47-124.92 15.06-6.41 2.05-7.62 13.62-6.9 20.93.8 8.08 6.12 16.53 12.01 21.18 0 0 87.18-15.74 118.77-11.6"
        strokeWidth={2.5}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="#ff7f7f"
        d="M317.47 336.62c-6.39-10.88-8.44-18.95-20.47-26.91-24.74-20.32-51.56-47.62-71.72-98.45-14.93-38.68 21.8-73.83 61.01-45.83 23.93 17.46 6.79 44.83 11.45 42.76l50.54 2.06c0-5.18 9.57-16.21-3.38-68.52-4.59-22.69-23.92-32.4-35.22-39.86 4.14-16.06 21.97-39.29 21.97-39.29l-25.53-15.05c-1.24-.99-20.28 30.61-23.97 45.56-1.15 4.65-3.21.7-3.94 1.48-1.47-13.15 9.39-36.39 11.36-48.88l-32.41-1.46s-6.06 32.41-5.84 50.18c-5.8 1.51-13.47 5.75-15.23 6.35-7.27-7.72-42.19-61.51-44.64-60.81l-32.66 27.92c-3.22 0 33.4 24.12 32.93 45.87-.48 22.24-35.32 22.94-31.7 97.51 2.79 57.05 49.18 97.18 66.81 120.15 17.09 21.75 42.39 59.31 54.41 53.28-4.73-23.9 16.95-42.46 36.23-48.07z"
        strokeWidth={2.5}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="#99f"
        d="M99.16 278.69c5.62-16.55 4.97-96.2.05-153.81-1.08-12.71-15.31-40.35-41.8-48.51-6.15-8.92 4.48-26.68 15.72-25.6 4.62.48 27.92 13.41 33.55 18.02-.34-.61 6.11-16.64 6.62-16.13 5.7-3.37 25.09 3.61 26.34 11.68-1.49 4.59-7.68 15.3-10.48 23.75 3.76 4.61 6.74 12.34 13.99 27.72 6.97-10.34 28.62-30.79 42.06-35.61 18.33 2.15 29.28 23.13 27.38 32.44-25.44 12.97-68.56 81.88-37.66 155.22"
        strokeWidth={2.5}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="#ff7fcc"
        d="M277.38 228.53l7.23-16.15c23.76-11.9 47.22-8.94 64.44-2.63 46.16 16.91 54.28 64.03 55.1 75.68-4.37 1.38-7.59 10.19-4.53 14.92 3.09 9.74 14.43-.51 14.99-1.31 64.42 40.16 95.53 250.38 29.52 277.17-96.04 40.23-250.15-5.83-298.42-59.7-1.8-1.68-4.14-7.67-5.2-11.3-.92-2.88-2.29-1.22-3.69-3.77-4.17-2.18-8.35-9.89-14.37-14.06-1.99-1.38-8.46-.78-10.54-2.44-7.48-5.98-12.21-11.26-19.12-21.84-52.91-86.4-18.63-168.2 5.99-195.62l1.8 16.41C89.7 297.56 66.1 318.38 81.37 400.34c1.55 20.05 12.31 60.59 37.35 79.92.73.62 14.38 2.47 15.91 2.94 5.26 1.62 6.24 6.13 9.08 7.92 13.23 11.46 29.62 19.66 48.88 28.07 20.52 10.99 39.64 19.59 62.18 27.1 7.63-4.2 11.86-1.74 15.93 2.19 7.27 2.6 19.03 10.23 25.66 12.11-15.15-14.09-40.07-42.8-50.9-53.18-5.63-7.35-3.48-16.81 10.82-5.37 12.71 10.01 43.01 41.57 71.64 65.29 6.67 1.53 12.28 2.6 17.03 3.27 6.52-6.55 10.69-1.55 14.05.82 3.73-.27 5.01-5.25 7.03-6.46-2.49-6.2 3.29-.03 5.75-.23 5.39-8.67-6.47-15.99-30.08-40.42-28.57-14.79-62.11-34.42-74.86-42.3-13.41-9.29-7.79-13.28 3.11-9.57 10.3 4.02 25.84 10.82 46.93 20.72-6.36-7.53-19.51-21.61-22.54-28.73-14.56-34.22-6.67-49.96-16.14-60.15-2.02-5.78-4.79-9.95-10.32-16.77-31.94-38.47-67.81-75.65-95.11-115.69l2.51-4.56c26.52 42.81 61.49 72.31 95.54 105.05 13.52 14.56 17.74 27.4 33.77 39.41 19.66 12.38 37.27 45.8 47.59 69.48 4.61 9.99 13.68 20.14 21.94 30.49-8.34-37.89-8.09-57.32-10.62-71.08-3.82-20.71 6.5-15.52 10.96-1.89 6.59 20.13 17.72 63.1 26.62 92.15 3.84-2.32 6.76-2.72 7.87 6.29 2.39 1.85 4.28 3.19 5.92 3.97 2.83 1.34 1.29-12.11 7.5-1.07 5.06-4.11 10.67-12.84 9.36-15.08-2.87-4.61-.32-10.56 4.28-10.72-17.34-39.41-32.28-73.46-37.7-87.47-1.53-9.1 1.33-16.47 6.87-7.83 12.21 19.05 35.25 64.48 35.29 61.38.07-6.69-.58-12.5-2.16-20-2.94-2.31-3.88-6.68-.8-11.96-.18-4.18-1.18-8.76-2.05-13.71-4.61-5.07-1.43-7.7-2.3-11.78-.93-4.39-1.96-8.94-3.09-13.57-1.88-7.72-2.62-16.6-4.94-24.44-8-27.04-14.59-53.17-23.98-63.66-2.82-5.82-4.35-10.24-2.06-15.66-.65-2.43-1.31-9.02-2.3-16.29.4-1.84-.54-11.57-.99-12.75-9.24-23.08-27.71-51.1-49.41-58.54-29.7-10.19-53.64-.24-68.97 10.57z"
        strokeWidth={1.79999995}
        stroke="red"
        fillRule="evenodd"
      />
      <path
	  	ref={lungBedRef}
        fill="#e5b3ff"
        d="M267.91 377.64c1.08-19.56 6.44-42.76-.58-65.14.43-31.48 1.67-65.38 11.22-87.7 25.52-41.64 127.05-21.27 140.84-13.13l12.99-35.24c-3.5-1.41-11.05-4.43-16.8-6.07 1.87-3.14 3.56-8.1 4.65-10.67.74-3.48-12.44-8.68-18.47-3.77a64.429 64.429 0 01-3.31 6.9c-.3.54-.94 1.59-2.42 1.67-26.28-5.53-61.73-10.61-85.3-4.37-45.73 11.89-66.71-17.34-84.32 15.49-11.62 21.35-1.65 44.94-6.83 62.07-2.73 9.03-8.05 40.02-11.64 72.19-8.35 28.84-6.46 58.62-2.34 74.37 20.26-11.53 37.74-4.69 62.31-6.59z"
        strokeWidth={2.5}
        stroke="#1f241c"
        fillRule="evenodd"
		style={PATH_STYLE}
      />
      <path
        fill="#fff"
        d="M135.46 487.18c.28-8.55 11.77-30.49 25.22-36.92 14.41-6.88 30.59-7.61 47.75 3.83-16.12-2.08-30.65-3.97-43.13 3.25-11.15 6.45-19.54 23.24-21.73 31.95M209.93 389.67c-1.63-3.4-1.91-1.62-3.82-5.89-7.71 3.16-19.91 16-20.11 27.3-.26 15.16 9.13 25.25 25.71 37.52-7.42-14.46-20.13-24.21-18.5-38.29 1.02-8.79 11.16-15.98 16.72-20.63z"
        strokeLinejoin="round"
        strokeWidth={1.5}
        stroke="maroon"
        fillRule="evenodd"
      />
      <path
        fill="#fff"
        d="M312.89 328.38s-4.28-5.19-4.43-6.17c10.37-1.82 19.93-3.22 28.22 1.25 12.83 6.91 20.57 15.43 25.66 35.41-10.58-12.33-15-23.61-27.02-29.26-6.78-3.19-22.43-1.23-22.43-1.23zM395.94 298.31c-5.93-.62-16.92 4.38-21.6 10.96-9.29 13.07-10.56 27.45-6.45 47.66 4.16-15.71 1.2-32.3 10.87-43.84 4.22-5.04 10.81-8.69 18.02-8.02"
        strokeLinejoin="round"
        strokeWidth={1.5}
        stroke="maroon"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#e5b3ff"
        d="M268.02 372.93c0 2.31-.36 4.55-1.03 6.69-3.61 11.5-16.31 20-31.42 20-14.63 0-27-7.97-31.05-18.91-.91-2.46-1.4-5.07-1.4-7.78 0-14.74 14.53-26.69 32.45-26.69s32.45 11.95 32.45 26.69z"
        strokeLinejoin="miter"
        strokeWidth={1.21412075}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M204.86 380.71c-.91-2.46-1.4-5.07-1.4-7.78 0-14.74 14.53-26.69 32.45-26.69s32.45 11.95 32.45 26.69c0 2.31-.36 4.55-1.03 6.69"
        strokeLinejoin="miter"
        strokeWidth={1.21412075}
        stroke="#000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="none"
        d="M264.87 378.87c.1 14.02-11.92 21.96-27.56 22.03-15.46.07-30.96-9.78-30.86-24.97.1-15.46 13.5-24.09 30.37-24.04 15.25.04 27.93 9.15 28.06 26.98z"
        strokeLinejoin="miter"
        strokeWidth={1.01}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M208.44 384.75a20.866 20.866 0 01-1.65-8.34c.1-15.46 13.5-24.09 30.37-24.04 15.25.04 27.93 9.15 28.06 26.98.02 2.42-.33 4.66-.99 6.72"
        strokeLinejoin="miter"
        strokeWidth={1.01}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#fff"
        d="M255.18 374.89s11.08 9.46 8.77 14.06c-10.75 1.23-23.67-13.14-18.55-23.88-3.24.27-11.51-.19-14.11 0 2.17 7.98-9.31 32.21-23.08 16.81 7.53-5.94 10.26-7.84 10.26-7.84l11.06-9.79 17.4.56z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#fff"
        d="M208.37 381.49c-.19 4.15-.01 4.13 2.62 7.43 2.13 1.57 7.67 3.2 10.69 1.26 7.57-4.87 15.81-12.33 8.22-25.73.74 12.66-3.8 19.13-11.59 21.72-3.48 1.15-9.94-4.68-9.94-4.68z"
        strokeLinejoin="round"
        strokeWidth={1.5}
        stroke="maroon"
        fillRule="evenodd"
      />
      <path
        fill="#fff"
        d="M265.49 381.37c.44 3.89-.3 4.58-1.2 7.08-4.07 1.61-9.38 3.06-12.77.48-6.57-4.99-12.66-10.02-5.73-24.08-3.04 9.7 3.58 16.08 10.14 18.97 3.01 1.32 9.56-2.45 9.56-2.45z"
        strokeLinejoin="round"
        strokeWidth={1.5}
        stroke="maroon"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#ff7f7f"
        d="M325.28 335.28c1.47 1.79 2.61 3.75 3.45 5.83 4.5 11.18.07 25.8-11.62 35.38-11.31 9.28-25.93 10.96-36 5.06a22.43 22.43 0 01-6.01-5.13c-9.35-11.4-5.69-29.85 8.17-41.21s32.67-11.33 42.01.07z"
        strokeLinejoin="miter"
        strokeWidth={0.99999982}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M280.92 380.8a22.43 22.43 0 01-6.01-5.13c-9.35-11.4-5.69-29.85 8.17-41.21s32.67-11.33 42.01.07c1.47 1.79 2.61 3.75 3.45 5.83"
        strokeLinejoin="miter"
        strokeWidth={1.21412075}
        stroke="#000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="none"
        d="M325.12 341.88c8.97 10.77 4.71 24.54-7.35 34.51-11.91 9.86-30.14 12.06-39.7.26-9.72-12.02-4.83-27.19 8.24-37.84 11.82-9.64 27.4-10.63 38.8 3.07z"
        strokeLinejoin="miter"
        strokeWidth={0.99999982}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M285.46 381.41a20.907 20.907 0 01-6.57-5.41c-9.72-12.02-4.83-27.19 8.24-37.84 11.82-9.64 27.4-10.63 38.8 3.07 1.55 1.86 2.7 3.81 3.49 5.82"
        strokeLinejoin="miter"
        strokeWidth={1.01207066}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#fff"
        d="M284.91 355.37l10.88-15.82c4.81.06 13.65-6.41 19.23-6.44 3.24-.02 4.84 3.42 5.85 5.01-2.69 5.95-16.72 15.27-25.44 1.63-2.37 3.22-7.11 11.04-9.46 13.71 19.49 15.82 9.56 32.34-.09 30.31-8.28-4.14-2.47 3.14-5.9-5.71z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#fff"
        d="M280.81 379.08c-.49.53 1.42 2.81 4.27 4.6 4.7-1.04 11.3-.91 12.89-5.27 3.16-8.69.64-21.02-12.91-24.54 9.37 3.93 12.4 15.73 8.42 22.78-2.11 3.75-12.67 2.43-12.67 2.43zM315.44 332.54s2.67 2.09 5.71 5.38c.61 3.48-1.2 9.45-4.91 10.93-6.49 2.6-14.19 7.32-19.42-7.94 5.45 8.58 13.44 7.65 18.32 3.77 3.17-2.52.3-12.15.3-12.15z"
        strokeLinejoin="round"
        strokeWidth={1.5}
        stroke="maroon"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#ff7f7f"
        d="M256.57 42.47a8.28 17.28 95.56 1034.41 3.14 8.28 17.28 95.56 10-34.41-3.14z"
        strokeLinejoin="miter"
        strokeWidth={1.18735921}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#ff7f7f"
        d="M305.82 46.05a7.09 15.69 122.84 1026.04 17.47 7.09 15.69 122.84 10-26.04-17.47z"
        strokeLinejoin="miter"
        strokeWidth={1.39817357}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#fc9"
        d="M434.21 216.64a12.25 18.07 0 1024.5 0 12.25 18.07 0 10-24.5 0z"
        strokeWidth={0.99999994}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M357.57 276.06c-10.28-7.82-11.07-14.56-9.65-25.12-9.54 4.63-25.62-.5-30.52-6.77-6.21-7.93-4.45-14.43 6.04-13.27 8.44.94 22.43 6.81 26.45 18.49 9.2-1.58 14.66 5.66 18.33 10.43 10.15 13.2 9.72 25.94-10.64 16.23z"
        strokeWidth={1.16357386}
        stroke="#4d4d4d"
        fillRule="evenodd"
      />
      <path
        fill="#00000000"
        d="M98.67 278.43c.73-12.06 18.85-23.69 32.55-26.96 13.99-3.34 37.09-4.74 42.09 9.54"
        strokeLinejoin="miter"
        strokeWidth={1}
        stroke="#1f241c"
        strokeLinecap="butt"
      />
      <path
        fill="#e5b3ff"
        d="M415.02 189.97a19.61 11.68 110.53 1021.88 8.2 19.61 11.68 110.53 10-21.88-8.2z"
        strokeWidth={0.94}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M417.44 191a17.32 9.05 110.53 1016.96 6.35 17.32 9.05 110.53 10-16.96-6.35z"
        strokeWidth={0.94}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M436.18 216.64a10.28 15.44 0 1020.56 0 10.28 15.44 0 10-20.56 0z"
        strokeWidth={0.99999994}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="#fc9"
        d="M432.2 261.7a19.58 11.79 98.6 1023.32 3.52 19.58 11.79 98.6 10-23.32-3.52z"
        strokeWidth={1.28991377}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M434.8 262.09a16.95 9.16 98.6 1018.11 2.74 16.95 9.16 98.6 10-18.11-2.74z"
        strokeLinejoin="miter"
        strokeWidth={1.57291067}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#ff7f7f"
        d="M156.65 65.88a10.02 22.1 52.72 1036.41-24.55 10.02 22.1 52.72 10-36.41 24.55z"
        strokeWidth={1.02424884}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M159.39 63.91a7.92 18.67 53.68 1030.93-20.61 7.92 18.67 53.68 10-30.93 20.61z"
        strokeWidth={1.02321863}
        stroke="#1f241c"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M259.07 42.75a6.17 14.76 95.19 1029.41 2.59 6.17 14.76 95.19 10-29.41-2.59z"
        strokeLinejoin="miter"
        strokeWidth={1.41611457}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="none"
        d="M308.3 47.79a5.54 12.66 122.54 1021.08 14.01 5.54 12.66 122.54 10-21.08-14.01z"
        strokeLinejoin="miter"
        strokeWidth={1.73557436}
        stroke="#1f241c"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#000"
        d="M66.96 55.34l6.81-5.11 34.14 20.67c-.67 10.22-.08 17.18 22.3 17.69 4.3 9.26 9.26 16.54 12.79 28.13l-7.44 15.35-14.48-34.41c-11.85-24.18-37.87-28.07-54.12-42.32z"
        strokeLinejoin="miter"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="none"
        d="M206.01 92.89c5.5 8.02 9.08 11.44 6.31 19.46-51.43 41.56-51.4 93.62-43.44 141.57l-17.3-11.62c-3.4-24.05-14.86-84.65 54.44-149.41z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#000"
        d="M286.82 161.58l-4.54 1.37c-43.38-28.88-67.77 15.74-60.21 64.96l-6.78 25.87c-16.16-13.11-18.49-83.9 9.68-104.82 16.89-12.54 51.24-12.17 61.85 12.62zM187.72 56.28c4.04-3.85 6.23-9.13 4.62-14.98 9.47 13.1 37.73 49.96 42.95 60.05l-11.42 5.67c-8.37-10.51-31.48-38.98-36.15-50.74zM278.65 52.63l8.37-1.16-10 44.41-7.91-1.4c1.3-13.56 3.5-28.29 9.53-41.85zM319.11 63.56l9.77 1.4-20.23 37.43-8.84-3.26c5.48-13.56 10.94-22.94 19.3-35.57zM309.11 102.62c15.9 14.18 23.57 34 27.03 51.9l10.78-2.38c-2.58-28.96-26.79-42.9-37.81-49.52zM145.9 598.59c5.03-4.16 10.14-7.9 14.76-14.15l1.59-53.28-16.45-13.57zM281.74 614.13l14.53-6.3.95-12.35-13.36-2.19zM103.2 187.5l-3.21 13.99-39.78 5.43c-8.19-2.89-7.87-6.25-10.08-10.73zM104.52 229.43l-.63 9.99-50.61-2.16c-7.92-2.85-6.49-7.01-8.31-10.72zM102.03 263.01c.96 6.12-13.96 12.23-23.88 18.35l-20.12 8.2c-8.41.41-8.68-3.99-11.79-6.72zM413.2 196.44l2.86 11.51c-15.63-3.82-94.45-20.27-129.46 7.14-12.37 9.69-13.5 26.28-16.48 43.86-5.28 31.12-1.47 39.05-2.66 53.06 4.52 8.6 4.16 52.04 1.47 51.99-6.32-9.32-11.58-11.31-18.45-16.19 2.44-10.09-1.41-21.5-1.4-36.22.51-30.89 4.17-70.59 20.95-95.23 9.25-13.58 26.39-21.28 42.34-25.22 32.68-8.08 77.53-2.46 100.84 5.29z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#000"
        d="M434.57 221.54c.78 3.83 1.61 8.85 5.61 11.81l-45.81.38c-4.74-5.19-4.17-5.59-8.69-10.07zM431.02 269.38c.78 3.83 2.01 9.11 6.01 12.08l-19.15-3.18c-1.62-3.22-2.63-7.18-3.75-10.4zM310.51 326.63l-14.85 1.1c-.02-5.22-4.44-8.97-9.69-10.7l-18.66-19.37-.14-17.69 28.72 29.87c7.88 3.48 14.22 8.82 14.63 16.79z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M143.75 490.41c4.79-14.11 9.76-29.25 21.88-37.65 14.85 22.74 32.29 53.62 74.52 89.15-18.12-5.52-72.71-28.71-96.4-51.5zM277.74 229.45c32.62-23.02 67.87-17.5 87.77 2.52-5.16 0-56.62 1.15-96.97 34.27 4.58-17.55 5.31-20.96 9.19-36.79zM280.61 383.81c14.16 1.02 22.5-3.21 30.35-8.15 4.66 24.93 4.51 40.83 16.21 59.47-23.82-21.2-30.63-31.1-46.56-51.32z"
        strokeWidth={2.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M239.52 159.31l44.49 5.01c-36.98 6-52.88 29.78-63.05 62.62-2.23-27.02.19-49.73 18.56-67.63z"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#000"
        d="M132.91 57.87c2.84 2.14 3.05 2.74 7.29 7l-11.12 23.62c-3.72-.17-7.89-.63-8.56-1.24zM415.03 155.03c2.84 2.14 2.72 3.73 5.81 5.36l-6.19 10.64c-2.9-1.81-4.28-.46-6.26-1.56z"
        strokeLinejoin="miter"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#99f"
        d="M164.28 398.41c4.2 13.48 3.95 32.35-10.5 45.78-14.46 13.44-36.58 17.32-49.4 8.68-12.83-8.65-15.82-35.49-7.57-50.62 12.03-15.37 54.65-12.49 67.47-3.84z"
        strokeLinejoin="miter"
        strokeWidth={2.75}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="none"
        d="M163.91 398.72c5.81 9.37 4.69 30.94-9.77 44.37-14.46 13.44-36.58 17.32-49.4 8.68-12.83-8.65-15.66-33.92-7.78-50.61 14.33-15.35 54.13-11.09 66.95-2.44z"
        strokeLinejoin="miter"
        strokeWidth={1.65}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M163.96 397.44c5.96 17.53 4.64 32.7-9.82 46.14-14.46 13.43-36.58 17.32-49.4 8.67-12.83-8.65-15.32-27.23-8.49-49.55"
        strokeLinejoin="miter"
        strokeWidth={1.65}
        stroke="#4d4d4d"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#99f"
        d="M165.3 256.82c14.45 9.29 12.75 25.48-3.51 39.9-16.26 14.42-40.46 17.64-54.9 8.35-14.45-9.29-13.44-24.55 2.82-38.97 16.26-14.42 41.15-18.57 55.6-9.28z"
        strokeLinejoin="miter"
        strokeWidth={1.02376127}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M103.37 301.6c-7.05-9.1-4-22.85 8.54-33.62 15.06-12.93 38.09-16.66 51.45-8.35 8.88 5.53 11.39 15.13 7.66 24.74"
        strokeWidth={1.5}
        stroke="#4d4d4d"
        fillRule="evenodd"
      />
      <path
        fill="none"
        d="M162.73 260.37c13.36 8.11 11.98 24.9-3.07 37.5-15.06 12.6-38.09 16.25-51.45 8.14s-11.98-24.9 3.07-37.5c15.06-12.6 38.09-16.25 51.45-8.14z"
        strokeWidth={1.48108637}
        stroke="#00000000"
        fillRule="evenodd"
      />
      <path
        fill="#00000000"
        d="M226.15 456.08l47.98 23.26-7.78-3.03-39.81-29.9"
        strokeLinejoin="miter"
        strokeWidth={4.19999981}
        stroke="#fff"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M220.56 443.49c-6.14-1.97-11.93-6.04-18.06-8.01M227.66 448.51c-6.14-3.95-24.11-18.09-30.25-20.06M226.64 457.7c-6.14-1.97-13.66-8.42-17.71-11.56M227.18 455.48c-6.14-3.95-14.74-10.73-21.11-15.26M214.86 434.39c-5.33-3.63-14.84-7.84-20.17-11.47M227.22 445.61c-4.77-5.29-28.01-24.63-33.34-28.26"
        strokeLinejoin="miter"
        strokeWidth={1.5}
        stroke="#fff"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M221.38 468.19c8.9 10.86 17.58 21.89 26.03 33.1.36.47.71.94 1.07 1.42l-36.39-31.81"
        strokeLinejoin="miter"
        strokeWidth={4.2}
        stroke="#fff"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M207.82 465.79c-3.39-5.48-8.73-10.12-12.12-15.61M214.39 471.48c-5.31-5.01-23.35-19.06-26.74-24.54M223.06 468.28c-3.39-5.48-11.46-11.23-15.47-14.41M221.05 469.33c-5.31-5.01-13.96-11.72-19.89-16.82M197.61 462.44c-4.8-4.3-11.18-12.52-15.98-16.82M211.47 471.75c-6.28-3.36-30.64-21.27-35.45-25.57"
        strokeLinejoin="miter"
        strokeWidth={1.5}
        stroke="#fff"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M378.11 379.72l26.17 48.13.7.95-20.03-57.93"
        strokeLinejoin="miter"
        strokeWidth={4.19999981}
        stroke="#fff"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M381 364.32c-4.72-5.77-7.71-13.28-12.44-19.04M384.65 373.55c-3.41-7.62-11.67-32.37-16.39-38.14M377.51 381.54c-4.72-5.77-7.83-16.62-9.72-22.15M379.52 379.81c-3.41-7.62-7.34-19.48-10.59-27.8M381.47 352.13c-2.82-6.81-9.38-16.83-12.21-23.64M386.15 370.55c-1.17-8.01-11.13-41.01-13.96-47.81"
        strokeLinejoin="miter"
        strokeWidth={1.74}
        stroke="#fff"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M363.99 381.09l4.92 60.31-1.45-8.63-12.69-55.42"
        strokeLinejoin="miter"
        strokeWidth={4.19999981}
        stroke="#fff"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M354.11 369.05c.27-8.08-1.54-16.66-1.27-24.74M356.36 379.58c-1.58-8.93-8.64-36.22-8.36-44.3M365.34 382.36c.27-8.08-3.18-19.73-4.72-25.85M363.08 382.04c-1.58-8.93-4.98-22-7.02-31.46M347.54 358.4c-1.56-7.84-2.22-20.87-3.79-28.71M353.79 377.8c-3.31-7.91-13.43-43.65-14.99-51.49"
        strokeLinejoin="miter"
        strokeWidth={1.68}
        stroke="#fff"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#ccc"
        d="M301.32 207.39c16.35-2.17 40.68-.89 56.37 9.97 22.11 15.31 28.65 19.34 43.83 54.89 1.28 3 .82 9.81 2.25 13.22-2.9-.03-13.21 4.34-8.23 15.59-.33 2.81 1.68 5.96 3.02 6.69 7.49 4.09 13.82 3.59 14.11 2.61 1.73-.26 12.58 4.35 13.49 6.95 35.96 42.27 38.54 63.28 47.46 106.58 9.5 46.15 10.61 103.49-14.19 140.63-35.53 30.67-108.03 37.98-179.45 13.46-52.78-18.13-96.21-24.21-135.24-64.73-1.42-1.47-2.17-6.27-3.57-7.84-.85-.94 2.66-3.46 1.81-4.44 3.79-2.54 5.83-8.67-.68-14.3-11.95-10.34-20.33.73-20.33.73-2.69-.24-8.86-2.1-11.05-4.05-21.35-19-38.17-61.83-39.86-100.46-2.31-52.66-.78-80.75 27.52-109.47l-1.4-6.05c-32.23 27.04-37.69 77.07-33.62 117.65 3.98 39.69 22.44 82.45 50.75 110.22 3.22 7.94 13.05 18.54 20.15 19.63 43.21 48.98 89.18 52.32 147.32 71.03 82.38 26.51 170.01 9.55 186.77-15.54 28.94-51.38 20.74-100.56 12.95-150.2-6.08-38.76-23.55-78.4-54.29-114.24-2.28-9.44-4.97-16.66-12.68-24.83-15.83-48.44-29.24-53.52-54.07-68.85-13.28-8.2-23.24-12.56-45.89-9.37"
        stroke="#00000000"
      />
      <path
        fill="#00000000"
        d="M294.81 210.18c17.93-4.68 48.34-4.92 64.5 7.06 11.68 8.66 17.46 14.46 24.94 24.11 6.55 8.45 9.62 12.94 16.22 27.63 1.18 2.63 3.7 12.47 3.13 15.87 5.99-2.25 13.23-.71 12 6.51 4.28 2 7.96 14.96-4.88 19.19 1.56-.17 14.44 4.69 15.5 6.75 37.77 43.57 39.08 62.54 46.45 105.65 7.95 46.44 10.61 103.49-14.19 140.63-35.53 30.67-102.47 36.47-174.84 14.94-52.16-15.52-98.35-22.58-137.86-63.53-1.45-1.51-3.8-6.84-4.56-9.75-6.06 7.57-14.69 2.73-16.22-2.2-8.79-3.72-4.09-12.98-3.25-15.51-3.39-.19-9.79-3.67-12.39-6.13-25.42-24.04-34.41-63.59-38.3-99.44-4.05-37.33-1.16-79.91 26.59-109.47"
        strokeLinejoin="miter"
        strokeWidth={1.5}
        stroke="#4d4d4d"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M97.19 267.38c-32.23 27.04-37.47 78.31-33.62 119.51 3.71 39.64 20.5 81.74 48.46 109.67 1.31 8.08 13.62 19.13 22.02 20.02 34.17 37.96 88.91 54.27 146.82 71.2 83.06 24.28 170.94 6.76 187.7-18.33 28.94-51.38 22.94-100.13 13.88-149.27-8.15-44.27-14.39-67.66-54-112.06-.13-12.49-6.2-27.02-15.08-31.66-18.46-49.75-27.94-53.75-52.9-67.93-13.74-7.81-24.4-9.07-47.05-5.88"
        strokeLinejoin="miter"
        strokeWidth={6}
        stroke="#666"
        strokeLinecap="butt"
      />
      <path
        fill="#ff0"
        d="M414.9 291.79c5.69 2.25 7.35 14.37-3.84 18.14-3.08 0-10.11-8.71-10.11-13.72s.06-7.56 2.33-11.04c2.97-.7 13.15-2.47 11.63 6.63z"
        strokeLinejoin="miter"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#7f7fcc"
        d="M403.4 294.53a4 5.57 61.88 107.87-7.39 4 5.57 61.88 10-7.87 7.39z"
        strokeWidth={5.4538908}
        stroke="#4d4d4d"
        fillRule="evenodd"
      />
      <path
        fill="#e69966"
        d="M405.28 300.42a5.8 5.67 90 1011.34 0 5.8 5.67 90 10-11.34 0z"
        strokeLinejoin="miter"
        strokeWidth={1}
        stroke="#4d4d4d"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#ff0"
        d="M125.55 502.26c1.19 4.8 9.75 10.2 15.76 1.7 1.24-2.82-2.46-9.59-6.39-12.69-4.12-3.24-7.93-4.38-12.09-4.24-1.83 2.43-6.21 12.96 2.72 15.23z"
        strokeLinejoin="miter"
        strokeWidth={1.5}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#7f7fcc"
        d="M124.02 498.74a5.57 4 128.33 104.26-9.92 5.57 4 128.33 10-4.26 9.92z"
        strokeWidth={5.4538908}
        stroke="#4d4d4d"
        fillRule="evenodd"
      />
      <path
        fill="#e69966"
        d="M128.09 503.39a5.8 5.67 66.45 1010.4-4.53 5.8 5.67 66.45 10-10.4 4.53z"
        strokeLinejoin="miter"
        strokeWidth={0.92065918}
        stroke="#4d4d4d"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#00000000"
        d="M208.91 391.43c-10.37-12.35-10-26.57-1.57-36.26 5.63-6.47 16.92-11.25 26.51-11.77 19.88.05 27.74 7.86 33.38 15.85 1.09-12.43 4.63-18.71 13.54-27.59 9.46-5.83 20.73-10.67 31.18-7.31"
        strokeLinejoin="miter"
        strokeWidth={4.19999981}
        stroke="#ccc"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <path
        fill="#ccc"
        d="M266.28 361.39l2.65-.74.31 7.01c2.16 3.57 4.9 8.17 8.06 10.99.75.67 1.34 1.58 2.08 2.09 3.05 2.09 4.64 4.16 5.04 3.84l-5.1 5.89c-4.38 2.48-10.23-.64-14.61-2.11 2.42-3.67 1.19-5.73 2.79-8.54 2.03-3.56 1.89-7.4 1.88-11.86z"
        strokeLinejoin="miter"
        strokeWidth={4.19999981}
        stroke="#00000000"
        fillRule="evenodd"
        strokeLinecap="butt"
      />
      <image
        id="1"
        x="125"
        y="325"
        width="50"
        height="50"
        href="/images/one.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
      />
      <image
        id="2"
        x="225"
        y="450"
        width="50"
        height="50"
        href="/images/two.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
      />
      <image
        id="3"
        x="210"
        y="300"
        width="50"
        height="50"
        href="/images/three.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
      />
      <image
        id="4"
        x="350"
        y="150"
        width="50"
        height="50"
        href="/images/four.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
      />
    </svg>
  )
}
