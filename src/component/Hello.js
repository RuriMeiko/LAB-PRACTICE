export default function Hello() {
    const hiAll = () => {
        alert("hello everyone")
    }
    const hiYou = (name) => {
        alert("Hello " + name)
    }

    return (
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou('haha')}>Hi you</button>
        </span>

    )
}
