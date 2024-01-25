import topLeft from '../assets/newHomePageImages/1_left.png';
import topLeftDown from '../assets/newHomePageImages/2_left.png';
import topRight from '../assets/newHomePageImages/3_right.png';
import bottomFill from '../assets/newHomePageImages/4_bottom.png';
const ImageLayers = () => {
    return (
        <div className="flex">
            <div className="flex-1 h-3/4">
                <img
                    src={topLeft}
                    alt="Bottom Left Layer"
                    className="absolute inset-0  w-full "
                />
                <img
                    src={topLeftDown}
                    alt="Top Left Layer"
                    className="absolute inset-0  w-full pt-20"
                />
            </div>

            <div className="flex-1 h-3/4">
                <img
                    src={topRight}
                    alt="Right Layer"
                    className="absolute inset-0  w-full "
                />
            </div>
            <div className="flex-1">
                <img
                    src={bottomFill}
                    alt="Right Layer"
                    className="absolute inset-x-0 bottom-0  w-full h-[430px] z-10"
                />
            </div>
        </div>
    );
};

export default ImageLayers;
