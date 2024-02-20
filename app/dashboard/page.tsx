'use client';

import { Button } from '@/components/ui/button';

export default function Dashboard() {
	return (
		<div className="text-center mt-10">
			<Button variant={'outline'} onClick={() => console.log('clicked !!')}>
				Click
			</Button>
		</div>
	);
}
