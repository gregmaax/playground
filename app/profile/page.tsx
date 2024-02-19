'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Profile() {
	const router = useRouter();
	return (
		<div>
			<h1>My list of profiles :</h1>
			<nav className="flex flex-col gap-1">
				<Link href={'/profile/1'}>Profile 1</Link>
				<Link href={'/profile/2'}>Profile 2</Link>
				<Link href={'/profile/3'}>Profile 3</Link>
			</nav>
		</div>
	);
}
