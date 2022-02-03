import React from 'react'

const LikeButton = (props) => {
    const { recipeTitle } = props;
    const [status, setStatus] = React.useState(false);
    const [likes, setLikes] = React.useState(0);
    return (
        <p>
            <button
                disabled={status}
                onClick={() => {
                    setStatus(true)
                    let x = likes + 1;
                    setLikes(x)
                }}>
                Like {recipeTitle}
            </button> : {likes} like(s)
        </p >
    )
}
export default LikeButton;

