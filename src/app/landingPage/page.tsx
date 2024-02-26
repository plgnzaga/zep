import Image from "next/image";
import mobileApp from "../dist/image/mobileapp.png"
import airbnb from "../dist/image/airbnb.png";
import spotify from "../dist/image/spotify.png";
import slack from "../dist/image/slack.png";
import binance from "../dist/image/binance.png"
import netflix from "../dist/image/netflix.png";
import cebupac from "../dist/image/cebupac.png";
import booking from "../dist/image/booking.png";
import citi from "../dist/image/citi.png";



const LandingPage = () => {

    const companies = [
        {
            id:1,
            name:'Cebu Pacific',
            image:cebupac
        },
        {
            id:2,
            name:'Binance',
            image:binance
        },
        {
            id:3,
            name:'Spotify',
            image:spotify,
        },
        {
            id:4,
            name:'Netflix',
            image:netflix
        },
        {
            id:5,
            name:'Booking',
            image:booking
        },
        {
            id:6,
            name:'Citi',
            image:citi
        },
        {
            id:7,
            name:'Slack',
            image:slack
        },
        {
            id:8,
            name:'Airbnb',
            image:airbnb
        }
    ]
    return (
        <>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-[2rem] lg:py-[5rem] lg:px-[10rem]">
                <div>
                    <Image
                    src={mobileApp}
                    style={{width:'100%',height:'100%',objectFit:'contain'}}
                    alt="mobile-app"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-3xl md:text-5xl lg:text-7xl">
                        Empower your financial future seamlessly
                    </span>
                    <span className="text-sm md:text-md lg:text-lg">
                    Effortless money management, personalized financial goals, and smart investments. Open your account today.
                    </span>
                    <div className="flex flex-row justify-center lg:justify-left gap-5">
                        <button className="rounded-3xl bg-blue-500 flex items-center justify-end py-[0.5rem] px-[1rem] text-white">
                            Start Today
                        </button>
                        <button className="rounded-3xl border bg-white border border-gray grid place-items-center text-dark ps-10 pe-10">
                            Claim Your Card
                        </button>
                    </div>
                    <div className="grid gap-2">
                        <div className="text-center lg:text-left text-4xl font-semibold">
                            31 Million+ 
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">
                            Your future, powered by millions. We're committed to providing cutting-edge financial services that help you thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-[2rem] lg:py-[5rem] lg:px-[10rem]">
                <div className="text-center">
                    <span className="text-3xl lg:text-5xl font-bold">
                    Experience the best <br/>
                    of our features.
                    </span>
                </div>
                <div className="parent grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 lg:gap-10 lg:pt-10" style={{marginTop:'2rem'}}>
                    <div className="col-span-1 row-span-1 lg:col-span-3 lg:row-span-1 bg-gray-100 p-[2rem]">
                        <span className="text-1xl md:text-2xl lg:text-3xl font-bold">
                        Design a card that's uniquely yours.
                        </span>
                        <p className="text-gray-500 text-sm md:text-md lg:text-md">Customize your card with a range of colors, patterns, and designs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam iure dicta.</p>
                    </div>
                    <div className="lg:col-span-3 row-span-1 bg-gray-100 p-[2rem]">
                        <span className="text-1xl md:text-2xl lg:text-3xl font-bold">
                        Your Finances, Personalized
                        </span>
                        <p className="text-gray-500 text-sm md:text-md lg:text-md">
                        Track your spending, analyze your income and expenses, and get personalized recommendations to optimize your financial habits.
                        </p>
                    </div>
                    <div className="lg:col-span-6 row-span-2 bg-gray-100 p-[2rem]">
                        <span className="text-1xl md:text-2xl lg:text-3xl font-bold">
                        Free global transfers.
                        </span>
                        <p className="text-gray-500 text-sm md:text-md lg:text-md">
                        Experience the freedom of hassle-free, fee-free global money transfers.
                        </p>
                    </div>
                    <div className="lg:col-span-2 row-span-1 bg-gray-100 py-[1rem] px-[2rem] lg:p-[2rem]">
                        <span className="text-1xl md:text-2xl lg:text-3xl font-bold">
                        Hold money for 20+ currencies.
                        </span>
                    </div>
                    <div className="lg:col-span-2 row-span-1 bg-gray-100 py-[1rem] px-[2rem] lg:p-[2rem]">
                        <span className="text-1xl md:text-2xl lg:text-3xl font-bold">
                        Manage all your subscriptions in one place conveniently.
                        </span>
                    </div>
                    <div className="lg:col-span-2 row-span-1 bg-gray-100 py-[1rem] px-[2rem] lg:p-[2rem]">
                        <span className="text-1xl md:text-2xl lg:text-3xl font-bold">
                            Discover more features to simplify your financial life
                        </span>
                    </div>
                </div>
            </section>

            <section className="p-[2rem] lg:py-[5rem] lg:px-[10rem]">
                <div className="text-center">
                    <span className="text-3xl lg:text-5xl font-bold">
                    Trusted by 300+ of the world's <br />
                    fastest-growing companies.
                    </span>
                    <p className="text-gray-500 pt-5 pb-5">
                    Many companies have trusted Zep with their financial needs, confident in the security of their funds.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {companies.map(x => 
                        <div key={x.id} className="grid place-items-center bg-gray-100 p-5 rounded-2xl" style={{margin:'0 auto',width:'100%'}}>
                            <Image
                               src={x.image} 
                                alt={x.name}
                                style={{
                                    mixBlendMode: 'luminosity',
                                    opacity: '0.2',
                                    width:x.name != 'Citi' ? '200px' : '100px',
                                }}
                                title={x.name}
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
export default LandingPage;