import {
    Header,
    Hero,
    Services,
    WhyAryst,
    AboutContact,
    Footer,
    WhatsAppButton
} from "./components";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <WhyAryst />
                <AboutContact />
            </main>
            <WhatsAppButton />
            <Footer />
        </>
    );
}

export default App;