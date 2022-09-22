import { createContext, useContext } from 'react'

export type CathetherizeContextValue = {
	pageId: number
	setPageId: (value: number) => void
}

export const CathetherizeContext = createContext<CathetherizeContextValue>({
	pageId: 1,
	setPageId: (value: number) => {}
})

export const useCaththerizeContext = () => useContext(CathetherizeContext)
