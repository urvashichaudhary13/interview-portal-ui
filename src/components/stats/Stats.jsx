export const Stats = (props) => {
    const { count, title } = props
        return (
            <div class="gap-div">
        <i class="bi bi-people people-font"></i>
        <h1>{count}</h1>
        <p>{title}</p>
        </div>
        )
}

export default Stats;