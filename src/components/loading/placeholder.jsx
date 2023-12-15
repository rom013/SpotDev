export function PlaceholderHeaderPost() {
    return (
        <>
            <div
                className="flex gap-8 items-center animate-pulse"
            >
                <div
                    className="w-16 h-16 overflow-hidden rounded-full bg-zinc-600"
                />
                <div
                    className="h-[1.5rem] w-80 bg- bg-zinc-600"
                />
            </div>

            <div
                className="bg-zinc-700 rounded-full h-[2rem] w-40 animate-pulse"
            />
        </>
    )
}

export function PlaceholderBox() {
    return (
        <div
            className="w-full h-44 bg-zinc-700 rounded-lg animate-pulse opacity-50"
        />
    )
}