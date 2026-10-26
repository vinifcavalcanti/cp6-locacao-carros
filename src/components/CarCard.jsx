import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

function CarCard({ carro }) {
	return (
		<article className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
			<div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
				<img
					src={carro.imagem}
					alt={carro.nome}
					loading="lazy"
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>

				<span className="absolute top-4 left-4 rounded bg-black/70 px-3 py-2 text-xs text-white backdrop-blur-sm">
					{carro.categoria}
				</span>
			</div>

			<div className="p-6">
				<p className="mb-2 text-xs tracking-widest text-zinc-500 uppercase">
					{carro.marca}
				</p>

				<h3 className="text-2xl font-semibold text-white">
					{carro.nome}
				</h3>

				<p className="mt-3 text-sm leading-6 text-zinc-400">
					{carro.descricao}
				</p>

				<div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
					<span className="text-sm text-zinc-400">
						Consulte disponibilidade
					</span>

					<Link
						to="/carros"
						aria-label={`Conhecer ${carro.nome}`}
						className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
					>
						<ArrowUpRight size={18} />
					</Link>
				</div>
			</div>
		</article>
	)
}

export default CarCard
