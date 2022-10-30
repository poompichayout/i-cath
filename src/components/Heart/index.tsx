import {
  CSSProperties,
  MouseEventHandler,
  SVGProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'

import { useCaththerizeContext } from 'src/contexts/CathetherizeContext'

const PATH_STYLE: CSSProperties = { transition: '0.3s' }

export default function Heart(props: SVGProps<SVGSVGElement>) {
  const { pageId, setPageId } = useCaththerizeContext()

  const rightAtriumRef = useRef<SVGPathElement>(null)
  const rightVentricleRef = useRef<SVGPathElement>(null)
  const pulmonaryArteryRef = useRef<SVGPathElement>(null)
  const pulmonaryArtery2Ref = useRef<SVGPathElement>(null)
  const lungBedRef = useRef<SVGPathElement>(null)
  const lungBed2Ref = useRef<SVGPathElement>(null)
  const balloonRef = useRef<SVGGElement>(null)

  const ref = useMemo(
    () => [
      [rightAtriumRef],
      [rightVentricleRef],
      [pulmonaryArteryRef, pulmonaryArtery2Ref],
      [lungBedRef, lungBed2Ref],
    ],
    []
  )

  const highlight = useCallback((e: SVGPathElement) => {
    e.style.stroke = '#f72121'

    if (e === lungBedRef.current || e === lungBed2Ref.current) {
      if (balloonRef.current) {
        balloonRef.current.style.opacity = '1'
      }
    }
  }, [])

  const deHighlight = useCallback((e: SVGPathElement) => {
    e.style.stroke = 'none'

    if (e === lungBedRef.current || e === lungBed2Ref.current) {
      if (balloonRef.current) {
        balloonRef.current.style.opacity = '0'
      }
    }
  }, [])

  useEffect(() => {
    const selectedRef = ref[Number(pageId) - 1]
    selectedRef.forEach((e) => {
      if (e.current) {
        highlight(e.current)
      }
    })
  }, [ref, pageId, highlight])

  const onClick: MouseEventHandler<SVGImageElement> = (e) => {
    const selectedRef = ref[Number(e.currentTarget.id) - 1]
    ref.forEach((c) => {
      c.forEach((a) => {
        if (a.current) {
          deHighlight(a.current)
        }
      })
    })

    selectedRef.forEach((c) => {
      if (c.current) {
        highlight(c.current)
      }
    })
    setPageId(Number(e.currentTarget.id))
  }

  const onMouseOver: MouseEventHandler<SVGImageElement> = (e) => {
    const selectedRef = ref[Number(e.currentTarget.id) - 1]

    selectedRef.forEach((c) => {
      if (c.current) {
        highlight(c.current)
      }
    })
  }

  const onMouseOut: MouseEventHandler<SVGImageElement> = (e) => {
    const selectedRef = ref[Number(e.currentTarget.id) - 1]

    selectedRef.forEach((c) => {
      if (c.current && Number(e.currentTarget.id) !== pageId) {
        deHighlight(c.current)
      }
    })
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="100%"
      enableBackground="new 0 0 544 594.6"
      version="1.1"
      viewBox="0 0 544 594.6"
      xmlSpace="preserve"
    >
      <text
        fontFamily="ArialMT"
        fontSize="32"
        transform="translate(113.822 584.169)"
      ></text>
      <g transform="translate(-57.562 -10.469)">
        <path
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M255.6 522l65.1 7.4-7.4 52.1c-4.9 12.9-51.9 13.9-60.5 0l2.8-59.5z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#99F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.658"
          d="M105.8 420.9l-.7 135.1c3.3 13.9 18.6 19.3 38 19.4 19.4.1 30.9-3 36.2-15.2l3.6-79.5"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FC9"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M63 229.2c14.5-5.9 126.9-13.9 183.9-14.4 58.1-.5 194-3.3 216.5 4.4l-4.5 38.6c-21-3.4-78.8-9.3-93.2-9.7-42.7 0-59.3-1.5-96.9-.7-42 .9-129.8-12.4-191.6 18.3-9.7 1.9-15.3-8.2-17.3-15.9-3.7-14 3.1-20.6 3.1-20.6h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FAA"
          fillRule="evenodd"
          stroke="#1F241C"
          d="M416.1 279.1c9.8 1 39.3 84.7 51.8 149.7-2.6 66.3-22.6 100.2-43.9 93.5-21.2-6.7-73.5-102.5-101-132.6-27.4-30-64.2-67.8-64.2-67.8l157.3-42.8z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FC9"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M70.1 179.2c6.5-.1 83.5 9 104.2 12.5 44.1 7.4 48.3 12.3 87.4 11.5 57.6-1.3 135.6-32 201-28.1l-.3 34.4c-42.7-1.1-73.4 1-86.1 6.4-13.9 28.3-76.9-3.2-114.2-2.3-41.7 1-164.9 2.5-192.5-.5-5.4-5.4-7.6-5-8.5-18.3 1.3-7.7 2.5-11.9 9-15.6h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FAA"
          fillRule="evenodd"
          d="M269.7 229.7c7.7-40.9 77.9-49.6 102-31.1 34.9 19.8 56.9 79.9 44.3 85.8 0 0-13.8-6.1-25.1 10-8.9 12.8-7.8 39.4-7.8 39.4s-9.3-25.9-24.9-31.1c-15.5-5.2-28.5.5-39.4 4.1-10.3-9.3-53.9-51.7-49.1-77.1z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M325.6 297.9l89-24.8-.2 6.4c-39.7 6.6-25.5 31.7-32.7 49.9-11.4-21.1-26.3-28.6-51.2-25.1-2.4-6.5-2.6-3.3-4.9-6.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.4"
        ></path>
        <path
          fill="#B3B3FF"
          fillRule="evenodd"
          d="M254.6 323.4c40.4 25.4 51.1 81.1 70.8 128.8 29 39.4 85.4 84.8 77.3 97-10.9 16.3-104.2-5.7-157-33.7-49.9-26.5-104-63.7-104-63.7l112.9-128.4z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#B3B3FF"
          fillRule="evenodd"
          d="M120.2 233.8c.5 15.5-30.8 50-27.1 129 6.7 64.2 59 105.6 68.4 110.8 2.1-6.7 3.1-39.4 21.8-48.2s41.9 4.1 41.9 4.1-15-19.2-15-36.3c0-17.1 13.5-30 19.2-35.7 1-14 4.1-57.5-6.7-88.6-10.9-31.1-36.9-41.9-36.9-41.9l-65.6 6.8z"
          clipRule="evenodd"
        ></path>
        <radialGradient
          id="SVGID_1_"
          cx="105.137"
          cy="269.404"
          r="57.213"
          gradientTransform="matrix(.6801 -.1203 -.6696 -3.7838 255.6 1382.27)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_1_)"
          fillRule="evenodd"
          d="M115.6 264.6l53.3-19.3c-45.8 46.2-28.3 134.2 6.1 175.8-7.9 9.2-15.3 26-22.9 38.4-1.8 2.9-7.1-1.5-8.4 1.8-32.1-15.2-83.1-130.3-28.1-196.7z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M152.6 460.2c17.1-35.8 43-68.2 65.8-101.8l9.5 9.2c-37.8 27-5.8 42-2.7 61.9-44.4-11.9-55 6.8-61.6 29.1l-11 1.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.4"
        ></path>
        <path
          fill="#E5B3FF"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M196.6 127.6c-33.1-1-107.1 5.5-124.9 15.1-6.4 2.1-7.6 13.6-6.9 20.9.8 8.1 6.1 16.5 12 21.2 0 0 87.2-15.7 118.8-11.6"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M334.9 312c-6.4-10.9-8.4-19-20.5-26.9-24.7-20.3-51.6-47.6-71.7-98.5-14.9-38.7 21.8-73.8 61-45.8 23.9 17.5 6.8 44.8 11.5 42.8l50.5 2.1c0-5.2 9.6-16.2-3.4-68.5-4.6-22.7-23.9-32.4-35.2-39.9 4.1-16.1 22-39.3 22-39.3l-25.5-15c-1.2-1-20.3 30.6-24 45.6-1.1 4.7-3.2.7-3.9 1.5-1.5-13.2 9.4-36.4 11.4-48.9l-32.4-1.5s-6.1 32.4-5.8 50.2c-5.8 1.5-13.5 5.7-15.2 6.3-7.3-7.7-42.2-61.5-44.6-60.8l-32.9 27.9c-3.2 0 33.4 24.1 32.9 45.9-.5 22.2-35.3 22.9-31.7 97.5 2.8 57 49.2 97.2 66.8 120.1 17.1 21.8 42.4 59.3 54.4 53.3-4.6-23.9 17-42.4 36.3-48.1h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#99F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M116.6 254.1c5.6-16.5 5-96.2.1-153.8-1.1-12.7-15.3-40.4-41.8-48.5-6.1-8.9 4.5-26.7 15.7-25.6 4.6.5 27.9 13.4 33.6 18-.3-.6 6.1-16.6 6.6-16.1 5.7-3.4 25.1 3.6 26.3 11.7-1.5 4.6-7.7 15.3-10.5 23.8 3.8 4.6 6.7 12.3 14 27.7 7-10.3 28.6-30.8 42.1-35.6 18.3 2.2 29.3 23.1 27.4 32.4-25.4 13-68.6 81.9-37.7 155.2"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FF7FCC"
          fillRule="evenodd"
          stroke="red"
          strokeWidth="1.8"
          d="M294.8 204l7.2-16.1c23.8-11.9 47.2-8.9 64.4-2.6 46.2 16.9 54.3 64 55.1 75.7-4.4 1.4-7.6 10.2-4.5 14.9 3.1 9.7 14.4-.5 15-1.3 64.4 40.2 95.5 250.4 29.5 277.2-96 40.2-250.1-5.8-298.4-59.7-1.8-1.7-4.1-7.7-5.2-11.3-.9-2.9-2.3-1.2-3.7-3.8-4.2-2.2-8.4-9.9-14.4-14.1-2-1.4-8.5-.8-10.5-2.4-7.5-6-12.2-11.3-19.1-21.8-52.9-86.4-18.6-168.2 6-195.6l1.8 16.4C107.1 273.2 83.5 294 98.8 376c1.5 20.1 12.3 60.6 37.4 79.9.7.6 14.4 2.5 15.9 2.9 5.3 1.6 6.2 6.1 9.1 7.9 13.2 11.5 29.6 19.7 48.9 28.1 20.5 11 39.6 19.6 62.2 27.1 7.6-4.2 11.9-1.7 15.9 2.2 7.3 2.6 19 10.2 25.7 12.1-15.1-14.1-40.1-42.8-50.9-53.2-5.6-7.3-3.5-16.8 10.8-5.4 12.7 10 43 41.6 71.6 65.3 6.7 1.5 12.3 2.6 17 3.3 6.5-6.6 10.7-1.5 14.1.8 3.7-.3 5-5.3 7-6.5-2.5-6.2 3.3 0 5.8-.2 5.4-8.7-6.5-16-30.1-40.4-28.6-14.8-62.1-34.4-74.9-42.3-13.4-9.3-7.8-13.3 3.1-9.6 10.3 4 25.8 10.8 46.9 20.7-6.4-7.5-19.5-21.6-22.5-28.7-14.6-34.2-6.7-50-16.1-60.2-2-5.8-4.8-10-10.3-16.8-32-38.5-67.8-75.7-95.1-115.7l2.5-4.6c26.5 42.8 61.5 72.3 95.5 105.1 13.5 14.6 17.7 27.4 33.8 39.4 19.7 12.4 37.3 45.8 47.6 69.5 4.6 10 13.7 20.1 21.9 30.5-8.3-37.9-8.1-57.3-10.6-71.1-3.8-20.7 6.5-15.5 11-1.9 6.6 20.1 17.7 63.1 26.6 92.2 3.8-2.3 6.8-2.7 7.9 6.3 2.4 1.9 4.3 3.2 5.9 4 2.8 1.3 1.3-12.1 7.5-1.1 5.1-4.1 10.7-12.8 9.4-15.1-2.9-4.6-.3-10.6 4.3-10.7-17.3-39.4-32.3-73.5-37.7-87.5-1.5-9.1 1.3-16.5 6.9-7.8 12.2 19 35.3 64.5 35.3 61.4.1-6.7-.6-12.5-2.2-20-2.9-2.3-3.9-6.7-.8-12-.2-4.2-1.2-8.8-2.1-13.7-4.6-5.1-1.4-7.7-2.3-11.8-.9-4.4-2-8.9-3.1-13.6-1.9-7.7-2.6-16.6-4.9-24.4-8-27-14.6-53.2-24-63.7-2.8-5.8-4.4-10.2-2.1-15.7-.6-2.4-1.3-9-2.3-16.3.4-1.8-.5-11.6-1-12.8-9.2-23.1-27.7-51.1-49.4-58.5-29.8-10.2-53.7-.3-69.1 10.6h0z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.99"
        ></path>
        <path
          fill="#E5B3FF"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M285.4 353.1c1.1-19.6 6.4-42.8-.6-65.1.4-31.5 1.7-65.4 11.2-87.7 25.5-41.6 127.1-21.3 140.8-13.1l13-35.2c-3.5-1.4-11.1-4.4-16.8-6.1 1.9-3.1 3.6-8.1 4.7-10.7.7-3.5-12.4-8.7-18.5-3.8-1 2.5-2 4.6-3.3 6.9-.3.5-.9 1.6-2.4 1.7-26.3-5.5-61.7-10.6-85.3-4.4-45.7 11.9-66.7-17.3-84.3 15.5-11.6 21.3-1.7 44.9-6.8 62.1-2.7 9-8.1 40-11.6 72.2-8.3 28.8-6.5 58.6-2.3 74.4 20.1-11.7 37.6-4.8 62.2-6.7h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          stroke="maroon"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M152.9 462.6c.3-8.6 11.8-30.5 25.2-36.9 14.4-6.9 30.6-7.6 47.7 3.8-16.1-2.1-30.6-4-43.1 3.3-11.1 6.4-19.5 23.2-21.7 32M227.4 365.1c-1.6-3.4-1.9-1.6-3.8-5.9-7.7 3.2-19.9 16-20.1 27.3-.3 15.2 9.1 25.3 25.7 37.5-7.4-14.5-20.1-24.2-18.5-38.3 1-8.8 11.1-16 16.7-20.6h0zM330.3 303.8s-4.3-5.2-4.4-6.2c10.4-1.8 19.9-3.2 28.2 1.2 12.8 6.9 20.6 15.4 25.7 35.4-10.6-12.3-15-23.6-27-29.3-6.8-3.1-22.5-1.1-22.5-1.1h0zM413.4 273.7c-5.9-.6-16.9 4.4-21.6 11-9.3 13.1-10.6 27.5-6.4 47.7 4.2-15.7 1.2-32.3 10.9-43.8 4.2-5 10.8-8.7 18-8"
          clipRule="evenodd"
        ></path>
        <path
          fill="#E5B3FF"
          fillRule="evenodd"
          d="M25.6 268.2c0 2.3-.4 4.6-1 6.7-3.6 11.5-16.3 20-31.4 20-14.6 0-27-8-31-18.9-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 11.9 32.4 26.7z"
          clipRule="evenodd"
          transform="translate(214.83 -10.23) translate(45.047 90.423)"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.214"
          d="M-37.6 275.9c-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 12 32.4 26.7c0 2.3-.4 4.6-1 6.7"
          transform="translate(214.83 -10.23) translate(45.047 90.423)"
        ></path>
        <g transform="translate(214.83 -10.23) matrix(.99997 0 0 1.0243 12.401 -66.161)">
          <linearGradient
            id="SVGID_00000160870111309070442540000006478105165267252357_"
            x1="-283.424"
            x2="-219.954"
            y1="167.345"
            y2="170.835"
            gradientTransform="matrix(1 0 0 -1.0747 280.912 599.553)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#543E6B"></stop>
            <stop offset="1" stopColor="#B37FE6" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000160870111309070442540000006478105165267252357_)"
            fillRule="evenodd"
            d="M55.1 420.5c.1 13.7-11.9 21.4-27.6 21.5-15.5.1-31-9.6-30.9-24.4.1-15.1 13.5-23.5 30.4-23.5 15.3.1 28 9 28.1 26.4z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#1F241C"
            d="M-1.3 426.3c-1.1-2.5-1.7-5.2-1.6-8.1.1-15.1 13.5-23.5 30.4-23.5 15.3 0 27.9 8.9 28.1 26.3 0 2.4-.3 4.6-1 6.6"
          ></path>
        </g>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M272.6 350.3s11.1 9.5 8.8 14.1c-10.8 1.2-23.7-13.1-18.5-23.9-3.2.3-11.5-.2-14.1 0 2.2 8-9.3 32.2-23.1 16.8 7.5-5.9 10.3-7.8 10.3-7.8l11.1-9.8 17.4.6 8.1 10z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.4"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          stroke="maroon"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M225.8 356.9c-.2 4.1 0 4.1 2.6 7.4 2.1 1.6 7.7 3.2 10.7 1.3 7.6-4.9 15.8-12.3 8.2-25.7.7 12.7-3.8 19.1-11.6 21.7-3.4 1.2-9.9-4.7-9.9-4.7h0zM283 356.8c.4 3.9-.3 4.6-1.2 7.1-4.1 1.6-9.4 3.1-12.8.5-6.6-5-12.7-10-5.7-24.1-3 9.7 3.6 16.1 10.1 19 3 1.3 9.6-2.5 9.6-2.5h0z"
          clipRule="evenodd"
        ></path>
        <g transform="rotate(-39.348 -34.429 62.508)">
          <path
            fill="#FF7F7F"
            fillRule="evenodd"
            d="M99.8 493.6c0 2.3-.4 4.6-1 6.7-3.6 11.5-16.3 20-31.4 20-14.6 0-27-8-31-18.9-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 12 32.4 26.7z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeWidth="1.214"
            d="M36.7 500.7c-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 12 32.4 26.7c0 2.3-.4 4.6-1 6.7"
          ></path>
          <linearGradient
            id="SVGID_00000168098328301228083700000000848938226873332881_"
            x1="-303.073"
            x2="-237.041"
            y1="-241.493"
            y2="-242.423"
            gradientTransform="scale(1 -1) rotate(-39.347 -482.77 -860.961)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#693333"></stop>
            <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000168098328301228083700000000848938226873332881_)"
            fillRule="evenodd"
            d="M95.5 498.6c.1 14-11.9 22-27.6 22-15.5.1-31-9.8-30.9-25 .1-15.5 13.5-24.1 30.4-24 15.3.1 28 9.2 28.1 27z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#1F241C"
            strokeWidth="1.012"
            d="M39.8 504c-1.1-2.5-1.7-5.3-1.6-8.3.1-15.5 13.5-24.1 30.4-24 15.3 0 27.9 9.2 28.1 27 0 2.4-.3 4.7-1 6.7"
          ></path>
        </g>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M302.4 330.8l10.9-15.8c4.8.1 13.7-6.4 19.2-6.4 3.2 0 4.8 3.4 5.9 5-2.7 5.9-16.7 15.3-25.4 1.6-2.4 3.2-7.1 11-9.5 13.7 19.5 15.8 9.6 32.3-.1 30.3-8.3-4.1-2.5 3.1-5.9-5.7l4.9-22.7z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.4"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          stroke="maroon"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M298.3 354.5c-.5.5 1.4 2.8 4.3 4.6 4.7-1 11.3-.9 12.9-5.3 3.2-8.7.6-21-12.9-24.5 9.4 3.9 12.4 15.7 8.4 22.8-2.2 3.7-12.7 2.4-12.7 2.4h0zM332.9 308s2.7 2.1 5.7 5.4c.6 3.5-1.2 9.5-4.9 10.9-6.5 2.6-14.2 7.3-19.4-7.9 5.4 8.6 13.4 7.7 18.3 3.8 3.2-2.6.3-12.2.3-12.2h0z"
          clipRule="evenodd"
        ></path>
        <ellipse
          cx="291.3"
          cy="19.5"
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="1.187"
          clipRule="evenodd"
          rx="8.3"
          ry="17.3"
          transform="rotate(-84.443 291.27 19.493)"
        ></ellipse>
        <ellipse
          cx="336.3"
          cy="30.2"
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeMiterlimit="4"
          strokeWidth="1.398"
          clipRule="evenodd"
          rx="7.1"
          ry="15.7"
          transform="rotate(-57.165 336.288 30.224)"
        ></ellipse>
        <ellipse
          cx="463.9"
          cy="192.1"
          fill="#FC9"
          fillRule="evenodd"
          stroke="#1F241C"
          clipRule="evenodd"
          rx="12.3"
          ry="18.1"
        ></ellipse>
        <linearGradient
          id="SVGID_00000083082703327819421810000006313910102114861990_"
          x1="721.962"
          x2="730.653"
          y1="242.703"
          y2="214.073"
          gradientTransform="matrix(1.2191 1.5846 .9327 -.1508 -741.6 -880.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#E69966"></stop>
          <stop offset="1" stopColor="#E69966" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000083082703327819421810000006313910102114861990_)"
          fillRule="evenodd"
          stroke="#4D4D4D"
          strokeWidth="1.164"
          d="M375 251.5c-10.3-7.8-11.1-14.6-9.7-25.1-9.5 4.6-25.6-.5-30.5-6.8-6.2-7.9-4.5-14.4 6-13.3 8.4.9 22.4 6.8 26.4 18.5 9.2-1.6 14.7 5.7 18.3 10.4 10.3 13.3 9.9 26-10.5 16.3h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="none"
          stroke="#1F241C"
          d="M116.1 253.9c.7-12.1 18.8-23.7 32.6-27 14-3.3 37.1-4.7 42.1 9.5"
        ></path>
        <g transform="rotate(20.533 483.52 204.54)">
          <ellipse
            cx="433.7"
            cy="185.9"
            fill="#E5B3FF"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="0.938"
            clipRule="evenodd"
            rx="19.6"
            ry="11.7"
            transform="rotate(90 433.663 185.884)"
          ></ellipse>
          <linearGradient
            id="SVGID_00000149355226099834514120000004579272769304791471_"
            x1="923.295"
            x2="937.775"
            y1="34.25"
            y2="-6.64"
            gradientTransform="matrix(.6177 -.3047 -.2314 -.8136 -132.363 481.245)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#543E6B"></stop>
            <stop offset="1" stopColor="#B37FE6" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000149355226099834514120000004579272769304791471_)"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="0.939"
            d="M433.7 168.6c5 0 9.1 7.8 9.1 17.3 0 9.6-4.1 17.3-9.1 17.3s-9.1-7.8-9.1-17.3 4.1-17.3 9.1-17.3z"
            clipRule="evenodd"
          ></path>
        </g>
        <linearGradient
          id="SVGID_00000062887766270557715040000008539996989577079173_"
          x1="749.525"
          x2="768.605"
          y1="-62.334"
          y2="-104.094"
          gradientTransform="matrix(.6816 0 0 -.6062 -53.37 141.867)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#883C09"></stop>
          <stop offset="1" stopColor="#E69966" stopOpacity="0"></stop>
        </linearGradient>
        <ellipse
          cx="463.9"
          cy="192.1"
          fill="url(#SVGID_00000062887766270557715040000008539996989577079173_)"
          fillRule="evenodd"
          stroke="#1F241C"
          clipRule="evenodd"
          rx="10.3"
          ry="15.4"
        ></ellipse>
        <g transform="rotate(8.596 461.9 261.63)">
          <ellipse
            cx="457.9"
            cy="239.3"
            fill="#FC9"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.29"
            clipRule="evenodd"
            rx="19.6"
            ry="11.8"
            transform="rotate(90 457.902 239.29)"
          ></ellipse>
          <linearGradient
            id="SVGID_00000071521990876269524350000005537521588480822694_"
            x1="811.58"
            x2="830.657"
            y1="-50.284"
            y2="-92.038"
            gradientTransform="matrix(.6007 -.09945 -.0908 -.6579 -39.66 273.54)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#883C09"></stop>
            <stop offset="1" stopColor="#E69966" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000071521990876269524350000005537521588480822694_)"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.573"
            d="M458 222.3c5.1 0 9.2 7.6 9.2 17s-4.1 17-9.2 17-9.2-7.6-9.2-17 4.1-17 9.2-17z"
            clipRule="evenodd"
          ></path>
        </g>
        <g transform="translate(14.648 21.158)">
          <ellipse
            cx="177.7"
            cy="7.9"
            fill="#FF7F7F"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.024"
            clipRule="evenodd"
            rx="22.1"
            ry="10"
            transform="rotate(-37.279 177.737 7.923)"
          ></ellipse>
          <linearGradient
            id="SVGID_00000161616677548407029480000014159155039611258521_"
            x1="360.578"
            x2="402.258"
            y1="170.128"
            y2="170.128"
            gradientTransform="matrix(.7626 -.5082 -.3374 -.8392 -55.806 344.437)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#693333"></stop>
            <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000161616677548407029480000014159155039611258521_)"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.023"
            d="M174.6.3c8.5-5.7 16.8-6.9 18.5-2.8 1.7 4.2-3.9 12.2-12.4 17.8s-16.8 6.9-18.5 2.8S166.1 6 174.6.3z"
            clipRule="evenodd"
          ></path>
        </g>
        <linearGradient
          id="SVGID_00000093898071475286103430000012809738958257814177_"
          x1="560.346"
          x2="602.026"
          y1="164.376"
          y2="164.376"
          gradientTransform="matrix(.7251 .06377 .05083 -.6833 -138.511 94.738)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#693333"></stop>
          <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000093898071475286103430000012809738958257814177_)"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="1.416"
          d="M291.7 13.3c8.1.7 14.5 4 14.2 7.4s-7 5.6-15.2 4.9c-8.1-.7-14.5-4-14.2-7.4.3-3.4 7.1-5.6 15.2-4.9z"
          clipRule="evenodd"
        ></path>
        <linearGradient
          id="SVGID_00000089564575547564106250000008350742283803163298_"
          x1="747.944"
          x2="789.624"
          y1="246.675"
          y2="246.675"
          gradientTransform="matrix(.5197 .3455 .3294 -.4198 -144.49 -131.808)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#693333"></stop>
          <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000089564575547564106250000008350742283803163298_)"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="1.736"
          d="M339.7 25.8c5.8 3.9 9 9 7.1 11.4s-8.2 1.2-14-2.6c-5.8-3.9-9-9-7.1-11.4 2-2.4 8.2-1.2 14 2.6z"
          clipRule="evenodd"
        ></path>
        <ellipse cx="149.2" cy="261.8" fill="none" rx="35.2" ry="22"></ellipse>
        <path
          fillRule="evenodd"
          d="M84.4 30.8l6.8-5.1 34.2 20.6c-.7 10.2-.1 17.2 22.3 17.7 4.3 9.3 9.3 16.5 12.8 28.1l-7.4 15.3L138.6 73c-11.9-24.1-37.9-28-54.2-42.2z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <linearGradient
          id="SVGID_00000150063355255427340230000005147614947431762363_"
          x1="342.076"
          x2="307.876"
          y1="289.761"
          y2="295.021"
          gradientTransform="matrix(1 0 0 -1 -172.686 433.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000150063355255427340230000005147614947431762363_)"
          fillRule="evenodd"
          d="M223.5 68.3c5.5 8 9.1 11.4 6.3 19.5-51.5 41.5-51.4 93.6-43.5 141.5L169 217.7c-3.4-24-14.8-84.6 54.5-149.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <path
          fillRule="evenodd"
          d="M304.3 137l-4.5 1.4c-43.4-28.9-67.8 15.7-60.2 65l-6.8 25.9c-16.2-13.1-18.5-83.9 9.7-104.8 16.8-12.7 51.2-12.3 61.8 12.5zM205.2 31.7c4-3.8 6.2-9.1 4.6-15 9.5 13.1 37.7 50 43 60l-11.4 5.7c-8.4-10.5-31.5-38.9-36.2-50.7zM296.1 28.1l8.4-1.2-10 44.4-7.9-1.4c1.3-13.6 3.5-28.3 9.5-41.8zM336.6 39l9.8 1.4-20.2 37.4-8.8-3.3c5.4-13.5 10.8-22.9 19.2-35.5zM326.6 78c15.9 14.2 23.6 34 27 51.9l10.8-2.4c-2.6-28.9-26.8-42.8-37.8-49.5zM163.4 574c5-4.2 10.1-7.9 14.8-14.2l1.6-53.3-16.5-13.6.1 81.1zM299.2 589.6l14.5-6.3 1-12.3-13.4-2.2-2.1 20.8zM120.7 162.9l-3.2 14-39.8 5.4c-8.2-2.9-7.9-6.2-10.1-10.7l53.1-8.7zM122 204.9l-.6 10-50.6-2.2c-7.9-2.8-6.5-7-8.3-10.7l59.5 2.9zM119.5 238.4c1 6.1-14 12.2-23.9 18.4L75.5 265c-8.4.4-8.7-4-11.8-6.7l55.8-19.9zM430.7 171.9l2.9 11.5c-15.6-3.8-94.4-20.3-129.5 7.1-12.4 9.7-13.5 26.3-16.5 43.9-5.3 31.1-1.5 39-2.7 53.1 4.5 8.6 4.2 52 1.5 52-6.3-9.3-11.6-11.3-18.5-16.2 2.4-10.1-1.4-21.5-1.4-36.2.5-30.9 4.2-70.6 20.9-95.2 9.2-13.6 26.4-21.3 42.3-25.2 32.8-8.2 77.6-2.6 101 5.2z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <path
          fillRule="evenodd"
          d="M452 197c.8 3.8 1.6 8.8 5.6 11.8l-45.8.4c-4.7-5.2-4.2-5.6-8.7-10.1L452 197zM448.5 244.8c.8 3.8 2 9.1 6 12.1l-19.2-3.2c-1.6-3.2-2.6-7.2-3.8-10.4l17 1.5zM328 302.1l-14.9 1.1c0-5.2-4.4-9-9.7-10.7l-18.7-19.4-.1-17.7 28.7 29.9c7.9 3.4 14.3 8.8 14.7 16.8z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <radialGradient
          id="SVGID_00000001630879708182099180000007938876837638418307_"
          cx="-57.03"
          cy="260.691"
          r="57.213"
          gradientTransform="matrix(.5185 -.4562 -3.0428 -3.4587 1004.84 1302.129)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_00000001630879708182099180000007938876837638418307_)"
          fillRule="evenodd"
          d="M161.2 465.8c4.8-14.1 9.8-29.3 21.9-37.6 14.9 22.7 32.3 53.6 74.5 89.1-18.1-5.5-72.7-28.7-96.4-51.5z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <radialGradient
          id="SVGID_00000170978462317162549260000003320287350951963822_"
          cx="637.359"
          cy="359.721"
          r="57.213"
          gradientTransform="matrix(.1937 .5678 5.0239 -1.7136 -1595.134 476.528)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_00000170978462317162549260000003320287350951963822_)"
          fillRule="evenodd"
          d="M295.2 204.9c32.6-23 67.9-17.5 87.8 2.5-5.2 0-56.6 1.1-97 34.3 4.6-17.6 5.3-21 9.2-36.8z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <radialGradient
          id="SVGID_00000140699517861478192120000009976528995031165322_"
          cx="-13.89"
          cy="252.505"
          r="57.213"
          gradientTransform="matrix(.5645 -.3412 -2.3831 -3.9423 947.482 1365.262)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_00000140699517861478192120000009976528995031165322_)"
          fillRule="evenodd"
          d="M298.1 359.2c14.2 1 22.5-3.2 30.4-8.1 4.7 24.9 4.5 40.8 16.2 59.5-23.9-21.2-30.7-31.1-46.6-51.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <linearGradient
          id="SVGID_00000000208354203696653920000012539313673460746389_"
          x1="340.243"
          x2="306.043"
          y1="277.848"
          y2="283.108"
          gradientTransform="matrix(1 0 0 -1 -172.686 433.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000000208354203696653920000012539313673460746389_)"
          fillRule="evenodd"
          d="M257 134.7l44.5 5c-37 6-52.9 29.8-63.1 62.6-2.2-27 .2-49.7 18.6-67.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <path
          fillRule="evenodd"
          d="M150.4 33.3c2.8 2.1 3.1 2.7 7.3 7l-11.1 23.6c-3.7-.2-7.9-.6-8.6-1.2l12.4-29.4zM432.5 130.5c2.8 2.1 2.7 3.7 5.8 5.4l-6.2 10.6c-2.9-1.8-4.3-.5-6.3-1.6l6.7-14.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <g>
          <path
            fill="#99F"
            fillRule="evenodd"
            d="M99.3 441.5c3.6 13 3.4 31.1-9.1 44s-31.5 16.7-42.6 8.3c-11.1-8.3-13.6-34.1-6.5-48.7 10.4-14.7 47.1-11.9 58.2-3.6z"
            clipRule="evenodd"
            transform="matrix(1.16 0 0 1.0395 66.518 -85.119)"
          ></path>
          <g transform="matrix(1.16 0 0 1.0395 66.518 -85.119) translate(75.099 77.656)">
            <linearGradient
              id="SVGID_00000137847776268665446510000010446552287826563770_"
              x1="-278.288"
              x2="-219.188"
              y1="130.448"
              y2="68.948"
              gradientTransform="matrix(1.1199 -1.1614 -1.0679 -.8033 368.848 176.743)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0"></stop>
              <stop offset="1" stopOpacity="0"></stop>
            </linearGradient>
            <path
              fill="url(#SVGID_00000137847776268665446510000010446552287826563770_)"
              fillRule="evenodd"
              d="M23.9 364.1c5 9 4 29.8-8.4 42.7-12.5 13-31.6 16.7-42.6 8.4-11.1-8.3-13.5-32.6-6.7-48.7 12.3-14.8 46.6-10.7 57.7-2.4z"
              clipRule="evenodd"
            ></path>
            <path
              fill="none"
              stroke="#4D4D4D"
              strokeWidth="1.5"
              d="M23.9 362.9c5.1 16.9 4 31.5-8.5 44.4C3 420.2-16.1 424-27.1 415.6c-11.1-8.3-13.2-26.2-7.3-47.7"
            ></path>
          </g>
        </g>
        <g transform="translate(270.28 265.68)">
          <path
            fill="#99F"
            fillRule="evenodd"
            d="M-87.5-33.4C-73.1-24.1-74.8-7.9-91 6.5c-16.3 14.4-40.5 17.6-54.9 8.4-14.4-9.3-13.4-24.6 2.8-39 16.2-14.5 41.1-18.6 55.6-9.3z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            d="M-149.5 11.3c-7.1-9.1-4-22.8 8.5-33.6 15.1-12.9 38.2-16.6 51.5-8.3 8.9 5.5 11.4 15.1 7.7 24.7"
          ></path>
          <linearGradient
            id="SVGID_00000036252871535980119420000007837681961468038051_"
            x1="-712.758"
            x2="-653.658"
            y1="-154.903"
            y2="-216.403"
            gradientTransform="matrix(.8667 -.7254 -1.1486 -.6972 228.988 -632.097)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0"></stop>
            <stop offset="1" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000036252871535980119420000007837681961468038051_)"
            fillRule="evenodd"
            d="M-90.1-29.9c13.4 8.1 12 24.9-3.1 37.5s-38.1 16.2-51.5 8.1c-13.4-8.1-12-24.9 3.1-37.5 15.1-12.5 38.1-16.2 51.5-8.1z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="4.2"
        d="M223.8 448.9l48 23.3-7.8-3-39.8-29.9"
        transform="translate(-108.81 -11.719) translate(70.432 -15.839)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        d="M288.7 420.5c-6.1-2-11.9-6-18.1-8M295.8 425.5c-6.1-3.9-24.1-18.1-30.3-20.1M294.8 434.7c-6.1-2-13.7-8.4-17.7-11.6M295.3 432.5c-6.1-3.9-14.7-10.7-21.1-15.3M283 411.4c-5.3-3.6-14.8-7.8-20.2-11.5M295.3 422.6c-4.8-5.3-28-24.6-33.3-28.3"
        transform="translate(-108.81 -11.719)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="4.2"
        d="M221.1 452.4c12.7 6 25.5 11.8 38.4 17.3.5.2 1.1.5 1.6.7l-39.6-27.6"
        transform="translate(-108.81 -11.719) scale(1 -1) rotate(-76.087 -318.322 -40.087)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        d="M275.9 442.8c-3.4-5.5-8.7-10.1-12.1-15.6M282.5 448.5c-5.3-5-23.4-19.1-26.7-24.5M291.2 445.3c-3.4-5.5-11.5-11.2-15.5-14.4M289.2 446.3c-5.3-5-14-11.7-19.9-16.8M265.7 439.5c-4.8-4.3-11.2-12.5-16-16.8M279.6 448.8c-6.3-3.4-30.6-21.3-35.4-25.6"
        transform="translate(-108.81 -11.719)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="4.2"
        d="M219.1 477.5l42 22.7 1 .4-42.6-32.7"
        transform="translate(-108.81 -11.719) matrix(1.1892 0 0 1.1358 -88.127 -38.589) rotate(34.135 545.06 787.81)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        d="M451.8 334.6c-4-5.1-6.5-11.7-10.5-16.8M454.8 342.7c-2.9-6.7-9.8-28.5-13.8-33.6M448.8 349.7c-4-5.1-6.6-14.6-8.2-19.5M450.5 348.2c-2.9-6.7-6.2-17.2-8.9-24.5M452.2 323.8c-2.4-6-7.9-14.8-10.3-20.8M456.1 340c-1-7.1-9.4-36.1-11.7-42.1"
        transform="translate(-108.81 -11.719) matrix(1.1892 0 0 1.1358 -88.127 -38.589)"
      ></path>
      <g>
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="4.2"
          d="M252.6 435.9l43.4 21.2-6-3.7-37-27.1"
          transform="translate(-108.81 -11.719) matrix(1 0 0 1.2543 0 -91.318) scale(-1 1) rotate(69.777 -34.1 -93.884)"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="1.5"
          d="M422.2 348.8c.3-6.4-1.5-13.3-1.3-19.7M424.5 357.2c-1.6-7.1-8.6-28.9-8.4-35.3M433.4 359.4c.3-6.4-3.2-15.7-4.7-20.6M431.2 359.1c-1.6-7.1-5-17.5-7-25.1M415.7 340.3c-1.6-6.3-2.2-16.6-3.8-22.9M421.9 355.8c-3.3-6.3-13.4-34.8-15-41.1"
          transform="translate(-108.81 -11.719) matrix(1 0 0 1.2543 0 -91.318)"
        ></path>
      </g>
      <g opacity="0.99" transform="translate(-108.81 -11.719)">
        <path
          fill="#CCC"
          d="M369.4 184.4c16.4-2.2 40.7-.9 56.4 10 22.1 15.3 28.7 19.3 43.8 54.9 1.3 3 .8 9.8 2.3 13.2-2.9 0-13.2 4.3-8.2 15.6-.3 2.8 1.7 6 3 6.7 7.5 4.1 13.8 3.6 14.1 2.6 1.7-.3 12.6 4.3 13.5 7 36 42.3 38.5 63.3 47.5 106.6 9.5 46.1 10.6 103.5-14.2 140.6-35.5 30.7-108 38-179.5 13.5-52.8-18.1-96.2-24.2-135.2-64.7-1.4-1.5-2.2-6.3-3.6-7.8-.8-.9 2.7-3.5 1.8-4.4 3.8-2.5 5.8-8.7-.7-14.3-11.9-10.3-20.3.7-20.3.7-2.7-.2-8.9-2.1-11-4-21.3-19-38.2-61.8-39.9-100.5-2.3-52.7-.8-80.7 27.5-109.5l-1.4-6c-32.2 27-37.7 77.1-33.6 117.6 4 39.7 22.4 82.5 50.8 110.2 3.2 7.9 13 18.5 20.2 19.6 43.2 49 89.2 52.3 147.3 71 82.4 26.5 170 9.6 186.8-15.5 28.9-51.4 20.7-100.6 13-150.2-6.1-38.8-23.5-78.4-54.3-114.2-2.3-9.4-5-16.7-12.7-24.8-15.8-48.4-29.2-53.5-54.1-68.9-13.3-8.2-23.2-12.6-45.9-9.4"
        ></path>
        <path
          fill="none"
          stroke="#4D4D4D"
          strokeWidth="1.5"
          d="M362.9 187.2c17.9-4.7 48.3-4.9 64.5 7.1 11.7 8.7 17.5 14.5 24.9 24.1 6.6 8.4 9.6 12.9 16.2 27.6 1.2 2.6 3.7 12.5 3.1 15.9 6-2.2 13.2-.7 12 6.5 4.3 2 8 15-4.9 19.2 1.6-.2 14.4 4.7 15.5 6.7 37.8 43.6 39.1 62.5 46.5 105.6 7.9 46.4 10.6 103.5-14.2 140.6C491 571.2 424 577 351.7 555.4c-52.2-15.5-98.3-22.6-137.9-63.5-1.5-1.5-3.8-6.8-4.6-9.7-6.1 7.6-14.7 2.7-16.2-2.2-8.8-3.7-4.1-13-3.3-15.5-3.4-.2-9.8-3.7-12.4-6.1-25.4-24-34.4-63.6-38.3-99.4-4-37.3-1.2-79.9 26.6-109.5"
        ></path>
        <path
          fill="none"
          stroke="#666"
          strokeWidth="6"
          d="M165.3 244.4c-32.2 27-37.5 78.3-33.6 119.5 3.7 39.6 20.5 81.7 48.5 109.7 1.3 8.1 13.6 19.1 22 20 34.2 38 88.9 54.3 146.8 71.2 83.1 24.3 170.9 6.8 187.7-18.3 28.9-51.4 22.9-100.1 13.9-149.3-8.2-44.3-14.4-67.7-54-112.1-.1-12.5-6.2-27-15.1-31.7-18.5-49.8-27.9-53.8-52.9-67.9-13.7-7.8-24.4-9.1-47-5.9"
        ></path>
        <path
          fill="#FF0"
          fillRule="evenodd"
          d="M483 268.8c5.7 2.2 7.4 14.4-3.8 18.1-3.1 0-10.1-8.7-10.1-13.7s.1-7.6 2.3-11c3-.7 13.1-2.5 11.6 6.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.878"
        ></path>
        <g
          fillRule="evenodd"
          stroke="#4D4D4D"
          strokeMiterlimit="4"
          clipRule="evenodd"
          transform="translate(4.11 -1.15)"
        >
          <ellipse
            cx="471.3"
            cy="269.1"
            fill="#7F7FCC"
            strokeWidth="5.454"
            rx="2.8"
            ry="7.9"
            transform="rotate(143.95 471.35 269.057)"
          ></ellipse>
          <ellipse
            cx="475"
            cy="278.6"
            fill="#E69966"
            strokeWidth="0.921"
            rx="2.9"
            ry="11.5"
            transform="rotate(172.054 474.972 278.632)"
          ></ellipse>
        </g>
        <path
          fill="#FF0"
          fillRule="evenodd"
          d="M193.7 479.3c1.2 4.8 9.8 10.2 15.8 1.7 1.2-2.8-2.5-9.6-6.4-12.7-4.1-3.2-7.9-4.4-12.1-4.2-1.9 2.4-6.3 12.9 2.7 15.2z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.878"
        ></path>
        <g
          fillRule="evenodd"
          stroke="#4D4D4D"
          strokeMiterlimit="4"
          clipRule="evenodd"
          transform="rotate(-23.55 857.54 1069.2)"
        >
          <ellipse
            cx="488.6"
            cy="255.7"
            fill="#7F7FCC"
            strokeWidth="5.454"
            rx="3.7"
            ry="6.1"
            transform="rotate(121.48 488.645 255.66)"
          ></ellipse>
          <ellipse
            cx="492.1"
            cy="265.2"
            fill="#E69966"
            strokeWidth="0.921"
            rx="3.7"
            ry="8.9"
            transform="rotate(149.598 492.105 265.23)"
          ></ellipse>
        </g>
        <path
          fill="none"
          stroke="#CCC"
          strokeWidth="4.2"
          d="M277 368.4c-10.4-12.3-10-26.6-1.6-36.3 5.6-6.5 16.9-11.2 26.5-11.8 19.9.1 27.7 7.9 33.4 15.9 1.1-12.4 4.6-18.7 13.5-27.6 9.5-5.8 20.7-10.7 31.2-7.3"
        ></path>
        <path
          fill="#CCC"
          fillRule="evenodd"
          d="M334.4 338.4l2.6-.7.3 7c2.2 3.6 4.9 8.2 8.1 11 .7.7 1.3 1.6 2.1 2.1 3 2.1 4.6 4.2 5 3.8l-5.1 5.9c-4.4 2.5-10.2-.6-14.6-2.1 2.4-3.7 1.2-5.7 2.8-8.5 2-3.6 1.9-7.4 1.9-11.9l-3.1-6.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.878"
        ></path>
        <path
          fillOpacity="0"
          d="M266.8 351.5H279.3V381.1H266.8z"
          transform="rotate(149.598 273.023 366.261)"
        ></path>
      </g>

      <path
        style={PATH_STYLE}
        ref={rightAtriumRef}
        fill="none"
        stroke="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M134.8 240.9c-.3.7-.6 1.7-1.1 2.9-1.2 2.8-4.1 9.2-9.5 15.4-3.2 3.6-10.7 9.4-16.1 11.5s-13.3 4.9-22.2 5.1-13.8-1.1-22-6.9-7.7-12.9-7.7-12.9c-1.9 2.5-4.3 5.9-6.8 10.1-1.2 1.9-4.4 7.3-6.6 12.8-2.9 7.1-3.4 12.8-4.5 24.1-.6 6.6-1.1 15-.7 24.9.3 7.4.9 12.8 1.7 19.4 1.4 12.3 3.3 21.7 4.8 29.6 1 5.2 2.5 12.4 4.5 21 0 0 8.9 21.3 12.6 27.6 3.7 6.3 17.7 19.9 17.7 19.9l16 2.3 2-5.2 4.1-7.4s1.1-4.2 8.5-12 14.2-9.8 20.1-11.3c5.9-1.5 13.1-2.8 23.7 0s14.6 7.9 14.6 7.9l3.3-4.6c-2.3-1.5-5.2-3.6-8.3-6.3-4.9-4.4-8-8.3-8.6-9.1-3.4-4.4-6.2-8-7.8-13.6-.7-2.3-2.9-9.9 0-17.4 1.1-2.9 2.9-5.5 3.5-6.4 1.1-1.7 2.6-3.4 5.1-5.9 5.5-5.5 6.4-5 6.4-5l-1.1-2.6c-1.1-2.6-1.5-6.3-2.1-10.8-.5-4.5 2.2-11.6 2.2-11.6v-16.1c.4-8.2 1.7-14.8 2.6-19.7.7-3.9 1.5-7.1 2.1-9.5-6-7.3-12-14.6-18-22l-12.4-18.2z"
      ></path>
      <path
        style={PATH_STYLE}
        ref={rightVentricleRef}
        fill="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M170.8 355.3s8.5 7.6 15.2 8.9c6.6 1.3 12 2.3 20.1.7 8.1-1.7 12.3-5.6 13.8-7.6 1.6-2 4.2-3.7 4.2-3.7l5 2.4s2.7 1.4 4.9 6.3 3.3 7.5 3.3 7.5 2.1 1.7 3.4 5.2 2.5 12.6 3.1 20.6 5.1 21.6 5.1 21.6l5.6 15.2 18.4 22.5-31.8-13.9-13.3-5.1-6-1s-7.4.8-3 6c4.5 5.2 16.3 12 24.1 17 7.8 5 32.6 18.1 38.7 21.7s19.4 10.5 19.4 10.5 11 11.8 16.9 16.6 11.2 11.4 13.1 14.8c1.9 3.4 0 7.3 0 7.3l-5.2-2.7s-1.5-.6-1.5 1.5v2.2s-3 5-4.7 5.5-2.4-2.4-6.3-3.7c-3.8-1.3-8.8 3.2-8.8 3.2l-16.3-3.1-61.9-57.3s-11.5-10.8-15.2-12.1c-3.7-1.3-5-1.7-8.6-1.1s-.8 7.3 1.4 10.7 29.2 31.5 32.3 35 15.8 16 15.8 16l-21.1-10.2s-3.4-4.2-7-4.6-9 1.9-9 1.9l-27.4-9.8-34.6-16.7-22.8-11.2-19.8-11.7-5-3.8-1.2-2.3 2.9-8.3s4.8-9.4 6.9-12.8c2.1-3.4 10.8-10.2 10.8-10.2s4.2-3 10.6-4.1 17.1-2.5 23.4-.8 6.6.8 6.6.8l3.8.2 3.8-5.5-4.7-8.3-7.8-10.7-4.5-6.6-2-7.1v-4.8s.7-6.6 4.8-10.5c4.1-3.9 12.1-10.5 12.1-10.5z"
      ></path>
      <path
        style={PATH_STYLE}
        ref={pulmonaryArteryRef}
        fill="none"
        stroke="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M161.2 315.1s.1 20.8 2.6 28.3c2.4 7.5 6.3 13 14.5 17.5s25.3 7.7 36.7.4c11.3-7.3 11.5-15.1 12.6-19.7s0-8.6 0-8.6l2-14.7 1.1-12.9s-.1-12.1-.9-16.3-2.4-10.1-2.4-10.1l-.3-1.5.3-10.6.2-11.5.7-12.7.9-11.6 1.5-11.8 1.4-8.7 3.3-12s4.1-11.7 8.4-15.9c4.4-4.2 10-8.5 16.8-10.9s10.3-3.9 15.6-4.7c5.3-.7 17.3-3.1 27.8-3 10.4.1 30.2 1.2 37 2.4s18.5 3.6 24.3 5.2 9.5 3.6 9.5 3.6 5.1 4.7 9.4 2c4.2-2.7 9.4-5.5 12.5-14.4 3-9 2.6-14.8.7-18.4-1.9-3.7-5.3-5-5.3-5l-16-5 3.9-10.2s-2.3-4.1-7.9-5.3c-5.5-1.2-11.4.7-11.4.7l-4.4 8.6-27.8-3.6-11.9-1.5-18.6-1.1-14.8.7-17.7 3.5-15 1.8-18.3-1.3-16.2-2s-7.2-1.6-13.5.4c-6.4 2-10.6 5.8-13.4 10.5-2.8 4.7-5.3 8.9-6.8 15.6-1.5 6.6-2.4 18.2-1.9 22.5.6 4.3 1.1 19.8.4 23.2-.8 3.4-4.2 18.2-5.1 23.2-.9 5-3.5 20.9-4 24.8-.6 3.9-3.8 30-3.8 30l-3.3 14.3-1.9 10.2-1.5 15.6zM12.5 133.1s12.6-5.4 24.1-7.4 24.7-3.8 24.7-3.8l1.6 45.7-27.4 4.3-13.8 2.4h-2.5s-11.5-10.7-12-21.2 1.5-18.2 5.3-20z"
      ></path>
      <path
        style={PATH_STYLE}
        ref={lungBedRef}
        fill="none"
        stroke="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M273.7 124.3s-10.2 10.7-7.2 25c3.1 14.3 9 18.2 9 18.2 5.3-1 11.1-1.9 17.3-2.5 12.3-1.1 23.3-.8 32.7.2 11 .5 20.1 2.1 26.9 3.6 12.9 2.9 19.3 4.3 22.6 6.8.9.7 3.4 2.5 6.6 2.6 1.8 0 3.9-.8 7-3.3 6.9-5.7 10.1-16.8 10.1-16.8s1-4.5.5-8.6-3.7-7.7-3.7-7.7l-2-1.7c-5.8-1.8-11.5-3.6-17.3-5.4l3.9-10.2c-3.1-3.7-6.1-5-8.4-5.4-4.6-.9-10.9.8-10.9.8h0l-2.8 5.8-1.7 2.6c-6.5-.8-13-1.7-19.4-2.5-6.9-.9-13.9-1.8-20.8-2.7-6.1-.3-12.3-.6-18.4-1-4.8.2-9.6.4-14.5.7-3.2.5-6.3 1-9.5 1.5z"
      ></path>
      <path
        style={PATH_STYLE}
        ref={lungBed2Ref}
        fill="none"
        strokeDasharray="20,10,5,5,5,10"
        stroke="none"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M393.2 140.2l67.3 22.7s1.2.9 2.6 2.7c2.8 3.8 6.1 11.3 0 22.2-9.1 16.2-14.4 13.1-14.4 13.1s-2.7-.6-6.6-2.6L377 177l69.2 23.4c-7.5-3.2-7.8-17.5-3.2-24.7 0 0 8.3-18.8 20.1-10.1"
      ></path>

      {/*  */}
      <g ref={balloonRef} opacity="0">
        <path
          fill="#E6DC64"
          fillRule="evenodd"
          stroke="#646432"
          strokeWidth="2"
          d="M382.1 150s3.8.2 6.2.6c43.3 6.9 75.9 25.4 97.8 50.7 30.7 35.5 39.7 83.7 29.1 129.3-.5 2.7-2.4 5-5.1 5.8-2.7.9-5.6.2-7.6-1.7s-2.8-4.8-2-7.4c1.1-4.9 2-9.7 2.7-14.6 4.8-2 5.6-8.1 1-11.4 1.7-33-8-65.2-29.5-90.2-19.4-22.5-48.6-39.5-88.9-45.8-3-.5-8.2-1.1-8.2-1.1s-.6-.2.2-4c.7-4 4.3-10.2 4.3-10.2z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#E6DCB4"
          fillOpacity="0.392"
          fillRule="evenodd"
          stroke="#969664"
          strokeWidth="2"
          d="M525.2 262.5c-5.4 1.3-10.3 4.6-14.6 8.2-36.3 21.4-58.7-37.8-21.9-48 3.9.4 12.1-2.7 16.4-5.2 30.9-18.2 56.3 34.1 20.1 45z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M534 228.8c-8.2-1.3-16.9-1.1-22.6-8.3 10.1-5.2 16.7.5 22.6 8.3z"
          clipRule="evenodd"
        ></path>
      </g>
      <image
        id="1"
        x="80"
        y="275"
        width="50"
        height="50"
        href="/images/one.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
        onClick={onClick}
      />
      <image
        id="2"
        x="170"
        y="400"
        width="50"
        height="50"
        href="/images/two.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
        onClick={onClick}
      />
      <image
        id="3"
        x="175"
        y="250"
        width="50"
        height="50"
        href="/images/three.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
        onClick={onClick}
      />
      <image
        id="4"
        x="300"
        y="125"
        width="50"
        height="50"
        href="/images/four.svg"
        style={{ cursor: 'pointer' }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
        onClick={onClick}
      />
    </svg>
  )
}
