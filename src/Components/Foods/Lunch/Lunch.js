import React, { useEffect, useState } from 'react';

const Lunch = () => {
    const [lunchs, setLunch] = useState([]);
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data));
    }, [])
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap m-4">
                        {
                            lunchs.map(lunch => <FetchLunch lunch={lunch}></FetchLunch>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};


const FetchLunch = ({ lunch }) => {
    console.log(lunch)
    const { name, rating, price, text, img } = lunch;
    return (


        <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={img} alt="blog" />
                <div className="p-6">
                    <h2 className="text-3xl title-font font-medium mb-1">{name}</h2>

                    <p className="leading-relaxed mb-3">{text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h2 className=" text-3xl title-font font-medium text-gray-400 mb-1">{price}</h2>
                </div>
            </div>
        </div>

    );
}


export default Lunch;