function HeaderItems({ Icon, title}) {
    return (
        <div className="flex flex-col items-center w-12 sm:w-20 cursor-pointer hover:text-white group ">
            <Icon className="h-10 mb-2 text-4xl  duration-500"/>
            <p className="tracking-widest opacity-0 group-hover:opacity-100 duration-500">{title}</p>
        </div>
    );
}

export default HeaderItems;