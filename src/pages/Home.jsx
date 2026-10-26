import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { ShieldCheck, Gem, Gauge } from 'lucide-react'
import CarCard from '../components/CarCard'
import { carros } from '../data/carros'

function Home() {
	return (
		<main className="bg-zinc-950 text-white">
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,#27272a_0%,#09090b_65%)]" />

				<div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
					<div className="relative z-10">
						<div className="mb-8 flex items-center gap-3">
							<span className="h-px w-8 bg-white/60" />
							<span className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
								Experiência automotiva premium
							</span>
						</div>

						<h1 className="text-4xl leading-[1.1] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
							O extraordinário está na
							<span className="text-zinc-500"> sua direção.</span>
						</h1>

						<p className="mt-8 max-w-xl text-base leading-8 text-zinc-400">
							Descubra uma nova forma de dirigir. Uma seleção
							exclusiva de veículos importados para transformar
							cada trajeto em uma experiência inesquecível.
						</p>

						<div className="mt-10 flex flex-wrap gap-4">
							<Link
								to="/carros"
								className="inline-flex items-center gap-3 rounded-md bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
							>
								Explorar nossa frota
								<ArrowUpRight size={18} />
							</Link>

							<a
								href="#experiencia"
								className="inline-flex items-center gap-3 rounded-md border border-white/20 px-6 py-4 text-sm text-white transition hover:bg-white/10"
							>
								Conheça a Prestige
								<ArrowRight size={18} />
							</a>
						</div>

						<div className="mt-16 flex items-center gap-3 text-xs tracking-widest text-zinc-500 uppercase">
							<ChevronDown size={18} />
							Explore a experiência
						</div>
					</div>

					<div className="relative">
						<div className="absolute -inset-6 rounded-full bg-white/5 blur-3xl" />

						<div className="relative overflow-hidden rounded-xl border border-white/10">
							<img
								src="/images/porsche-911.jpg"
								alt="Porsche 911 GT3 RS em destaque"
								className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

							<div className="absolute right-6 bottom-6 left-6">
								<p className="text-xs tracking-widest text-zinc-300 uppercase">
									Destaque da coleção
								</p>

								<h2 className="mt-2 text-3xl font-semibold">
									Porsche 911 GT3 RS
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-10">
				<div className="mx-auto max-w-7xl">
					<div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<div>
							<p className="mb-4 text-xs tracking-[0.25em] text-zinc-400 uppercase">
								Nossa coleção
							</p>

							<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
								Veículos em destaque
							</h2>

							<p className="mt-4 max-w-xl text-zinc-400">
								Conheça alguns dos modelos que representam
								a experiência Prestige Motors.
							</p>
						</div>

						<Link
							to="/carros"
							className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300"
						>
							Ver toda a frota
							<ArrowUpRight size={18} />
						</Link>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{carros.map((carro) => (
							<CarCard key={carro.id} carro={carro} />
						))}
					</div>
				</div>
			</section>

			<section
				id="experiencia"
				className="border-t border-white/10 bg-zinc-900 px-6 py-24 lg:px-10"
			>
        
        
<section className="border-t border-white/10 bg-zinc-950 px-6 py-20 lg:px-10">
	<div className="mx-auto max-w-7xl">
		<div className="mb-12">
			<p className="mb-4 text-xs tracking-[0.25em] text-zinc-400 uppercase">
				Nossos diferenciais
			</p>

			<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
				Uma experiência além do comum.
			</h2>
		</div>

		<div className="grid gap-6 md:grid-cols-3">
			<div className="rounded-xl border border-white/10 bg-zinc-900 p-8">
				<Gem className="mb-8 text-white" size={30} />

				<h3 className="mb-4 text-xl font-semibold">
					Seleção exclusiva
				</h3>

				<p className="text-sm leading-7 text-zinc-400">
					Uma coleção de veículos importados escolhidos
					para quem valoriza design e exclusividade.
				</p>
			</div>

			<div className="rounded-xl border border-white/10 bg-zinc-900 p-8">
				<Gauge className="mb-8 text-white" size={30} />

				<h3 className="mb-4 text-xl font-semibold">
					Alta performance
				</h3>

				<p className="text-sm leading-7 text-zinc-400">
					Modelos que representam o melhor da engenharia
					e do desempenho automotivo.
				</p>
			</div>

			<div className="rounded-xl border border-white/10 bg-zinc-900 p-8">
				<ShieldCheck className="mb-8 text-white" size={30} />

				<h3 className="mb-4 text-xl font-semibold">
					Experiência premium
				</h3>

				<p className="text-sm leading-7 text-zinc-400">
					Um conceito de locação focado em qualidade,
					conforto e atenção aos detalhes.
				</p>
			</div>
		</div>
	</div>
</section>

				<div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-2">
					<div>
						<p className="mb-5 text-xs tracking-[0.25em] text-zinc-400 uppercase">
							Sobre a Prestige Motors
						</p>

						<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
							Mais do que dirigir.
							<br />
							<span className="text-zinc-500">
								Viva a experiência.
							</span>
						</h2>
					</div>

					<p className="max-w-lg text-base leading-8 text-zinc-400">
						A Prestige Motors é uma proposta de locadora
						especializada em veículos importados. Nosso conceito
						combina elegância, exclusividade e paixão pelo
						universo automotivo.
					</p>
				</div>
			</section>
		</main>
	)
}

export default Home
