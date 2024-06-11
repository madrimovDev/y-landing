import { useState } from 'react'

interface DisclosureState {
	isOpen: boolean
	open: () => void
	close: () => void
	toggle: () => void
}

const useDisclosure = (initialState = false): DisclosureState => {
	const [isOpen, setIsOpen] = useState(initialState)

	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)
	const toggle = () => setIsOpen(prevState => !prevState)
	return {
		isOpen,
		open,
		close,
		toggle
	}
}

export default useDisclosure
