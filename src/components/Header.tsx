"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Arrow_Right } from "@/utils/icons";

const navigationLinks = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "References", path: "/references" },
	{ name: "Mentorship", path: "/mentorship" },
	{ name: "Where to trade", path: "/platforms" },
];

const HeaderNav = () => {
	const pathname = usePathname();

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	return (
		<header className="fixed z-40 w-screen h-16 flex items-center justify-center px-4">
			<div className="w-full max-w-[1920px] flex items-center justify-between px-4 relative">
				<Link href="/">
					<div className="text-xl font-medium text-neutral-200">
						JTT Trading
					</div>
				</Link>
				<nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-lg font-medium tracking-tight">
					{navigationLinks.map(({ name, path }) => (
						<Link key={path} href={path}>
							<span
								className={` ${
									pathname === path ? "text-neutral-100" : "text-neutral-500"
								}`}>
								{name}
							</span>
						</Link>
					))}
				</nav>
				<div className="flex gap-3 items-center mt-1">
					<Link
						href={"/mentorships"}
						className="group w-max h-9 p-1 gap-3 flex items-center rounded-full bg-neutral-300 shadow-lg shadow-transparent duration-300 hover:shadow-white/20">
						<span className="text-neutral-800 font-semibold pl-3">
							Book Mentorship
						</span>
						<div className="w-11 h-full rounded-full bg-neutral-400/75 group-hover:bg-neutral-400 duration-300 relative overflow-hidden">
							<span className="absolute w-full h-full px-2 duration-500 group-hover:scale-0 group-hover:translate-x-full">
								<Arrow_Right />
							</span>
							<span className="absolute w-full h-full px-2 duration-500 group-hover:scale-100 group-hover:translate-x-0 -translate-x-full scale-0">
								<Arrow_Right color="#111" />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default HeaderNav;
