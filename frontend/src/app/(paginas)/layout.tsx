import Pagina from "@/components/templates/Pagina";

export default function Layout(props: any){
    return(
        <Pagina>
            {props.children}
        </Pagina>
    )
}