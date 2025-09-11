import Link from "next/link";

export const metadata = {
	title: "Site momentanément indisponible",
	description:
		"Notre site est temporairement indisponible pour maintenance. Merci de revenir plus tard.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function MaintenancePage() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
			<div className="max-w-xl text-center">
				<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-8 w-8"
					>
						<path d="M11.001 10h2v5h-2v-5zm0-4h2v2h-2V6z" />
						<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
					</svg>
				</div>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Site momentanément indisponible
				</h1>
				<p className="mt-4 text-gray-600">
					Nous effectuons actuellement une maintenance. Merci de revenir un peu plus tard.
				</p>
				{/* Boutons supprimés selon la demande */}
			</div>
		</main>
	);
}


