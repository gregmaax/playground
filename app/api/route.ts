import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json({
		hello: 'world',
	});
}

export async function POST(request: NextRequest) {
	const data = await request.json();
	return NextResponse.json({
		data,
	});
}
