import "./NotFound.css";

export function NotFound() {
    return (
        <>
            <h1 className="not-found text-6xl align-text-center justify-center place-content-center mt-30">Ooopps! An Error Ocurred!</h1>
            <h2 className="error-code text-4xl align-text-center justify-center place-content-center">404 - Page Not Found</h2>
        </>
    );
}