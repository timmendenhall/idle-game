export const LoadingIndicator = () => {
    return (
        <div className="flex h-full w-full flex-row items-center justify-center">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent"
                role="status"
            >
                <span className="absolute -m-px h-px w-px overflow-hidden border-0 p-0 whitespace-nowrap [clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </div>
    );
};
