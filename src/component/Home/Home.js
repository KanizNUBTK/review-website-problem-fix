import './Home.css';
import banner from '../../images/banner1.jpg';
import ShowSchool from '../ShowSchool/ShowSchool';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            <div className="m-10">
                <h1 className="text-4xl text-center font-bold ">Our Services</h1>
            </div>
             <div className="m-10">
                <div className="grid grid-cols-4 gap-4">
                    <ShowSchool></ShowSchool>
                </div>
            </div>
         </div>
    );
};

export default Home;