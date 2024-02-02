const ImageLayers = () => {
    return (
        <div className="flex">
            <div className="flex-1 h-3/4">
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/1_left.webp'
                    alt="Bottom Left Layer"
                    className="absolute inset-0  w-full "
                />
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/2_left.webp'
                    alt="Top Left Layer"
                    className="absolute inset-0  w-full pt-20"
                />
            </div>

            <div className="flex-1 h-3/4">
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/3_right.webp'
                    alt="Right Layer"
                    className="absolute inset-0  w-full "
                />
            </div>
            <div className="flex-1">
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/4_bottom.webp'
                    alt="Right Layer"
                    className="absolute inset-x-0 bottom-0  w-full h-[430px] z-10"
                />
            </div>
        </div>
    );
};

export default ImageLayers;
