export default function CustomButton({children, onClick}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}