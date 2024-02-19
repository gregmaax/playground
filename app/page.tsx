import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Header name="Greg" age={26} />
			Home page of the application
		</div>
	);
}
