const AfterMovie = () => {
    return (
        <div className="md:h-[30vh] md:mt-20 h-[24vh] snap-start w-full">
            <iframe
                className=" h-full w-full"
                src="https://www.youtube.com/embed/E64TKUqgi_4?si=tHHQHdYJ_8XpZ2sr"
                title="YouTube video player"
                frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default AfterMovie;
