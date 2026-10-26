import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'

function Home() {
	return (
		<main className="bg-zinc-950 text-white">
			<section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,#27272a_0%,#09090b_60%)]" />

				<div className="pointer-events-none absolute right-[-5%] bottom-[10%] hidden text-[22rem] font-black tracking-tighter text-white/[0.025] select-none lg:block">
					PM
				</div>

				<div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
					<div className="max-w-3xl">
						<div className="mb-8 flex items-center gap-3">
							<span className="h-px w-8 bg-white/60" />
							<span className="text-xs font-medium tracking-[0.25em] text-zinc-400 uppercase">
								Experiência automotiva premium
							</span>
						</div>

						<h1 className="text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-8xl">
							O extraordinário
							<br />
							está na
							<br />
							<span className="text-zinc-500">sua direção.</span>
						</h1>

						<p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
							Descubra uma nova forma de dirigir. Uma seleção
							exclusiva de veículos importados para transformar
							cada trajeto em uma experiência inesquecível.
						</p>

						<div className="mt-10 flex flex-wrap items-center gap-4">
							<Link
								to="/carros"
								className="inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
							>
								Explorar nossa frota
								<ArrowUpRight size={18} />
							</Link>

							<a
								href="#experiencia"
								className="inline-flex items-center gap-3 rounded-md border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
							>
								Conheça a Prestige
								<ArrowRight size={18} />
							</a>
						</div>
					</div>

					<div className="mt-20 flex items-center gap-3 text-xs tracking-widest text-zinc-500 uppercase">
						<ChevronDown size={18} />
						<span>Explore a experiência</span>
					</div>
				</div>
			</section>

			<section
				id="experiencia"
				className="border-t border-white/10 bg-zinc-900 px-6 py-24 lg:px-10"
			>
				<div className="mx-auto max-w-7xl">
					<p className="mb-5 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
						Sobre a Prestige Motors
					</p>

					<div className="grid items-end gap-10 lg:grid-cols-2">
						<h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
							Mais do que dirigir.
							<br />
							<span className="text-zinc-500">
								Viva a experiência.
							</span>
						</h2>

						<p className="max-w-lg text-base leading-8 text-zinc-400">
							A Prestige Motors é uma proposta de locadora
							especializada em veículos importados. Nosso conceito
							combina elegância, exclusividade e paixão pelo
							universo automotivo.
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
