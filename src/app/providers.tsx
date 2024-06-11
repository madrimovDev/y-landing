// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import type { ReactNode } from 'react'
import { AppProgressBar } from 'next-nprogress-bar'

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<NextUIProvider>
			{children}
			<div className='z-[9999]'>
				<AppProgressBar
					height='4px'
					color={'#490380'}
					options={{ showSpinner: true }}
					shallowRouting
				/>
			</div>
		</NextUIProvider>
	)
}
