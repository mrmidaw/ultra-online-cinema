import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import LogoImage from "@/assets/images/logo.svg";

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={LogoImage}
					width={247}
					height={34}
					alt="ultra cinema"
					draggable={false}
				/>
			</a>
		</Link>
	);
};

export default Logo;
