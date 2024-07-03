export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-12">
            <div>Hello world !</div>
            <div>{process.env.NODE_ENV}</div>
        </main>
    );
}
