import Hero from '@/components/hero/hero'
import Partners from '@/components/partners/partners'
import Promo from '@/components/promo/promo'
import OurCourses from '@/components/our-courses/our-courses'
import Testimonials from '@/components/testimonials/testimonials'

export default function Home() {
	return (
		<>
			<Hero />
			<Partners />
			<Promo />
			<OurCourses />
			<Testimonials />
		</>
	)
}
