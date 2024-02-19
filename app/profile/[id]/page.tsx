'use client';
import { useParams, useRouter } from 'next/navigation';

export default function ProfileId() {
	const params = useParams();
	const router = useRouter();
	console.log('PARAMS - id : ', params.id);
	return (
		<div>
			<h1>My profile id page - id : {params.id}</h1>
			<button onClick={() => router.push('/profile')}>
				Back to profile page
			</button>
		</div>
	);
}
