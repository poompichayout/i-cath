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
  const lungBedRef = useRef<SVGPathElement>(null)

  const ref = useMemo(
    () => [rightAtriumRef, rightVentricleRef, pulmonaryArteryRef, lungBedRef],
    []
  )

  const highlight = useCallback((e: SVGPathElement) => {
    e.style.stroke = '#70e1f5'
    e.style.zIndex = '999'
  }, [])

  const deHighlight = useCallback((e: SVGPathElement) => {
    e.style.stroke = 'none'
    e.style.zIndex = '1'
  }, [])

  useEffect(() => {
    const selectedRef = ref[Number(pageId) - 1]
    if (selectedRef.current) {
      highlight(selectedRef.current)
    }
  }, [ref, pageId, highlight])

  const onClick: MouseEventHandler<SVGImageElement> = (e) => {
    const selectedRef = ref[Number(e.currentTarget.id) - 1]
    ref.forEach((c) => {
      if (c.current) deHighlight(c.current)
    })

    if (selectedRef.current) {
      highlight(selectedRef.current)
    }
    setPageId(Number(e.currentTarget.id))
  }

  const onMouseOver: MouseEventHandler<SVGImageElement> = (e) => {
    const selectedRef = ref[Number(e.currentTarget.id) - 1]

    if (selectedRef.current) {
      highlight(selectedRef.current)
    }
  }

  const onMouseOut: MouseEventHandler<SVGImageElement> = (e) => {
    const selectedRef = ref[Number(e.currentTarget.id) - 1]

    if (selectedRef.current && Number(e.currentTarget.id) !== pageId) {
      deHighlight(selectedRef.current)
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 532.9 640.8"
      version="1.1"
      viewBox="0 0 532.9 640.8"
      xmlSpace="preserve"
    >
      <text
        fontFamily="ArialMT"
        fontSize="32"
        transform="translate(154.507 618.84)"
      ></text>
      <g transform="translate(-57.562 -10.469)">
        <path
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M296.3 556.7l65.1 7.4-7.4 52.1c-4.9 12.9-51.9 13.9-60.5 0l2.8-59.5z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#99F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.658"
          d="M146.5 455.6l-.7 135.1c3.3 13.9 18.6 19.3 38 19.4 19.4.1 30.9-3 36.2-15.2l3.6-79.5"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FC9"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M103.7 263.9c14.5-5.9 126.9-13.9 183.9-14.4 58.1-.5 194-3.3 216.5 4.4l-4.5 38.6c-21-3.4-78.8-9.3-93.2-9.7-42.7 0-59.3-1.5-96.9-.7-42 .9-129.8-12.4-191.6 18.3-9.7 1.9-15.3-8.2-17.3-15.9-3.7-14 3.1-20.6 3.1-20.6h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FAA"
          fillRule="evenodd"
          stroke="#1F241C"
          d="M456.8 313.8c9.8 1 39.3 84.7 51.8 149.7-2.6 66.3-22.6 100.2-43.9 93.5-21.2-6.7-73.5-102.5-101-132.6-27.4-30-64.2-67.8-64.2-67.8l157.3-42.8z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FC9"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M110.8 213.9c6.5-.1 83.5 9 104.2 12.5 44.1 7.4 48.3 12.3 87.4 11.5 57.6-1.3 135.6-32 201-28.1l-.3 34.4c-42.7-1.1-73.4 1-86.1 6.4-13.9 28.3-76.9-3.2-114.2-2.3-41.7 1-164.9 2.5-192.5-.5-5.4-5.4-7.6-5-8.5-18.3 1.3-7.7 2.5-11.9 9-15.6h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FAA"
          fillRule="evenodd"
          d="M310.4 264.4c7.7-40.9 77.9-49.6 102-31.1 34.9 19.8 56.9 79.9 44.3 85.8 0 0-13.8-6.1-25.1 10-8.9 12.8-7.8 39.4-7.8 39.4s-9.3-25.9-24.9-31.1c-15.5-5.2-28.5.5-39.4 4.1-10.3-9.3-53.9-51.7-49.1-77.1z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M366.3 332.6l89-24.8-.2 6.4c-39.7 6.6-25.5 31.7-32.7 49.9-11.4-21.1-26.3-28.6-51.2-25.1-2.4-6.5-2.6-3.3-4.9-6.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.4"
        ></path>
        <path
          fill="#B3B3FF"
          fillRule="evenodd"
          d="M295.3 358.1c40.4 25.4 51.1 81.1 70.8 128.8 29 39.4 85.4 84.8 77.3 97-10.9 16.3-104.2-5.7-157-33.7-49.9-26.5-104-63.7-104-63.7l112.9-128.4z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#B3B3FF"
          fillRule="evenodd"
          d="M160.9 268.5c.5 15.5-30.8 50-27.1 129 6.7 64.2 59 105.6 68.4 110.8 2.1-6.7 3.1-39.4 21.8-48.2s41.9 4.1 41.9 4.1-15-19.2-15-36.3c0-17.1 13.5-30 19.2-35.7 1-14 4.1-57.5-6.7-88.6-10.9-31.1-36.9-41.9-36.9-41.9l-65.6 6.8z"
          clipRule="evenodd"
        ></path>
        <radialGradient
          id="SVGID_1_"
          cx="35.336"
          cy="346.051"
          r="57.213"
          gradientTransform="matrix(.6801 -.1203 -.6696 -3.7838 395.079 1698.56)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_1_)"
          fillRule="evenodd"
          d="M156.3 299.3l53.3-19.3c-45.8 46.2-28.3 134.2 6.1 175.8-7.9 9.2-15.3 26-22.9 38.4-1.8 2.9-7.1-1.5-8.4 1.8-32.1-15.2-83.1-130.3-28.1-196.7z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M193.3 494.9c17.1-35.8 43-68.2 65.8-101.8l9.5 9.2c-37.8 27-5.8 42-2.7 61.9-44.4-11.9-55 6.8-61.6 29.1l-11 1.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.4"
        ></path>
        <path
          fill="#E5B3FF"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M237.3 162.3c-33.1-1-107.1 5.5-124.9 15.1-6.4 2.1-7.6 13.6-6.9 20.9.8 8.1 6.1 16.5 12 21.2 0 0 87.2-15.7 118.8-11.6"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M375.6 346.7c-6.4-10.9-8.4-19-20.5-26.9-24.7-20.3-51.6-47.6-71.7-98.5-14.9-38.7 21.8-73.8 61-45.8 23.9 17.5 6.8 44.8 11.5 42.8l50.5 2.1c0-5.2 9.6-16.2-3.4-68.5-4.6-22.7-23.9-32.4-35.2-39.9 4.1-16.1 22-39.3 22-39.3l-25.5-15c-1.2-1-20.3 30.6-24 45.6-1.1 4.7-3.2.7-3.9 1.5-1.5-13.2 9.4-36.4 11.4-48.9l-32.4-1.5s-6.1 32.4-5.8 50.2c-5.8 1.5-13.5 5.7-15.2 6.3-7.3-7.7-42.2-61.5-44.6-60.8L216.9 78c-3.2 0 33.4 24.1 32.9 45.9-.5 22.2-35.3 22.9-31.7 97.5 2.8 57 49.2 97.2 66.8 120.1 17.1 21.8 42.4 59.3 54.4 53.3-4.6-23.9 17-42.4 36.3-48.1h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#99F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M157.3 288.8c5.6-16.5 5-96.2.1-153.8-1.1-12.7-15.3-40.4-41.8-48.5-6.1-8.9 4.5-26.7 15.7-25.6 4.6.5 27.9 13.4 33.6 18-.3-.6 6.1-16.6 6.6-16.1 5.7-3.4 25.1 3.6 26.3 11.7-1.5 4.6-7.7 15.3-10.5 23.8 3.8 4.6 6.7 12.3 14 27.7 7-10.3 28.6-30.8 42.1-35.6 18.3 2.2 29.3 23.1 27.4 32.4-25.4 13-68.6 81.9-37.7 155.2"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FF7FCC"
          fillRule="evenodd"
          stroke="red"
          strokeWidth="1.8"
          d="M335.5 238.7l7.2-16.1c23.8-11.9 47.2-8.9 64.4-2.6 46.2 16.9 54.3 64 55.1 75.7-4.4 1.4-7.6 10.2-4.5 14.9 3.1 9.7 14.4-.5 15-1.3 64.4 40.2 95.5 250.4 29.5 277.2-96 40.2-250.1-5.8-298.4-59.7-1.8-1.7-4.1-7.7-5.2-11.3-.9-2.9-2.3-1.2-3.7-3.8-4.2-2.2-8.4-9.9-14.4-14.1-2-1.4-8.5-.8-10.5-2.4-7.5-6-12.2-11.3-19.1-21.8-52.9-86.4-18.6-168.2 6-195.6l1.8 16.4c-10.9 13.7-34.5 34.5-19.2 116.5 1.5 20.1 12.3 60.6 37.4 79.9.7.6 14.4 2.5 15.9 2.9 5.3 1.6 6.2 6.1 9.1 7.9 13.2 11.5 29.6 19.7 48.9 28.1 20.5 11 39.6 19.6 62.2 27.1 7.6-4.2 11.9-1.7 15.9 2.2 7.3 2.6 19 10.2 25.7 12.1-15.1-14.1-40.1-42.8-50.9-53.2-5.6-7.3-3.5-16.8 10.8-5.4 12.7 10 43 41.6 71.6 65.3 6.7 1.5 12.3 2.6 17 3.3 6.5-6.6 10.7-1.5 14.1.8 3.7-.3 5-5.3 7-6.5-2.5-6.2 3.3 0 5.8-.2 5.4-8.7-6.5-16-30.1-40.4-28.6-14.8-62.1-34.4-74.9-42.3-13.4-9.3-7.8-13.3 3.1-9.6 10.3 4 25.8 10.8 46.9 20.7-6.4-7.5-19.5-21.6-22.5-28.7-14.6-34.2-6.7-50-16.1-60.2-2-5.8-4.8-10-10.3-16.8-32-38.5-67.8-75.7-95.1-115.7l2.5-4.6C260 320.2 295 349.7 329 382.5c13.5 14.6 17.7 27.4 33.8 39.4 19.7 12.4 37.3 45.8 47.6 69.5 4.6 10 13.7 20.1 21.9 30.5-8.3-37.9-8.1-57.3-10.6-71.1-3.8-20.7 6.5-15.5 11-1.9 6.6 20.1 17.7 63.1 26.6 92.2 3.8-2.3 6.8-2.7 7.9 6.3 2.4 1.9 4.3 3.2 5.9 4 2.8 1.3 1.3-12.1 7.5-1.1 5.1-4.1 10.7-12.8 9.4-15.1-2.9-4.6-.3-10.6 4.3-10.7C477 485.1 462 451 456.6 437c-1.5-9.1 1.3-16.5 6.9-7.8 12.2 19 35.3 64.5 35.3 61.4.1-6.7-.6-12.5-2.2-20-2.9-2.3-3.9-6.7-.8-12-.2-4.2-1.2-8.8-2.1-13.7-4.6-5.1-1.4-7.7-2.3-11.8-.9-4.4-2-8.9-3.1-13.6-1.9-7.7-2.6-16.6-4.9-24.4-8-27-14.6-53.2-24-63.7-2.8-5.8-4.4-10.2-2.1-15.7-.6-2.4-1.3-9-2.3-16.3.4-1.8-.5-11.6-1-12.8-9.2-23.1-27.7-51.1-49.4-58.5-29.8-10.2-53.7-.3-69.1 10.6h0z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.99"
        ></path>
        <path
          fill="#E5B3FF"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="2.5"
          d="M326.1 387.8c1.1-19.6 6.4-42.8-.6-65.1.4-31.5 1.7-65.4 11.2-87.7 25.5-41.6 127.1-21.3 140.8-13.1l13-35.2c-3.5-1.4-11.1-4.4-16.8-6.1 1.9-3.1 3.6-8.1 4.7-10.7.7-3.5-12.4-8.7-18.5-3.8-1 2.5-2 4.6-3.3 6.9-.3.5-.9 1.6-2.4 1.7-26.3-5.5-61.7-10.6-85.3-4.4-45.7 11.9-66.7-17.3-84.3 15.5-11.6 21.3-1.7 44.9-6.8 62.1-2.7 9-8.1 40-11.6 72.2-8.3 28.8-6.5 58.6-2.3 74.4 20.1-11.7 37.6-4.8 62.2-6.7h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#FFF"
          fillRule="evenodd"
          stroke="maroon"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M193.6 497.3c.3-8.6 11.8-30.5 25.2-36.9 14.4-6.9 30.6-7.6 47.7 3.8-16.1-2.1-30.6-4-43.1 3.3-11.1 6.4-19.5 23.2-21.7 32M268.1 399.8c-1.6-3.4-1.9-1.6-3.8-5.9-7.7 3.2-19.9 16-20.1 27.3-.3 15.2 9.1 25.3 25.7 37.5-7.4-14.5-20.1-24.2-18.5-38.3 1-8.8 11.1-16 16.7-20.6h0zM371 338.5s-4.3-5.2-4.4-6.2c10.4-1.8 19.9-3.2 28.2 1.2 12.8 6.9 20.6 15.4 25.7 35.4-10.6-12.3-15-23.6-27-29.3-6.8-3.1-22.5-1.1-22.5-1.1h0zM454.1 308.4c-5.9-.6-16.9 4.4-21.6 11-9.3 13.1-10.6 27.5-6.4 47.7 4.2-15.7 1.2-32.3 10.9-43.8 4.2-5 10.8-8.7 18-8"
          clipRule="evenodd"
        ></path>
        <path
          fill="#E5B3FF"
          fillRule="evenodd"
          d="M66.3 302.9c0 2.3-.4 4.6-1 6.7-3.6 11.5-16.3 20-31.4 20-14.6 0-27-8-31-18.9-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 11.9 32.4 26.7z"
          clipRule="evenodd"
          transform="translate(214.83 -10.23) translate(45.047 90.423)"
        ></path>
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.214"
          d="M3.1 310.6c-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 12 32.4 26.7c0 2.3-.4 4.6-1 6.7"
          transform="translate(214.83 -10.23) translate(45.047 90.423)"
        ></path>
        <g transform="translate(214.83 -10.23) matrix(.99997 0 0 1.0243 12.401 -66.161)">
          <linearGradient
            id="SVGID_00000117652971331571175140000007358157855046052741_"
            x1="96.608"
            x2="160.078"
            y1="334.525"
            y2="338.015"
            gradientTransform="matrix(1 0 0 -1.0243 -58.422 796.205)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#543E6B"></stop>
            <stop offset="1" stopColor="#B37FE6" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000117652971331571175140000007358157855046052741_)"
            fillRule="evenodd"
            d="M95.8 454.3c.1 13.7-11.9 21.4-27.6 21.5-15.5.1-31-9.6-30.9-24.4.1-15.1 13.5-23.5 30.4-23.5 15.3.1 28 9 28.1 26.4z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#1F241C"
            d="M39.4 460.1c-1.1-2.5-1.7-5.2-1.6-8.1.1-15.1 13.5-23.5 30.4-23.5 15.3 0 27.9 8.9 28.1 26.3 0 2.4-.3 4.6-1 6.6"
          ></path>
        </g>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M313.3 385s11.1 9.5 8.8 14.1c-10.8 1.2-23.7-13.1-18.5-23.9-3.2.3-11.5-.2-14.1 0 2.2 8-9.3 32.2-23.1 16.8 7.5-5.9 10.3-7.8 10.3-7.8l11.1-9.8 17.4.6 8.1 10z"
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
          d="M266.5 391.6c-.2 4.1 0 4.1 2.6 7.4 2.1 1.6 7.7 3.2 10.7 1.3 7.6-4.9 15.8-12.3 8.2-25.7.7 12.7-3.8 19.1-11.6 21.7-3.4 1.2-9.9-4.7-9.9-4.7h0zM323.7 391.5c.4 3.9-.3 4.6-1.2 7.1-4.1 1.6-9.4 3.1-12.8.5-6.6-5-12.7-10-5.7-24.1-3 9.7 3.6 16.1 10.1 19 3 1.3 9.6-2.5 9.6-2.5h0z"
          clipRule="evenodd"
        ></path>
        <g transform="rotate(-39.348 -34.429 62.508)">
          <path
            fill="#FF7F7F"
            fillRule="evenodd"
            d="M109.3 546.2c0 2.3-.4 4.6-1 6.7-3.6 11.5-16.3 20-31.4 20-14.6 0-27-8-31-18.9-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 12 32.4 26.7z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeWidth="1.214"
            d="M46.2 553.3c-.9-2.5-1.4-5.1-1.4-7.8 0-14.7 14.5-26.7 32.4-26.7s32.4 12 32.4 26.7c0 2.3-.4 4.6-1 6.7"
          ></path>
          <linearGradient
            id="SVGID_00000170957135043435103860000006293770176771439252_"
            x1="-31.913"
            x2="34.119"
            y1="78.363"
            y2="77.433"
            gradientTransform="scale(1 -1) rotate(-39.347 -869.192 -344.482)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#693333"></stop>
            <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000170957135043435103860000006293770176771439252_)"
            fillRule="evenodd"
            d="M105 551.2c.1 14-11.9 22-27.6 22-15.5.1-31-9.8-30.9-25 .1-15.5 13.5-24.1 30.4-24 15.3.1 28 9.2 28.1 27z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#1F241C"
            strokeWidth="1.012"
            d="M49.3 556.6c-1.1-2.5-1.7-5.3-1.6-8.3.1-15.5 13.5-24.1 30.4-24 15.3 0 27.9 9.2 28.1 27 0 2.4-.3 4.7-1 6.7"
          ></path>
        </g>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M343.1 365.5l10.9-15.8c4.8.1 13.7-6.4 19.2-6.4 3.2 0 4.8 3.4 5.9 5-2.7 5.9-16.7 15.3-25.4 1.6-2.4 3.2-7.1 11-9.5 13.7 19.5 15.8 9.6 32.3-.1 30.3-8.3-4.1-2.5 3.1-5.9-5.7l4.9-22.7z"
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
          d="M339 389.2c-.5.5 1.4 2.8 4.3 4.6 4.7-1 11.3-.9 12.9-5.3 3.2-8.7.6-21-12.9-24.5 9.4 3.9 12.4 15.7 8.4 22.8-2.2 3.7-12.7 2.4-12.7 2.4h0zM373.6 342.7s2.7 2.1 5.7 5.4c.6 3.5-1.2 9.5-4.9 10.9-6.5 2.6-14.2 7.3-19.4-7.9 5.4 8.6 13.4 7.7 18.3 3.8 3.2-2.6.3-12.2.3-12.2h0z"
          clipRule="evenodd"
        ></path>
        <ellipse
          cx="331.9"
          cy="54.2"
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="1.187"
          clipRule="evenodd"
          rx="8.3"
          ry="17.3"
          transform="rotate(-84.443 331.933 54.17)"
        ></ellipse>
        <ellipse
          cx="377"
          cy="64.9"
          fill="#FF7F7F"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="1.398"
          clipRule="evenodd"
          rx="7.1"
          ry="15.7"
          transform="rotate(-57.165 377.012 64.925)"
        ></ellipse>
        <ellipse
          cx="504.6"
          cy="226.8"
          fill="#FC9"
          fillRule="evenodd"
          stroke="#1F241C"
          clipRule="evenodd"
          rx="12.3"
          ry="18.1"
        ></ellipse>
        <linearGradient
          id="SVGID_00000081645563590633414020000007810769514084847009_"
          x1="634.271"
          x2="642.961"
          y1="313.043"
          y2="284.413"
          gradientTransform="matrix(1.2191 1.5846 .9327 -.1508 -659.595 -695.994)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#E69966"></stop>
          <stop offset="1" stopColor="#E69966" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000081645563590633414020000007810769514084847009_)"
          fillRule="evenodd"
          stroke="#4D4D4D"
          strokeWidth="1.164"
          d="M415.7 286.2c-10.3-7.8-11.1-14.6-9.7-25.1-9.5 4.6-25.6-.5-30.5-6.8-6.2-7.9-4.5-14.4 6-13.3 8.4.9 22.4 6.8 26.4 18.5 9.2-1.6 14.7 5.7 18.3 10.4 10.3 13.3 9.9 26-10.5 16.3h0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="none"
          stroke="#1F241C"
          d="M156.8 288.6c.7-12.1 18.8-23.7 32.6-27 14-3.3 37.1-4.7 42.1 9.5"
        ></path>
        <g transform="rotate(20.533 483.52 204.54)">
          <ellipse
            cx="484"
            cy="204"
            fill="#E5B3FF"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="0.938"
            clipRule="evenodd"
            rx="19.6"
            ry="11.7"
            transform="rotate(90 483.959 204.012)"
          ></ellipse>
          <linearGradient
            id="SVGID_00000101089245207517337220000009599099265889066153_"
            x1="693.109"
            x2="707.589"
            y1="270.252"
            y2="229.362"
            gradientTransform="matrix(.6177 -.3047 -.2314 -.8136 114.093 619.439)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#543E6B"></stop>
            <stop offset="1" stopColor="#B37FE6" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000101089245207517337220000009599099265889066153_)"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="0.939"
            d="M484 186.8c5 0 9.1 7.8 9.1 17.3 0 9.6-4.1 17.3-9.1 17.3s-9.1-7.8-9.1-17.3 4.1-17.3 9.1-17.3z"
            clipRule="evenodd"
          ></path>
        </g>
        <linearGradient
          id="SVGID_00000178165628491214121690000003356419074798453419_"
          x1="638.675"
          x2="657.755"
          y1="219.792"
          y2="178.032"
          gradientTransform="matrix(.6816 0 0 -.6062 62.888 347.557)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#883C09"></stop>
          <stop offset="1" stopColor="#E69966" stopOpacity="0"></stop>
        </linearGradient>
        <ellipse
          cx="504.6"
          cy="226.8"
          fill="url(#SVGID_00000178165628491214121690000003356419074798453419_)"
          fillRule="evenodd"
          stroke="#1F241C"
          clipRule="evenodd"
          rx="10.3"
          ry="15.4"
        ></ellipse>
        <g transform="rotate(8.596 461.9 261.63)">
          <ellipse
            cx="503.4"
            cy="267.5"
            fill="#FC9"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.29"
            clipRule="evenodd"
            rx="19.6"
            ry="11.8"
            transform="rotate(90 503.354 267.457)"
          ></ellipse>
          <linearGradient
            id="SVGID_00000012464846264935731930000004029263227653048497_"
            x1="658.061"
            x2="677.141"
            y1="211.025"
            y2="169.265"
            gradientTransform="matrix(.6007 -.09945 -.0908 -.6579 121.55 458.076)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#883C09"></stop>
            <stop offset="1" stopColor="#E69966" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000012464846264935731930000004029263227653048497_)"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.573"
            d="M503.4 250.5c5.1 0 9.2 7.6 9.2 17s-4.1 17-9.2 17-9.2-7.6-9.2-17 4.1-17 9.2-17z"
            clipRule="evenodd"
          ></path>
        </g>
        <g transform="translate(14.648 21.158)">
          <ellipse
            cx="218.4"
            cy="42.6"
            fill="#FF7F7F"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.024"
            clipRule="evenodd"
            rx="22.1"
            ry="10"
            transform="rotate(-37.279 218.353 42.573)"
          ></ellipse>
          <linearGradient
            id="SVGID_00000091014174046135326730000004785253297356172693_"
            x1="375.137"
            x2="416.817"
            y1="394.536"
            y2="394.536"
            gradientTransform="matrix(.7626 -.5082 -.3374 -.8392 49.521 574.904)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#693333"></stop>
            <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000091014174046135326730000004785253297356172693_)"
            fillRule="evenodd"
            stroke="#1F241C"
            strokeWidth="1.023"
            d="M215.3 35c8.5-5.7 16.8-6.9 18.5-2.8 1.7 4.2-3.9 12.2-12.4 17.8s-16.8 6.9-18.5 2.8 3.9-12.1 12.4-17.8z"
            clipRule="evenodd"
          ></path>
        </g>
        <linearGradient
          id="SVGID_00000153677465115973758530000000560173758120533391_"
          x1="441.747"
          x2="483.427"
          y1="407.155"
          y2="407.155"
          gradientTransform="matrix(.7251 .06377 .05083 -.6833 -24.17 302.874)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#693333"></stop>
          <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000153677465115973758530000000560173758120533391_)"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="1.416"
          d="M332.4 48c8.1.7 14.5 4 14.2 7.4-.3 3.4-7 5.6-15.2 4.9-8.1-.7-14.5-4-14.2-7.4.3-3.4 7.1-5.6 15.2-4.9z"
          clipRule="evenodd"
        ></path>
        <linearGradient
          id="SVGID_00000009580561224570355830000010815941119179971245_"
          x1="504.036"
          x2="545.716"
          y1="434.981"
          y2="434.981"
          gradientTransform="matrix(.5197 .3455 .3294 -.4198 -39.077 66.189)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#693333"></stop>
          <stop offset="1" stopColor="#C66" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000009580561224570355830000010815941119179971245_)"
          fillRule="evenodd"
          stroke="#1F241C"
          strokeWidth="1.736"
          d="M380.4 60.5c5.8 3.9 9 9 7.1 11.4-1.9 2.4-8.2 1.2-14-2.6-5.8-3.9-9-9-7.1-11.4 2-2.4 8.2-1.2 14 2.6z"
          clipRule="evenodd"
        ></path>
        <ellipse cx="189.9" cy="296.5" fill="none" rx="35.2" ry="22"></ellipse>
        <path
          fillRule="evenodd"
          d="M125.1 65.5l6.8-5.1L166.1 81c-.7 10.2-.1 17.2 22.3 17.7 4.3 9.3 9.3 16.5 12.8 28.1l-7.4 15.3-14.5-34.4c-11.9-24.1-37.9-28-54.2-42.2z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <linearGradient
          id="SVGID_00000068670895374764630950000016533190157647348648_"
          x1="267.633"
          x2="233.433"
          y1="474.401"
          y2="479.661"
          gradientTransform="matrix(1 0 0 -1 -57.562 652.469)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000068670895374764630950000016533190157647348648_)"
          fillRule="evenodd"
          d="M264.2 103c5.5 8 9.1 11.4 6.3 19.5C219 164 219.1 216.1 227 264l-17.3-11.6c-3.4-24-14.8-84.6 54.5-149.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <path
          fillRule="evenodd"
          d="M345 171.7l-4.5 1.4c-43.4-28.9-67.8 15.7-60.2 65l-6.8 25.9c-16.2-13.1-18.5-83.9 9.7-104.8 16.8-12.7 51.2-12.3 61.8 12.5zM245.9 66.4c4-3.8 6.2-9.1 4.6-15 9.5 13.1 37.7 50 43 60l-11.4 5.7c-8.4-10.5-31.5-38.9-36.2-50.7zM336.8 62.8l8.4-1.2-10 44.4-7.9-1.4c1.3-13.6 3.5-28.3 9.5-41.8zM377.3 73.7l9.8 1.4-20.2 37.4-8.8-3.3c5.4-13.5 10.8-22.9 19.2-35.5zM367.3 112.7c15.9 14.2 23.6 34 27 51.9l10.8-2.4c-2.6-28.9-26.8-42.8-37.8-49.5zM204.1 608.7c5-4.2 10.1-7.9 14.8-14.2l1.6-53.3-16.5-13.6.1 81.1zM339.9 624.3l14.5-6.3 1-12.3-13.4-2.2-2.1 20.8zM161.4 197.6l-3.2 14-39.8 5.4c-8.2-2.9-7.9-6.2-10.1-10.7l53.1-8.7zM162.7 239.6l-.6 10-50.6-2.2c-7.9-2.8-6.5-7-8.3-10.7l59.5 2.9zM160.2 273.1c1 6.1-14 12.2-23.9 18.4l-20.1 8.2c-8.4.4-8.7-4-11.8-6.7l55.8-19.9zM471.4 206.6l2.9 11.5c-15.6-3.8-94.4-20.3-129.5 7.1-12.4 9.7-13.5 26.3-16.5 43.9-5.3 31.1-1.5 39-2.7 53.1 4.5 8.6 4.2 52 1.5 52-6.3-9.3-11.6-11.3-18.5-16.2 2.4-10.1-1.4-21.5-1.4-36.2.5-30.9 4.2-70.6 20.9-95.2 9.2-13.6 26.4-21.3 42.3-25.2 32.8-8.2 77.6-2.6 101 5.2z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <path
          fillRule="evenodd"
          d="M492.7 231.7c.8 3.8 1.6 8.8 5.6 11.8l-45.8.4c-4.7-5.2-4.2-5.6-8.7-10.1l48.9-2.1zM489.2 279.5c.8 3.8 2 9.1 6 12.1l-19.2-3.2c-1.6-3.2-2.6-7.2-3.8-10.4l17 1.5zM368.7 336.8l-14.9 1.1c0-5.2-4.4-9-9.7-10.7l-18.7-19.4-.1-17.7L354 320c7.9 3.4 14.3 8.8 14.7 16.8z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <radialGradient
          id="SVGID_00000076597846879935646620000009428207570795012490_"
          cx="5.197"
          cy="330.993"
          r="57.213"
          gradientTransform="matrix(.5185 -.4562 -3.0428 -3.4587 1227.178 1608.345)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_00000076597846879935646620000009428207570795012490_)"
          fillRule="evenodd"
          d="M201.9 500.5c4.8-14.1 9.8-29.3 21.9-37.6 14.9 22.7 32.3 53.6 74.5 89.1-18.1-5.5-72.7-28.7-96.4-51.5z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <radialGradient
          id="SVGID_00000023274585508405072890000005731146913195926682_"
          cx="362.306"
          cy="389.609"
          r="57.213"
          gradientTransform="matrix(.1937 .5678 5.0239 -1.7136 -1651.326 718.591)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_00000023274585508405072890000005731146913195926682_)"
          fillRule="evenodd"
          d="M335.9 239.6c32.6-23 67.9-17.5 87.8 2.5-5.2 0-56.6 1.1-97 34.3 4.6-17.6 5.3-21 9.2-36.8z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <radialGradient
          id="SVGID_00000097497394658996830880000016129913061511056001_"
          cx="6.115"
          cy="323.803"
          r="57.213"
          gradientTransform="matrix(.5645 -.3412 -2.3831 -3.9423 1146.783 1687.835)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#010101" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#020500"></stop>
        </radialGradient>
        <path
          fill="url(#SVGID_00000097497394658996830880000016129913061511056001_)"
          fillRule="evenodd"
          d="M338.8 393.9c14.2 1 22.5-3.2 30.4-8.1 4.7 24.9 4.5 40.8 16.2 59.5-23.9-21.2-30.7-31.1-46.6-51.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.548"
        ></path>
        <linearGradient
          id="SVGID_00000016779496480370119940000016237665611646671522_"
          x1="265.796"
          x2="231.596"
          y1="462.46"
          y2="467.72"
          gradientTransform="matrix(1 0 0 -1 -57.562 652.469)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_00000016779496480370119940000016237665611646671522_)"
          fillRule="evenodd"
          d="M297.7 169.4l44.5 5c-37 6-52.9 29.8-63.1 62.6-2.2-27 .2-49.7 18.6-67.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <path
          fillRule="evenodd"
          d="M191.1 68c2.8 2.1 3.1 2.7 7.3 7l-11.1 23.6c-3.7-.2-7.9-.6-8.6-1.2L191.1 68zM473.2 165.2c2.8 2.1 2.7 3.7 5.8 5.4l-6.2 10.6c-2.9-1.8-4.3-.5-6.3-1.6l6.7-14.4z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.263"
        ></path>
        <g>
          <path
            fill="#99F"
            fillRule="evenodd"
            d="M134.4 474.9c3.6 13 3.4 31.1-9.1 44-12.5 12.9-31.5 16.7-42.6 8.3-11.1-8.3-13.6-34.1-6.5-48.7 10.4-14.7 47.1-11.9 58.2-3.6z"
            clipRule="evenodd"
            transform="matrix(1.16 0 0 1.0395 66.518 -85.119)"
          ></path>
          <g transform="matrix(1.16 0 0 1.0395 66.518 -85.119) translate(75.099 77.656)">
            <linearGradient
              id="SVGID_00000015315368179627863850000002100122250089490590_"
              x1="31.948"
              x2="91.048"
              y1="273.248"
              y2="211.748"
              gradientTransform="matrix(.8322 -.8631 -.9883 -.7434 196.157 652.221)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0"></stop>
              <stop offset="1" stopOpacity="0"></stop>
            </linearGradient>
            <path
              fill="url(#SVGID_00000015315368179627863850000002100122250089490590_)"
              fillRule="evenodd"
              d="M59 397.5c5 9 4 29.8-8.4 42.7-12.5 13-31.6 16.7-42.6 8.4-11.1-8.3-13.5-32.6-6.7-48.7 12.3-14.8 46.6-10.7 57.7-2.4z"
              clipRule="evenodd"
            ></path>
            <path
              fill="none"
              stroke="#4D4D4D"
              strokeWidth="1.5"
              d="M59 396.3c5.1 16.9 4 31.5-8.5 44.4C38.1 453.6 19 457.4 8 449c-11.1-8.3-13.2-26.2-7.3-47.7"
            ></path>
          </g>
        </g>
        <g transform="translate(270.28 265.68)">
          <path
            fill="#99F"
            fillRule="evenodd"
            d="M-46.8 1.3c14.4 9.3 12.7 25.5-3.5 39.9-16.3 14.4-40.5 17.6-54.9 8.4-14.4-9.3-13.4-24.6 2.8-39C-86.2-3.9-61.3-8-46.8 1.3z"
            clipRule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            d="M-108.8 46c-7.1-9.1-4-22.8 8.5-33.6C-85.2-.5-62.1-4.2-48.8 4.1c8.9 5.5 11.4 15.1 7.7 24.7"
          ></path>
          <linearGradient
            id="SVGID_00000054263116063150295970000004359786130825154964_"
            x1="-86.629"
            x2="-27.529"
            y1="9.554"
            y2="-51.946"
            gradientTransform="matrix(.8667 -.7254 -1.1486 -.6972 -84.093 -28.547)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0"></stop>
            <stop offset="1" stopOpacity="0"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000054263116063150295970000004359786130825154964_)"
            fillRule="evenodd"
            d="M-49.4 4.8c13.4 8.1 12 24.9-3.1 37.5-15.1 12.6-38.1 16.2-51.5 8.1-13.4-8.1-12-24.9 3.1-37.5C-85.8.4-62.8-3.3-49.4 4.8z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="4.2"
        d="M264.5 483.6l48 23.3-7.8-3-39.8-29.9"
        transform="translate(-108.81 -11.719) translate(70.432 -15.839)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        d="M329.4 455.2c-6.1-2-11.9-6-18.1-8M336.5 460.2c-6.1-3.9-24.1-18.1-30.3-20.1M335.5 469.4c-6.1-2-13.7-8.4-17.7-11.6M336 467.2c-6.1-3.9-14.7-10.7-21.1-15.3M323.7 446.1c-5.3-3.6-14.8-7.8-20.2-11.5M336 457.3c-4.8-5.3-28-24.6-33.3-28.3"
        transform="translate(-108.81 -11.719)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="4.2"
        d="M264.5 483.6c12.7 6 25.5 11.8 38.4 17.3.5.2 1.1.5 1.6.7L264.9 474"
        transform="translate(-108.81 -11.719) scale(1 -1) rotate(-76.087 -318.322 -40.087)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        d="M316.6 477.5c-3.4-5.5-8.7-10.1-12.1-15.6M323.2 483.2c-5.3-5-23.4-19.1-26.7-24.5M331.9 480c-3.4-5.5-11.5-11.2-15.5-14.4M329.9 481c-5.3-5-14-11.7-19.9-16.8M306.4 474.2c-4.8-4.3-11.2-12.5-16-16.8M320.3 483.5c-6.3-3.4-30.6-21.3-35.4-25.6"
        transform="translate(-108.81 -11.719)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="4.2"
        d="M264.5 483.6l42 22.7 1 .4-42.6-32.7"
        transform="translate(-108.81 -11.719) matrix(1.1892 0 0 1.1358 -88.127 -38.589) rotate(34.135 545.06 787.81)"
      ></path>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        d="M486 365.1c-4-5.1-6.5-11.7-10.5-16.8M489 373.2c-2.9-6.7-9.8-28.5-13.8-33.6M483 380.2c-4-5.1-6.6-14.6-8.2-19.5M484.7 378.7c-2.9-6.7-6.2-17.2-8.9-24.5M486.4 354.3c-2.4-6-7.9-14.8-10.3-20.8M490.3 370.5c-1-7.1-9.4-36.1-11.7-42.1"
        transform="translate(-108.81 -11.719) matrix(1.1892 0 0 1.1358 -88.127 -38.589)"
      ></path>
      <g>
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="4.2"
          d="M264.5 483.6l43.4 21.2-6-3.7-37-27.1"
          transform="translate(-108.81 -11.719) matrix(1 0 0 1.2543 0 -91.318) scale(-1 1) rotate(69.777 -34.1 -93.884)"
        ></path>
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="1.5"
          d="M462.9 376.4c.3-6.4-1.5-13.3-1.3-19.7M465.2 384.8c-1.6-7.1-8.6-28.9-8.4-35.3M474.1 387c.3-6.4-3.2-15.7-4.7-20.6M471.9 386.7c-1.6-7.1-5-17.5-7-25.1M456.4 367.9c-1.6-6.3-2.2-16.6-3.8-22.9M462.6 383.4c-3.3-6.3-13.4-34.8-15-41.1"
          transform="translate(-108.81 -11.719) matrix(1 0 0 1.2543 0 -91.318)"
        ></path>
      </g>
      <g opacity="0.99" transform="translate(-108.81 -11.719)">
        <path
          fill="#CCC"
          d="M410.1 219.1c16.4-2.2 40.7-.9 56.4 10 22.1 15.3 28.7 19.3 43.8 54.9 1.3 3 .8 9.8 2.3 13.2-2.9 0-13.2 4.3-8.2 15.6-.3 2.8 1.7 6 3 6.7 7.5 4.1 13.8 3.6 14.1 2.6 1.7-.3 12.6 4.3 13.5 7 36 42.3 38.5 63.3 47.5 106.6 9.5 46.1 10.6 103.5-14.2 140.6-35.5 30.7-108 38-179.5 13.5-52.8-18.1-96.2-24.2-135.2-64.7-1.4-1.5-2.2-6.3-3.6-7.8-.8-.9 2.7-3.5 1.8-4.4 3.8-2.5 5.8-8.7-.7-14.3-11.9-10.3-20.3.7-20.3.7-2.7-.2-8.9-2.1-11-4-21.3-19-38.2-61.8-39.9-100.5-2.3-52.7-.8-80.7 27.5-109.5l-1.4-6c-32.2 27-37.7 77.1-33.6 117.6 4 39.7 22.4 82.5 50.8 110.2 3.2 7.9 13 18.5 20.2 19.6 43.2 49 89.2 52.3 147.3 71 82.4 26.5 170 9.6 186.8-15.5 28.9-51.4 20.7-100.6 13-150.2-6.1-38.8-23.5-78.4-54.3-114.2-2.3-9.4-5-16.7-12.7-24.8-15.8-48.4-29.2-53.5-54.1-68.9-13.3-8.2-23.2-12.6-45.9-9.4"
        ></path>
        <path
          fill="none"
          stroke="#4D4D4D"
          strokeWidth="1.5"
          d="M403.6 221.9c17.9-4.7 48.3-4.9 64.5 7.1 11.7 8.7 17.5 14.5 24.9 24.1 6.6 8.4 9.6 12.9 16.2 27.6 1.2 2.6 3.7 12.5 3.1 15.9 6-2.2 13.2-.7 12 6.5 4.3 2 8 15-4.9 19.2 1.6-.2 14.4 4.7 15.5 6.7 37.8 43.6 39.1 62.5 46.5 105.6 7.9 46.4 10.6 103.5-14.2 140.6-35.5 30.7-102.5 36.5-174.8 14.9-52.2-15.5-98.3-22.6-137.9-63.5-1.5-1.5-3.8-6.8-4.6-9.7-6.1 7.6-14.7 2.7-16.2-2.2-8.8-3.7-4.1-13-3.3-15.5-3.4-.2-9.8-3.7-12.4-6.1-25.4-24-34.4-63.6-38.3-99.4-4-37.3-1.2-79.9 26.6-109.5"
        ></path>
        <path
          fill="none"
          stroke="#666"
          strokeWidth="6"
          d="M206 279.1c-32.2 27-37.5 78.3-33.6 119.5 3.7 39.6 20.5 81.7 48.5 109.7 1.3 8.1 13.6 19.1 22 20 34.2 38 88.9 54.3 146.8 71.2 83.1 24.3 170.9 6.8 187.7-18.3 28.9-51.4 22.9-100.1 13.9-149.3-8.2-44.3-14.4-67.7-54-112.1-.1-12.5-6.2-27-15.1-31.7-18.5-49.8-27.9-53.8-52.9-67.9-13.7-7.8-24.4-9.1-47-5.9"
        ></path>
        <path
          fill="#FF0"
          fillRule="evenodd"
          d="M523.7 303.5c5.7 2.2 7.4 14.4-3.8 18.1-3.1 0-10.1-8.7-10.1-13.7s.1-7.6 2.3-11c3-.7 13.1-2.5 11.6 6.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.878"
        ></path>
        <g
          fillRule="evenodd"
          stroke="#4D4D4D"
          clipRule="evenodd"
          transform="translate(4.11 -1.15)"
        >
          <ellipse
            cx="512"
            cy="303.7"
            fill="#7F7FCC"
            strokeWidth="5.454"
            rx="4.4"
            ry="5"
            transform="rotate(149.238 512.031 303.719)"
          ></ellipse>
          <ellipse
            cx="515.7"
            cy="313.3"
            fill="#E69966"
            strokeWidth="0.921"
            rx="4.5"
            ry="7.3"
            transform="matrix(-.9989 .04615 -.04615 -.9989 1045.21 602.446)"
          ></ellipse>
        </g>
        <path
          fill="#FF0"
          fillRule="evenodd"
          d="M234.4 514c1.2 4.8 9.8 10.2 15.8 1.7 1.2-2.8-2.5-9.6-6.4-12.7-4.1-3.2-7.9-4.4-12.1-4.2-1.9 2.4-6.3 12.9 2.7 15.2z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.878"
        ></path>
        <g
          fillRule="evenodd"
          stroke="#4D4D4D"
          clipRule="evenodd"
          transform="rotate(-23.55 857.54 1069.2)"
        >
          <ellipse
            cx="512"
            cy="303.7"
            fill="#7F7FCC"
            strokeWidth="5.454"
            rx="4.8"
            ry="4.6"
            transform="rotate(141.748 512.04 303.712)"
          ></ellipse>
          <ellipse
            cx="515.7"
            cy="313.3"
            fill="#E69966"
            strokeWidth="0.921"
            rx="4.9"
            ry="6.7"
            transform="rotate(169.866 515.647 313.29)"
          ></ellipse>
        </g>
        <path
          fill="none"
          stroke="#CCC"
          strokeWidth="4.2"
          d="M317.7 403.1c-10.4-12.3-10-26.6-1.6-36.3 5.6-6.5 16.9-11.2 26.5-11.8 19.9.1 27.7 7.9 33.4 15.9 1.1-12.4 4.6-18.7 13.5-27.6 9.5-5.8 20.7-10.7 31.2-7.3"
        ></path>
        <path
          fill="#CCC"
          fillRule="evenodd"
          d="M375.1 373.1l2.6-.7.3 7c2.2 3.6 4.9 8.2 8.1 11 .7.7 1.3 1.6 2.1 2.1 3 2.1 4.6 4.2 5 3.8l-5.1 5.9c-4.4 2.5-10.2-.6-14.6-2.1 2.4-3.7 1.2-5.7 2.8-8.5 2-3.6 1.9-7.4 1.9-11.9l-3.1-6.6z"
          clipRule="evenodd"
          enableBackground="new"
          opacity="0.878"
        ></path>
        <path
          fillOpacity="0"
          d="M305.6 389.8H322.20000000000005V412.1H305.6z"
          transform="rotate(169.866 313.836 400.966)"
        ></path>
      </g>
      <path
        style={PATH_STYLE}
        ref={rightAtriumRef}
        fill="none"
        stroke="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M175.5 275.6c-.3.7-.6 1.7-1.1 2.9-1.2 2.8-4.1 9.2-9.5 15.4-3.2 3.6-10.7 9.4-16.1 11.5s-13.3 4.9-22.2 5.1-13.8-1.1-22-6.9-7.7-12.9-7.7-12.9c-1.9 2.5-4.3 5.9-6.8 10.1-1.2 1.9-4.4 7.3-6.6 12.8-2.9 7.1-3.4 12.8-4.5 24.1-.6 6.6-1.1 15-.7 24.9.3 7.4.9 12.8 1.7 19.4 1.4 12.3 3.3 21.7 4.8 29.6 1 5.2 2.5 12.4 4.5 21 0 0 8.9 21.3 12.6 27.6 3.7 6.3 17.7 19.9 17.7 19.9l16 2.3 2-5.2 4.1-7.4s1.1-4.2 8.5-12 14.2-9.8 20.1-11.3c5.9-1.5 13.1-2.8 23.7 0s14.6 7.9 14.6 7.9l3.3-4.6c-2.3-1.5-5.2-3.6-8.3-6.3-4.9-4.4-8-8.3-8.6-9.1-3.4-4.4-6.2-8-7.8-13.6-.7-2.3-2.9-9.9 0-17.4 1.1-2.9 2.9-5.5 3.5-6.4 1.1-1.7 2.6-3.4 5.1-5.9 5.5-5.5 6.4-5 6.4-5l-1.1-2.6c-1.1-2.6-1.5-6.3-2.1-10.8-.5-4.5 2.2-11.6 2.2-11.6V345c.4-8.2 1.7-14.8 2.6-19.7.7-3.9 1.5-7.1 2.1-9.5-6-7.3-12-14.6-18-22l-12.4-18.2z"
      ></path>
      <path
        style={PATH_STYLE}
        ref={rightVentricleRef}
        fill="none"
        stroke="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M211.5,390c0,0,8.5,7.6,15.2,8.9c6.6,1.3,12,2.3,20.1,0.7
        c8.1-1.7,12.3-5.6,13.8-7.6c1.6-2,4.2-3.7,4.2-3.7l5,2.4c0,0,2.7,1.4,4.9,6.3s3.3,7.5,3.3,7.5s2.1,1.7,3.4,5.2s2.5,12.6,3.1,20.6
        s5.1,21.6,5.1,21.6l5.6,15.2l18.4,22.5l-31.8-13.9l-13.3-5.1l-6-1c0,0-7.4,0.8-3,6c4.5,5.2,16.3,12,24.1,17
        c7.8,5,32.6,18.1,38.7,21.7c6.1,3.6,19.4,10.5,19.4,10.5s11,11.8,16.9,16.6s11.2,11.4,13.1,14.8c1.9,3.4,0,7.3,0,7.3l-5.2-2.7
        c0,0-1.5-0.6-1.5,1.5c0,2.2,0,2.2,0,2.2s-3,5-4.7,5.5s-2.4-2.4-6.3-3.7c-3.8-1.3-8.8,3.2-8.8,3.2l-16.3-3.1L267,509.1
        c0,0-11.5-10.8-15.2-12.1c-3.7-1.3-5-1.7-8.6-1.1c-3.6,0.6-0.8,7.3,1.4,10.7s29.2,31.5,32.3,35s15.8,16,15.8,16l-21.1-10.2
        c0,0-3.4-4.2-7-4.6s-9,1.9-9,1.9l-27.4-9.8l-34.6-16.7l-22.8-11.2L151,495.3l-5-3.8l-1.2-2.3l2.9-8.3c0,0,4.8-9.4,6.9-12.8
        c2.1-3.4,10.8-10.2,10.8-10.2s4.2-3,10.6-4.1s17.1-2.5,23.4-0.8s6.6,0.8,6.6,0.8l3.8,0.2l3.8-5.5l-4.7-8.3l-7.8-10.7l-4.5-6.6
        l-2-7.1V411c0,0,0.7-6.6,4.8-10.5C203.5,396.6,211.5,390,211.5,390z"
      ></path>
      <path
        style={PATH_STYLE}
        ref={pulmonaryArteryRef}
        fill="none"
        stroke="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M217.8,251.3c0,0,9.3-6.6,26.4-5.6s26.4,9.9,26.4,9.9l-1.4,18.6
        l-1.2,37.8c0,0,2,8.9,2.6,13.5c0.6,4.5,0.9,14,0.9,14l0,9c0,0-1.5,7-1.7,11.1c-0.2,4,0.3,9.2,0.3,9.2s-1.9,16.7-5.3,19.5
        s-8.3,8.3-12.3,9.5c-4,1.1-11,3.7-18.4,2.4c-7.4-1.3-12.7-2.5-17.6-6.4c-4.9-3.9-4.9-3.9-4.9-3.9c-2.1-3.2-4.2-6.4-6.4-9.6
        c-0.6-2.2-1.1-4.9-1.4-7.8c-0.5-5-0.2-9.3,0.3-12.7c0-1.2,0-2.4,0-3.6c-0.7-4-1.3-9.2-1-15.2c0.2-3.8,0.7-6.8,3.2-19.1
        c2.7-13.4,2.5-11.6,3.2-15.3c0.8-4.4,1.3-7.7,3.3-25.3c0.7-5.7,1.3-11.5,2-17.2L217.8,251.3z"
      ></path>
      <path
        style={PATH_STYLE}
        ref={lungBedRef}
        fill="none"
        stroke="none"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M314.4,159c0,0-10.2,10.7-7.2,25c3.1,14.3,9,18.2,9,18.2
        c5.3-1,11.1-1.9,17.3-2.5c12.3-1.1,23.3-0.8,32.7,0.2c11,0.5,20.1,2.1,26.9,3.6c12.9,2.9,19.3,4.3,22.6,6.8c0.9,0.7,3.4,2.5,6.6,2.6
        c1.8,0,3.9-0.8,7-3.3c6.9-5.7,10.1-16.8,10.1-16.8s1-4.5,0.5-8.6c-0.5-4.1-3.7-7.7-3.7-7.7l-2-1.7c-5.8-1.8-11.5-3.6-17.3-5.4
        c1.3-3.4,2.6-6.8,3.9-10.2c-3.1-3.7-6.1-5-8.4-5.4c-4.6-0.9-10.9,0.8-10.9,0.8l0,0l-2.8,5.8L397,163c-6.5-0.8-13-1.7-19.4-2.5
        c-6.9-0.9-13.9-1.8-20.8-2.7c-6.1-0.3-12.3-0.6-18.4-1c-4.8,0.2-9.6,0.4-14.5,0.7C320.7,158,317.6,158.5,314.4,159z"
      ></path>

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
        onClick={onClick}
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
        onClick={onClick}
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
        onClick={onClick}
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
        onClick={onClick}
      />
    </svg>
  )
}
