import Header from "../../Shared/header/Header";
import LeftSideNav from "../../Shared/leftSideNav/LeftSideNav";
import Navbar from "../../Shared/navbar/Navbar";
import RightSideNav from "../../Shared/rightsideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <h1 className="font-poppins font-extrabold">home</h1>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>



            <div className="lg:flex text-center ">
                <div className="lg:w-1/5 bg-red-400 px-5" >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" lg:w-2/4 mx-auto bg-red-500 " >
                    <h1>main all contents</h1>
                </div>
                <div className="lg:w-1/4 bg-red-600" >
                    <RightSideNav></RightSideNav>
                </div>


            </div>
        </div>
    );
};

export default Home;