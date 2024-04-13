import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className=" bg-slate-300 py-4 px-5 my-6 flex align-middle">
            <button className="btn text-2xl  bg-red-500 px-5 py-2 font-semibold rounded-lg">
                Latest
            </button>

            <h1 className="my-auto font-extrabold" >
                <Marquee speed={50}>
                    <span className="text-xl mr-3"> Match Highlights:</span>

                    <Link to='/login'> Germany vs Spain — as it happened </Link>!
                    <Link to='/login'> Match Highlights: Germany vs Spain as...</Link>
                </Marquee>
            </h1>
        </div>
    );
};

export default BreakingNews;