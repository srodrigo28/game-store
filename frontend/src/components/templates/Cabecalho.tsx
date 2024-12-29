import IconeCarrinho from '@/shared/IconeCarrinho'
import Logo from '@/shared/Logo'
import Link from 'next/link'

export default function Cabecalho() {
    return (
        <div className="flex flex-col container h-24"
            style={{ background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)'}}
        >
            <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo />
                    <Link href="">
                        <IconeCarrinho qtdItens={0} />
                    </Link>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
        </div>
    )
}
