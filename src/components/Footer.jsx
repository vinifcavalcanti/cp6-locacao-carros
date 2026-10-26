import { Link } from 'react-router'
import { ArrowUpRight, AtSign, Mail, MapPin } from 'lucide-react'

function Footer() {
	return (
		<footer className="border-t border-white/10 bg-zinc-950 text-white">
			<div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
				<div className="grid gap-12 md:grid-cols-3">
					<div>
						<Link to="/" className="inline-block">
							<h2 className="text-2xl font-bold tracking-widest">
								PRESTIGE
							</h2>
							<p className="text-xs tracking-[0.4em] text-zinc-400">
								MOTORS
							</p>
						</Link>

						<p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
							Uma experiência exclusiva em locação de
							veículos importados. Performance,
							elegância e liberdade em cada jornada.
						</p>
					</div>

					<div>
						<h3 className="mb-6 text-sm font-semibold uppercase tracking-widest">
							Navegação
						</h3>

						<div className="flex flex-col gap-4 text-sm text-zinc-400">
							<Link to="/" className="hover:text-white">
								Início
							</Link>
							<Link to="/carros" className="hover:text-white">
								Nossa Frota
							</Link>
						</div>
					</div>

					<div>
						<h3 className="mb-6 text-sm font-semibold uppercase tracking-widest">
							Contato
						</h3>

						<div className="flex flex-col gap-4 text-sm text-zinc-400">
							<div className="flex items-center gap-3">
								<MapPin size={17} />
								<span>São Paulo, SP</span>
							</div>

							<div className="flex items-center gap-3">
								<Mail size={17} />
								<span>Atendimento sob consulta</span>
							</div>

							<div className="flex items-center gap-3">
								<AtSign size={17} />
								<span>Redes sociais em breve</span>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-zinc-500 md:flex-row">
					<p>
						© {new Date().getFullYear()} Prestige Motors.
						Projeto acadêmico FIAP.
					</p>

					<Link
						to="/carros"
						className="flex items-center gap-2 transition hover:text-white"
					>
						Explorar nossa frota
						<ArrowUpRight size={15} />
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
