import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import SmoothScrollWrapper from "@/components/SmoothScroll";
import CustomCursorWrapper from "@/components/CustomCursor";
import HeaderNav from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "NextJS Starter —",
	description:
		"A starter template for Next.js with TypeScript, Tailwind CSS, and ESLint.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SmoothScrollWrapper>
					<CustomCursorWrapper>
						<NextTopLoader color="#999999" />
						<HeaderNav />
						{children}
					</CustomCursorWrapper>
				</SmoothScrollWrapper>
			</body>
		</html>
	);
}
