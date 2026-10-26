import { useState } from 'react'
import { ArrowUpRight, CarFront, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router'
import CarCard from '../components/CarCard'
import { carros } from '../data/carros'

function Carros() {
	const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

	const categorias = [
		'Todos',
		...new Set(carros.map((carro) => carro.categoria)),
	]

	const carrosFiltrados =
		categoriaAtiva === 'Todos'
			? carros
			: carros.filter((carro) => carro.categoria === categoriaAtiva)

	return (
		<main className="min-h-[calc(100vh-5rem)] bg-zinc-950 text-white">
			<section className="relative overflow-hidden border-b border-white/10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#27272a_0%,#09090b_65%)]" />

				<div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-10">
					<div className="mb-8 flex items-center gap-3">
						<span className="h-px w-8 bg-white/60" />
						<span className="text-xs tracking-[0.25em] text-zinc-400 uppercase">
							Coleção Prestige Motors
						</span>
					</div>

					<h1 className="max-w-3xl text-5xl leading-tight font-semibold tracking-tight sm:text-6xl lg:text-7xl">
						Conheça nossa
						<span className="text-zinc-500"> frota.</span>
					</h1>

					<p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
						Explore uma seleção de veículos importados que
						combinam desempenho, tecnologia e design.
						Encontre o modelo ideal para sua próxima experiência.
					</p>

					<div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
						<div className="flex items-center gap-3">
							<CarFront size={22} className="text-zinc-400" />

							<div>
								<p className="text-xl font-semibold">
									{carros.length}
								</p>
								<p className="text-xs text-zinc-500">
									Modelos no catálogo
								</p>
							</div>
						</div>

						<div className="h-10 w-px bg-white/10" />

						<div>
							<p className="text-xl font-semibold">
								{categorias.length - 1}
							</p>
							<p className="text-xs text-zinc-500">
								Categorias
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
				<div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
					<div>
						<p className="mb-3 text-xs tracking-[0.25em] text-zinc-500 uppercase">
							Explore os modelos
						</p>

						<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
							Veículos disponíveis no catálogo
						</h2>
					</div>

					<p className="text-sm text-zinc-400">
						Exibindo {carrosFiltrados.length} de {carros.length} modelos
					</p>
				</div>

				<div className="mb-10 flex flex-wrap items-center gap-3">
					<div className="mr-3 flex items-center gap-2 text-sm text-zinc-400">
						<SlidersHorizontal size={18} />
						<span>Filtrar:</span>
					</div>

					{categorias.map((categoria) => (
						<button
							key={categoria}
							type="button"
							onClick={() => setCategoriaAtiva(categoria)}
							aria-pressed={categoriaAtiva === categoria}
							className={`rounded-md border px-5 py-3 text-sm font-medium transition ${
								categoriaAtiva === categoria
									? 'border-white bg-white text-zinc-950'
									: 'border-white/15 bg-zinc-900 text-zinc-400 hover:border-white/40 hover:text-white'
							}`}
						>
							{categoria}
						</button>
					))}
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{carrosFiltrados.map((carro) => (
						<CarCard key={carro.id} carro={carro} />
					))}
				</div>
			</section>

			<section className="border-t border-white/10 bg-zinc-900">
				<div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
					<div>
						<p className="mb-4 text-xs tracking-[0.25em] text-zinc-400 uppercase">
							Prestige Motors
						</p>

						<h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
							Sua próxima experiência começa aqui.
						</h2>

						<p className="mt-4 text-sm leading-7 text-zinc-400">
							Conheça nossa proposta e descubra o universo
							dos veículos importados.
						</p>
					</div>

					<Link
						to="/"
						className="inline-flex w-fit items-center gap-3 rounded-md bg-white px-6 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
					>
						Voltar ao início
						<ArrowUpRight size={18} />
					</Link>
				</div>
			</section>
		</main>
	)
}

export default Carros
