import Navigation from '../components/Navigation';

const Error404 = (props) => {
    return (
        <>
            <Navigation />
            <main>
                <h1>{props.message} :(</h1>
            </main>
        </>
    );
}

export default Error404;