import Logo from './../assets/logo.png';

function Header() {
    return (
        <div className="flex flex-1 justify-between">
            <div className='flex items-center text-2xl font-bold p-5 text-sky-400'>
                <img src={Logo} width={50} height={50} />
                Priyanka J
            </div>
            <button className='m-5 mr-10 bg-[#162350] bg-opacity-50 rounded-lg items-center p-3 font-semibold border border-[#263e8c] cursor-pointer hover:bg-[#1b2c64]'>Let's Connect</button>
        </div>
    );
}

export default Header;
