import Link from "next/link";
export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

const links = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "About",
		route: "/about",
	},
];

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<title>Proyecto de pruebas</title>
			</head>
			<body>
				<header>
					<nav>
						<ul>
							{links.map(({ label, route }) => (
								<li key={route}>
									<Link href={route}>{label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
