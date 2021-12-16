const Article = (props) => {
    return (
        <div>
            {/* <h2>{props.title}</h2> */}
            <p>{props.content}</p>
            <p>{props.updatedAt.toString()}</p>
        </div>
    );
}

export default Article;