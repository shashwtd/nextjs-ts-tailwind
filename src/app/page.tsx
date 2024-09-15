"use client";

import Loader from "@/components/Loader";
import { useEffect } from "react";

const HomePage = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center p-0">
      <Loader />
		</div>
	);
};

export default HomePage;
