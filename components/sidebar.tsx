'use client';

import UserItem from './useritem';

export default function Sidebar() {
	return (
		<div className="flex flex-col gap-2 w-[300px] min-w-[300px] border-r min-h-screen p-4">
			<UserItem />
			<div className="grow">Menu</div>
			<div>Settings</div>
		</div>
	);
}
