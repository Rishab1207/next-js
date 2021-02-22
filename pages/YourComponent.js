import Image from "next/image";

const YourComponent = () => {
	return (
		<Image
			src="/public/profile.jpg"
			height={144}
			width={144}
			alt="Rishab Sharma"
		/>
	);
};

export default YourComponent;
