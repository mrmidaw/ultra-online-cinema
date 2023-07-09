import React, { FC } from "react";

import Layout from "@/components/layout/Layout";
import Heading from "@/components/ui/heading/Heading";
import { Meta } from "@/utils/meta";

const Home: FC = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading title="Watch movies Online" className="gray-300 mb-8 text-xl" />
		</Meta>
	);
};

export default Home;
