const TextReveal = () => {
    const text = "À travers le développement Web, je m'efforce de transformer chaque projet en une histoire captivante, alliant créativité et innovation pour inspirer et engager.";

    return (
        <h1 className="overflow-hidden text-2xl md:text-4xl font-bold leading-snug text-white text-center px-8 md:px-16">
            {text.split("").map((char, index) => (
                <span
                    className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                    key={`${char}-${index}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </h1>
    );
};

export default TextReveal;
