import Header from "@components/Header";
import RandomImageSection from "./RandomImageSection";

const GenericImagePageComponent = (props) => {

    return (
        <div id="main">
            <Header />
            <section>
                <header className="content">
                    <h1>{props.title}</h1>
                    <RandomImageSection pageBaseUrl={props.pageBaseUrl} page={props.page} />
                </header>
            </section>
        </div>
    );
}

export default GenericImagePageComponent;
