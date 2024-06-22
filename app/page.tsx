import BackToTopButton from "@/components/back-to-top-button";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <section id="section1" tabIndex={-1} style={{height: '100vh', backgroundColor: 'lightblue'}}>
                <h2>Section 1</h2>
                <p>This is Section 1</p>
            </section>
            <section id="section2" tabIndex={-1} style={{height: '100vh', backgroundColor: 'lightgreen'}}>
                <h2>Section 2</h2>
                <p>This is Section 2</p>
            </section>
            <section id="section3" tabIndex={-1} style={{height: '100vh', backgroundColor: 'lightcoral'}}>
                <h2>Section 3</h2>
                <p>This is Section 3</p>
            </section>
            <BackToTopButton/>
        </main>
    );
}
