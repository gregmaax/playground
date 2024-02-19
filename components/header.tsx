'use client';

import Logo from './logo';
import Menu from './menu';

export default function Header({ name, age }: { name: string; age: number }) {
	return (
		<div className="flex flex-row gap-1">
			{name} - {age}
			<Logo />
			<Menu />
		</div>
	);
}
