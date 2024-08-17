import image from '../images/avatar-jessica.jpeg';


const ProfileCard = () => {

    const profile =
    {
        name: "Jessica Randall",
        from: "London, United Kingdom",
        interests: '"Front-end developer and avid reader."',
        links: [
            { media: "GitHub", link: "#" },
            { media: "  Frontend Mentor", link: "#" },
            { media: "  LinkedIn", link: "#" },
            { media: "  Twitter", link: "#" },
            { media: "  Instagram", link: "#" },
        ]
    };

    return (
        <div className="m-5 max-w-[22rem] bg-gray-800 rounded-xl p-8 flex flex-col items-center">
            <img className='w-24 h-24 rounded-full' src={image} alt="profile image" />
            <h1 className=' font-bold text-xl pt-4'>{profile.name}</h1>
            <p className='text-green-300 text-sm py-2'>{profile.from}</p>
            <p className='text-sm pt-3 pb-5'>{profile.interests}</p>
            <div className='flex flex-wrap text-center gap-4 '>
                {profile.links.map((link, index) => (
                    <a className='block bg-gray-700 rounded-md w-full py-3  hover:bg-green-300 font-semibold hover:text-gray-900 transition duration-200' key={index} href={link.link}>{link.media}</a>
                ))}
            </div>
        </div>
    )
}

export default ProfileCard