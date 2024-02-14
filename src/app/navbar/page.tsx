import Image from "next/image";
import appLogo from "../dist/image/applogo.png";




const Navbar = () => {
    return (
        <>
            <section className="navbar flex ps-10 pe-10 pt-5 pb-5">
                <div className="flex flex-1">
                    <div className="grid place-items-center">
                        <Image
                            src={appLogo}
                            width={45}
                            height={45}
                            alt="logo"
                        />
                    </div>
                    
                    <span className="brand-name grid place-items-center ps-3 pe-3 font-black" >Zep</span>
                </div>
                <div className="flex-1 grid place-items-center">
                    <ul className="flex gap-10">
                        <li>Offerings</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Plans</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="flex-1 grid grid-cols-2">
                   <button className="rounded-xl flex items-center justify-end ps-2 pe-10">
                     Sign In
                   </button>
                   <button className="rounded-3xl border bg-black grid place-items-center text-white ps-10 pe-10">
                    Create Account
                   </button>
                </div>
            </section>
        </>
    )
}

export default Navbar;